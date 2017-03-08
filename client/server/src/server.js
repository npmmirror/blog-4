import express from 'express';
import ejs from 'ejs';
import path from 'path';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import rootRoute from './../../src/routes/init.js';
import reducers from './../../src/reducers/init';
import template from './../../dist/template.html';
import config from './../../src/config.js';
import actions from './../../src/actions/init.js';

const port = 4444;
const app = express();
const publicPath = path.join(__dirname, './../../dist');
const {
	taps
} = config.getIn(['url']).toJS();

ejs.delimiter = '?';
//注册ejs模板为html页。简单的讲，就是原来以.ejs为后缀的模板页，现在的后缀名可以//是.html了
app.engine('.html', ejs.__express);
//设置视图模板的默认后缀名为.html,避免了每次res.Render("xx.html")的尴尬
app.set('view engine', 'html');
app.use(express.static(publicPath));

const tapHighlight = (pathname) => {
	for (let x in taps) {
		if (x !== 'article' && pathname.indexOf(taps[x]) !== -1) {
			return taps[x];
		}
	}
	return taps.article;
};


function render(req, res, renderProps) {
	/*	const frontUrl = renderProps.location.pathname;
		const { name } = renderProps.params;*/
	// const { type } = renderProps.components[1].content;
	// console.log(renderProps);
	let store = createStore(reducers),
		highlight = tapHighlight(req.url);

	store.dispatch({ type: actions.getIn(['pages', 'taps']), taps: highlight });

	const content = renderToString(
		<Provider store={store}>
			<RouterContext {...renderProps} />
		</Provider>
	);
	const preloadedState = store.getState();
	const page = ejs.render(template, { content, preloadedState });
	res.send(page);
}

app.get('*', (req, res) => {
	match({ routes: rootRoute, location: req.url }, (error, redirectLocation, renderProps) => {
		/*if (error) {
			return res.status(500).sendFile("config.error50xFile");
		}
		if (redirectLocation) {
			return res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
		}*/
		if (renderProps) {
			return render(req, res, renderProps);
		}
		return false;
		/*return res.status(404).sendFile(config.error404File);*/
	});
});

app.listen(port, () => {
	console.log(`Listening on port ${port}...`);
});
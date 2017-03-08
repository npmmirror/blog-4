import actions from '../actions/init.js';
import Immutable from 'immutable';
import config from './../config.js';
const {
	taps
} = config.getIn(['url']).toJS();

export const defaultState = Immutable.fromJS({currentIndex: 1, tapsHighlight: taps.article});

export default function pagesReducer(state = defaultState, action) {
	switch (action.type) {
		case actions.getIn(['pages', 'currentIndex']): {
			let tmp = state;
			return tmp.merge({currentIndex: action.page});
		}
		case actions.getIn(['pages', 'taps']): {
			let tmp = state;
			return tmp.merge({tapsHighlight: action.taps});
		}
		default:
			return state;
	}
}
import PageDetail from './../../PageDetail/components/pagedetail.jsx';

export default class Dairy extends PageDetail {
	componentDidMount() {
		super.componentDidMount();
		console.log(this.props.params.blogId);
	}
}
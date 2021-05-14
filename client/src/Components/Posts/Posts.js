import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Pagination } from 'react-bootstrap';
import { list, countpost } from '../../Api/Post';
import './style.css';
// import { isAuthenticated } from '../../Api';

class Posts extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: [],
			page: 1,
			count: 0,
			// redirectToSignin: false,
			// noMorePosts: false,
			// bookmark: false,
		};
	}

	componentDidMount() {
		this.loadPosts(this.state.page);
		this.counter();
	}

	loadPosts = page => {
		list(page).then(data => {
			if (!data.error) {
				console.log(data.data);
				this.setState({ posts: data.data });
				return;
			}
			console.log(data.error);
		});
	};

	counter = () => {
		countpost().then(data => {
			if (!data.error) {
				parseInt(data.count, 10);
				this.setState({ count: data.count });
				return;
			}
			console.log(data.error);
		});
	};

	loadMore = async number => {
		await this.setState(prevState => ({
			page: prevState.page + number,
		}));
		this.loadPosts(this.state.page);
	};

	loadLess = async number => {
		await this.setState(prevState => ({
			page: prevState.page - number,
		}));
		this.loadPosts(this.state.page);
	};

	abs = number => {
		switch (true) {
			case this.state.page > number:
				this.loadLess(this.state.page - number);
				break;
			case this.state.page < number:
				this.loadMore(number - this.state.page);
				break;
			default:
		}
	};

	renderPosts = posts => {
		const items = [];
		const perPageCount = 7;
		for (let number = 1; number <= Math.ceil(this.state.count / perPageCount); number += 1) {
			items.push(
				<Pagination.Item
					key={number}
					active={number === this.state.page}
					onClick={() => this.abs(number)}
				>
					{number}
				</Pagination.Item>,
			);
		}

		return (
			<div className="row">
				<main>
					<div className="post-card-container">
						{posts.map(post => {
							let posterUrl = '';
							let posterName = 'Unknown';
							if (post.postedBy) {
								posterUrl = `/user/${post.postedBy._id}`;
								posterName = post.postedBy.name;
							}

							return (
								<div className="post-card">
									<div className="post-card__header">
										<div className="post-card__picture">
											<div className="post-card__picture-overlay">
												{' '}
												&nbsp;{' '}
											</div>
											<img src="" alt="" className="post-card__picture-img" />
										</div>
										<h3 className="post_card__title">
											<span> {post.title} </span>
										</h3>
									</div>
									<div className="post-card__details">
										<h4 className="post-card__sub-heading"> 3 day tour </h4>
										<p className="post-card__text"> Summary </p>
										<div className="post-card_data">
											{/* <svg className="post-card__icon" xlink:href="" /> */}
											<span> start </span>
										</div>
										<div className="post-card_data">
											{/* <svg className="post-card__icon" xlink:href="" /> */}
											<span> stop </span>
										</div>
									</div>
									<div className="post-card__footer">
										<p>
											<span className="post-card__footer-value"> 3 </span>
											<span className="post-card__footer-text">likes</span>
										</p>
										<p className="post-card__ratings">
											<span className="post-card__footer-value">4</span>
											<span className="post-card__footer-text">rating</span>
											<a
												href="/posts"
												className="post-btn btn btn-lg btn-primary text-uppercase"
											>
												Details
											</a>
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</main>
				{/* <Table striped bordered hover>
					<thead>
						<tr>
							<th>Heading</th>
							<th>Date Posted</th>
							<th>Posted by</th>
							<th>Disease</th>
							<th>Likes</th>
							<th>Summary</th>
							<th>Read more</th>
						</tr>
					</thead>
					<tbody>
						{posts.map(post => {
							console.log(post);

							let posterUrl = '';
							let posterName = 'Unknown';
							if (post.postedBy) {
								posterUrl = `/user/${post.postedBy._id}`;
								posterName = post.postedBy.name;
							}

							return (
								<tr>
									<td className="card-title">{post.title}</td>
									<td className="">{new Date(post.created).toDateString()}</td>
									<td className="">
										<Link to={`${posterUrl}`}>{posterName} </Link>
									</td>
									<td className="">{post.tags[0]}</td>
									<td className="">{post.likes.length}</td>
									<td style={{ wordBreak: 'break-word' }}>{post.description}</td>

									<td>
										<Link to={`/post/${post._id}`}>Read more</Link>
									</td>
								</tr>
							);
						})}
					</tbody>
				</Table> */}
				<div className="center">
					<Pagination>
						{this.state.page > 1 ? (
							<Pagination.Prev onClick={() => this.loadLess(1)} />
						) : (
							''
						)}
						{items}
						{this.state.posts.length ? (
							<Pagination.Next onClick={() => this.loadMore(1)} />
						) : (
							''
						)}
					</Pagination>
				</div>
			</div>
		);
	};

	render() {
		const { posts, page } = this.state;
		return (
			<div>
				{' '}
				{this.renderPosts(posts)}
				<h2 className="mt-5 mb-5">{!posts.length ? 'No more posts!' : ''}</h2>
				{/* <h2 className="mt-5 mb-5">{!posts.length ? 'Loading...' : 'Recent Posts'}</h2> */}
			</div>
		);
	}
}

export default Posts;

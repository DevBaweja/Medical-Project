import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-bootstrap';
import { list, countpost } from '../../Api/Post';
import { serverUrl } from '../variables';

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
							console.log(post);
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
											<div className="post-card__picture-overlay">&nbsp;</div>
											<img
												src={`${serverUrl}/api/post/photo/${post._id}`}
												alt={post.title}
												className="post-card__picture-img"
											/>
										</div>
										<h3 className="post_card__title">
											<span> {post.title} </span>
										</h3>
									</div>
									<div className="post-card__details">
										<h4 className="post-card__sub-heading">
											<Link href={`${posterUrl}`} to={`${posterUrl}`}>
												{posterName}
											</Link>
										</h4>
										<p
											className="post-card__text"
											style={{ wordBreak: 'break-word' }}
										>
											{post.description}
										</p>
										{post.tags.map(tag => (
											<div className="post-card__data">
												<i className="fa fa-tag post-card__icon" />
												<span> {tag} </span>
											</div>
										))}
									</div>
									<div className="post-card__footer">
										<p className="post-card__ratings">
											<i className="fa fa-heart post-card__icon" />
											<span className="post-card__footer-text">
												{post.likes.length} likes
											</span>
										</p>
										<p className="post-card__date">
											<i className="fa fa-calendar post-card__icon" />
											<span className="post-card__footer-text">
												{new Date(post.created).toDateString()}
											</span>
										</p>
										<Link
											href={`/post/${post._id}`}
											to={`/post/${post._id}`}
											className="post-btn btn btn-lg btn-primary"
										>
											Details
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</main>
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

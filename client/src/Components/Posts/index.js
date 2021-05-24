import React from 'react';
import './style.css';

import Posts from './Posts';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../../Api';
import postsSvg from '../../Images/Posts/posts_bg.svg';
import postsBg from '../../Images/Posts/posts_bg_curve.png';
import postIcon from '../../Images/Posts/post-icon.svg';
import tagIcon from '../../Images/Posts/tag-icon.svg';
import verifiedIcon from '../../Images/Posts/verified-icon.svg';

const isActive = (history, path) => {
	if (history.location.pathname === path) return { color: 'white', fontWeight: '600' };
};

class ViewPosts extends React.Component {
	render() {
		const { history } = this.props;
		return (
			<div className= "posts">
				<img className= "posts-bg-img" src= {postsBg}></img> 
				<div className= "container posts-start">
					<div className= "row posts_intro">
						<div className= "col">
							<div className= "posts_title">
								<div className= "motto">Posts</div>
							</div>
							<div className= "posts_content">
								<div className= "content-line">View all type of posts.</div>
								<div className= "content-line">Like posts and share personal experience.</div>
								<div className= "content-line">Ask suggestions from the community and doctors.</div>
							</div>
						</div>
						<div className= "col posts-svg">
							<img src= {postsSvg} class= "posts-svg_svg"></img>
						</div>
					</div>
					<div className= "row">
						<div className= "col">
							<div class="posts_card">
								<img src= {postIcon} class="posts-card_icon posts-card_icon-post"></img>
								<div class="posts-card_heading">500+</div>
								<div class="posts-card_text">Posts</div>
							</div>
						</div>
						<div className= "col">
							<div class="posts_card">
								<img src= {tagIcon} class="posts-card_icon"></img>
								<div class="posts-card_heading">100+</div>
								<div class="posts-card_text">Tags</div>
							</div>
						</div>
						<div className= "col">
							<div class="posts_card">
								<img src= {verifiedIcon} class="posts-card_icon"></img>
								<div class="posts-card_heading">
									90% +
								</div>
								<div class="posts-card_text">Verified Posts</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mb-5">
					<div>
						<div className="text-right">
							<p className="btn btn-outline-primary btn-sm postButton">
								<Link
									className="nav-link share-exp-btn"
									style={isActive(history, '/share_experience')}
									to="/share_experience"
								>
									<i className="fa fa-pencil-square-o mr-2" /> Share Experience
								</Link>
							</p>
						</div>
					</div>
				</div>
				<div className="container mob-table" style={{ overflow: 'scroll' }}>
					<Posts />
				</div>
			</div>
		);
	}
}

export default ViewPosts;

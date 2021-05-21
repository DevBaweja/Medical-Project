import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

import CardLayout from '../WhatWeDo';
import Testimonial from '../ContactUs/Testimonial';
import Testimonialdata from '../../Data/Testimonial_data';
import { subscribe } from '../../Api/Subscribe';
import { isAuthenticated } from '../../Api/';
import { countpost } from '../../Api/Post';
import { countuser } from '../../Api/User';
import newsletter from '../../Images/Home/newsletter.svg';
import postsvg from '../../Images/Home/post.svg';
import membersvg from '../../Images/Home/member.svg';
import pathysvg from '../../Images/Home/pathy.svg';
import diseasesvg from '../../Images/Home/disease.svg';
import datasvg from '../../Images/Home/data.svg';
import logo from '../../Images/logo1.png';
import MainSvg from '../../Images/Home/med.svg';
import pp1 from '../../Images/pp1.png';
import pp2 from '../../Images/pp2.jpg';
import pp3 from '../../Images/pp3.jpg';

class Home extends Component {
	state = {
		email: '',
		postCount: 0,
		userCount: 0,
	};

	componentDidMount() {
		countpost().then(data => {
			this.setState({
				postCount: data.count,
			});
		});
		countuser().then(data => {
			this.setState({
				userCount: data.count,
			});
		});
	}

	onSubscribe = e => {
		e.preventDefault();
		subscribe(this.state).then(res => {
			if (res.status === 200) {
				this.setState({
					email: '',
				});
			}
		});
	};

	onChange = e => {
		this.setState({
			email: e.target.value,
		});
	};

	render() {
		return (
			<div style={{ minHeight: '3500px' }}>
				<div className={isAuthenticated() ? 'dummyclass' : 'mobile'}>
					<div
						style={{
							// backgroundImage: `url(${Background})`,
							// backgroundColor: 'white',
							// flex: '1',
							// alignSelf: 'stretch',
							position: 'absolute',
							backgroundSize: 'cover',
							width: '100%',
							height: '100vh',
							top: '0',
						}}
					>
						<div className= "home-start">
							<div className= "container">
								<div className= "row">
									<div className= "col">
										<div className= "q">
											<div className= "main-top">
												<div className= "main-title">
													<span className= "main-title_first">
														Medi
													</span>
													<span className= "main-title_second">
														Pro
													</span>
												</div>
												<div className= "main-heading">
														Making a meaningful difference in patients’
														lives, experience of common man help each other.
												</div>
											</div>

										</div>
										<div>
											<a href= "/signup" className= "buttonJoin buttonJoinLight">
												Get Started
											</a>
										</div>
									</div>
									<div className= "col main-svg">
										<img
											src={MainSvg}
											className= "main-svg_svg"												
										/>
									</div>
								</div>
							</div>
						</div>

						
							<div>
								<CardLayout />
								<div className="home-testimonials">
									<div className= "home-testimonials_header container">
										<span className="proud-patient">
											Our Proud Users
										</span>
										<a href= "/feedback" className= "home-testimonials_see-more">
											View More &rarr; 
										</a>
									</div>

									<div className="container pt-5 pb-5 ">
										<div className="row">
											<div className="col ">
												<div className="feed-card">
													<div className="feed-card_header">
														<div className="feed-card_heading">
															<img
																src={pp1}
																alt=""
																className="feed-card_img"
																height="50px"
																width="50px"
															/>
														</div>
														<div className="feed-card_rating">
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
														</div>
													</div>

													<div className="feed-card_content">
														"I researched other people who have gone
														through the clinical trials I was going to
														be doing, and I was able to make an informed
														decision… You feel less alone on the site,
														like you’re not the only one going through
														this.
													</div>

													<div className="feed-card_name">LAURA</div>
												</div>
											</div>
											<div className="col ">
												<div className="feed-card">
													<div className="feed-card_header">
														<div className="feed-card_heading">
															<img
																src={pp1}
																alt=""
																className="feed-card_img"
																height="50px"
																width="50px"
															/>
														</div>
														<div className="feed-card_rating">
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
														</div>
													</div>

													<div className="feed-card_content">
														"I researched other people who have gone
														through the clinical trials I was going to
														be doing, and I was able to make an informed
														decision… You feel less alone on the site,
														like you’re not the only one going through
														this.
													</div>

													<div className="feed-card_name">LAURA</div>
												</div>
											</div>
											<div className="col ">
												<div className="feed-card">
													<div className="feed-card_header">
														<div className="feed-card_heading">
															<img
																src={pp1}
																alt=""
																className="feed-card_img"
																height="50px"
																width="50px"
															/>
														</div>
														<div className="feed-card_rating">
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
															<i
																className="fa fa-star fa-lg feed-card_icon"
																aria-hidden="true"
															/>
														</div>
													</div>

													<div className="feed-card_content">
														"I researched other people who have gone
														through the clinical trials I was going to
														be doing, and I was able to make an informed
														decision… You feel less alone on the site,
														like you’re not the only one going through
														this.
													</div>

													<div className="feed-card_name">LAURA</div>
												</div>
											</div>
										</div>
									</div>

									{/* <Testimonial slides={Testimonialdata} /> */}
								</div>
								

								<div className= "container about-stats">
									<div className= "about-title text-center">Stats for nerds</div>
									<div className= "row about">
										<div className= "col about-svg">
											<img src={datasvg} className= "about-img" ></img>
										</div>
										<div className= "col about-data">
											<div className= "row">
												<div className= "col about-data_card">
													<img src= {membersvg} className="about-data_card-img" ></img>
													<span className= "about-data_card-content">100K+ Members</span>
												</div>
												<div className= "col about-data_card">
													<img src= {postsvg} className="about-data_card-img" ></img>
													<span className= "about-data_card-content">1000+ Posts</span>
												</div>
											</div>
											<div className= "row about-data">
												<div className= "col about-data_card">
													<img src= {diseasesvg} className="about-data_card-img" ></img>
													<span className= "about-data_card-content">100+ Diseases</span>
												</div>
												<div className= "col about-data_card">
													<img src= {pathysvg} className="about-data_card-img" ></img>
													<span className= "about-data_card-content">80+ Pathy</span>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="newsletter newsletter-img container" style= {{backgroundImage: `url(${newsletter})`}}>
									<div className="subscribe-us">
										<div className="subscribe-us_title">Subscribe Us</div>
										<div className="subscribe-us_content">
											<div className="subscribe-us_para-1">
												We’re taking complicated stuff and making it super
												simple. Our teams are full of smart and savvy folks
												working on challenging tasks.
											</div>
											<div className="subscribe-us_para-2">
												We’re taking complicated stuff and making it super
												simple. Our teams are full of smart and savvy folks
												working on challenging tasks.
											</div>
										</div>

										<div className="subscribe-us_form">
											<input
												id="email"
												type="email"
												className="subscribe-us_input"
												placeholder="Email address"
												required=""
											/>
											<button type="submit" className="subscribe-us_submit">
												Subscribe
											</button>
										</div>
									</div>
									{/* <img
										src={newsletter}
										alt=""
										className="img-responsive newsletter-img"
									/> */}
								</div>
							</div>
						
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

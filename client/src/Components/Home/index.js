import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';
import CardLayout from '../WhatWeDo';
import logo from '../../Images/logo1.png';
import MainSvg from '../../Images/Home/med.svg';

import Testimonial from '../ContactUs/Testimonial';
import Testimonialdata from '../../Data/Testimonial_data';
import { subscribe } from '../../Api/Subscribe';
import { isAuthenticated } from '../../Api/';
import { countpost } from '../../Api/Post';
import { countuser } from '../../Api/User';

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
			<div style={isAuthenticated() ? { minHeight: '88vh' } : { minHeight: '2650px' }}>
				<div className={isAuthenticated() ? 'dummyclass' : 'mobile'}>
					<div
						style={{
							//backgroundImage: `url(${Background})`,
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
						<div className="container-fluid section1" style={{ minHeight: '50px' }}>
							<div className="text-white text-center jbtron">
								<Container fluid>
									<Row>
										<Col md={6} sm={12}>
											<div style={{ paddingTop: '1em' }}>
												<div>
													{/* <img src={logo} className="img-responsive" /> */}

													<h2 className="main-title">MediPro</h2>
												</div>

												<div>
													<p className="lead lead-home">
														Making a meaningful difference in patients’
														lives
													</p>
												</div>

												<div className="row mainbtn">
													<div className="mainBtn">
														<Link to="/signup">
															<button
																type="button"
																className="buttonJoin buttonJoinLight"
															>
																Get Started
															</button>
														</Link>
													</div>

													{/* <div className="mainBtn">
														<Link to="/share_experience">
															<button
																type="button"
																className="btn  buttonJoin buttonJoinDark float-left"
															>
																Ask Suggestion
															</button>
														</Link>
													</div> */}
												</div>
											</div>
										</Col>

										<Col md={6} sm={12}>
											<img
												src={MainSvg}
												className="img-responsive centre-logo"
												// width="100%"
												// height="auto"
												alt="logo"
											/>
										</Col>
									</Row>
								</Container>
							</div>
						</div>

						{isAuthenticated() ? null : (
							<div>
								<CardLayout />
								<div>
									<h2 className="text-center" style={{ marginTop: 100 }}>
										What people say about our platform
									</h2>
									<Testimonial slides={Testimonialdata} />
								</div>
								<div className="sta row">
									<div className="col-md-3">
										<div className="card shadow p-3 mb-5 bg-white rounded">
											<div className="card-body">
												<h5 className="card-title text-center font-weight-bold">
													{this.state.userCount}
												</h5>
												<p className="card-text text-center">
													No. of Members
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card shadow p-3 mb-5 bg-white rounded">
											<div className="card-body">
												<h5 className="card-title text-center font-weight-bold">
													{this.state.postCount}
												</h5>
												<p className="card-text text-center">
													No. of Posts
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card shadow p-3 mb-5 bg-white rounded">
											<div className="card-body">
												<h5 className="card-title text-center font-weight-bold">
													100+
												</h5>
												<p className="card-text text-center">
													No. of Disease
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-3">
										<div className="card shadow p-3 mb-5 bg-white rounded">
											<div className="card-body">
												<h5 className="card-title text-center font-weight-bold">
													80+
												</h5>
												<p className="card-text text-center">
													No. of Pathy
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="container text-center">
									<Link to="/Signup">
										<button
											type="button"
											className="btn btn-primary buttonJoin1"
										>
											Become a Member
										</button>
									</Link>
								</div>

								<form
									className="container form-inline news-letter d-flex flex-column"
									onSubmit={this.onSubscribe}
								>
									<div>
										<h2 className="newletter">
											Subscribe to our Newsletter for latest posts
										</h2>
										<h4 className="news-letter-subheading">
											You will recieve email notifications for all our new
											posts.
										</h4>
									</div>
									<div className="subscribe-div">
										<label class="sr-only" for="inlineFormInputName2">
											Name
										</label>
										<input
											type="email"
											required-pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
											value={this.state.email}
											onChange={this.onChange}
											class="form-control"
											id="inlineFormInputName2"
											placeholder="Email"
											style={{
												width: '20em',
												border: '2px solid rgba(0,0,0,0.25)',
												fontSize: '16px',
											}}
										/>
										{/* <p></p> */}
										<button
											type="submit"
											class="btn btn-outline-primary"
											style={{
												marginLeft: '20px',
												border: '3px solid #007bff',
												width: '6rem',
												fontSize: '14px',
											}}
										>
											Subscribe
										</button>
									</div>
								</form>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default Home;

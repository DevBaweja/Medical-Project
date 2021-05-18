import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo1.png';
import './style.css';
import { isAuthenticated } from '../../Api';

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className=" foot text-white mt-4">
					<div className="container text-center text-md-left">
						<div className="row">
							<hr className="clearfix w-100 d-md-none" />
							<div className="col-md-2 mx-auto _pd-left">
								<ul className="list-unstyled">
									<li>
										<img
											src={logo}
											className="img-responsive img-css"
											alt="logo"
											width="400"
											height="400"
										/>
									</li>
								</ul>
							</div>

							<div className="col-md-2 mx-auto">
								<h5 className="mt-3 mb-4 heading">FEATURES</h5>
								<ul className="list-unstyled">
									<li>
										<Link className="link" href="/posts" to="/posts">
											Posts
										</Link>
									</li>
									<li>
										<Link className="link" href="/signin" to="/signin">
											Ask Suggestion
										</Link>
									</li>
									<li>
										<Link className="link" href="/signin" to="/signin">
											Share Experience
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-md-2 mx-auto">
								<h5 className="mt-3 mb-4 heading">COMMUNITY</h5>
								<ul className="list-unstyled">
									<li>
										<a className="link" href="#!">
											Personal
										</a>
									</li>
									<li>
										<a className="link" href="#!">
											Facebook Group
										</a>
									</li>
									<li>
										<a className="link" href="/s">
											YouTube Channel
										</a>
									</li>
								</ul>
							</div>

							<div className="col-md-2 mx-auto">
								<h5 className=" mt-3 mb-4 heading">COMPANY</h5>
								<ul className="list-unstyled">
									<li>
										<Link className="link" to="/privacypolicy">
											Privacy Policy
										</Link>
									</li>
									<li>
										<Link className="link" to="/faq">
											FAQ
										</Link>
									</li>
									<li>
										<Link className="link" to="/termsofuse">
											Terms of Use
										</Link>
									</li>
									<li>
										<Link className="link" to="/contactus">
											Contact Us
										</Link>
									</li>
								</ul>
							</div>

							<div className="col-md-2 mx-auto">
								<h5 className=" mt-3 mb-4 heading">LINKS</h5>
								<ul className="list-unstyled">
									<li>
										<Link className="link" to="/">
											Home
										</Link>
									</li>
									<li>
										<Link className="link" to="/diseases">
											Diseases
										</Link>
									</li>
									<li>
										<Link className="link" to="/pathy">
											Pathy
										</Link>
									</li>
									<li>
										<Link className="link" to="/aboutus">
											About Us
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<ul className="list-unstyled list-inline text-center ">
						<li className="list-inline-item">
							<a className="btn-floating mx-1 link _color" target="_blank" href="/">
								<i className="fa fa-facebook-official fa-lg" />
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating mx-1 link _color" target="_blank" href="/">
								<i class="fa fa-youtube-play fa-lg" aria-hidden="true" />
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn-floating mx-1 link _color" target="_blank" href="/">
								<i class="fa fa-twitter-square fa-lg" aria-hidden="true" />
							</a>
						</li>
					</ul>

					<div className="footer-copyright text-center py-3 heading container">
						<p>© 2018-2021 MediPro. All rights reserved. </p>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;

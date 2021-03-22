/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../../Api';
import loader from '../../Images/loader2.gif';
import './style.css';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
			redirectToReferer: false,
			loading: false,
			open: false,
		};
	}

	handleChange = name => event => {
		this.setState({ error: '' });
		this.setState({ [name]: event.target.value });
	};

	clickSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const { email, password } = this.state;
		const user = {
			email,
			password,
			open: true,
		};
		// console.log(user);
		signin(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error, loading: false });
			} else {
				// authenticate
				// this.authenticate(data);
				authenticate(data, () => {
					this.setState({ redirectToReferer: true }); // redirect
				});
			}
		});
	};

	render() {
		const { email, password, error, redirectToReferer, loading, open } = this.state;

		if (redirectToReferer) {
			return <Redirect to="/" />;
		}
		return (
			<div className="container signIn">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-sign my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign In</h5>
								<div
									className="alert alert-danger"
									style={{ display: error ? '' : 'none' }}
								>
									{error}
								</div>
								{loading ? (
									<div>
										<img src={loader} alt="Loading..." />
									</div>
								) : (
									''
								)}
								<div
									className="alert alert-info"
									style={{ display: open ? '' : 'none' }}
								>
									New account is successfully created. Please Sign In.
								</div>
								<form className="form-sign">
									<div className="form-label-group">
										<input
											onChange={this.handleChange('email')}
											id="email"
											type="email"
											className="signinput"
											value={email}
											required
										/>
										<label
											htmlFor="email"
											className={`signlabel ${
												this.state.email !== '' ? 'signlabelfocus' : ''
											}`}
										>
											Email address
										</label>
									</div>

									<div className="form-label-group">
										<input
											onChange={this.handleChange('password')}
											id="password"
											type="password"
											className="signinput"
											value={password}
											required
										/>
										<label
											htmlFor="password"
											className={`signlabel ${
												this.state.password !== '' ? 'signlabelfocus' : ''
											}`}
										>
											Password
										</label>
									</div>
									<p className="text-right forget">
										<small>
											<a href="/">Forgot password?</a>
										</small>
									</p>
									<button
										className="btn btn-lg btn-primary text-uppercase signBtn"
										type="submit"
										onClick={this.clickSubmit}
									>
										Sign in
									</button>
									<p className="text-center">
										<div className="continue-with">
											<span />
											<span className="continue-with--label">
												or continue with
											</span>
											<span />
										</div>

										<ul className="social-network social-circle">
											<li>
												<a
													href="/"
													className="icoFacebook"
													title="Facebook"
												>
													<i className="fa fa-facebook" />
												</a>
											</li>
											<li>
												<a href="/" className="icoTwitter" title="Twitter">
													<i className="fa fa-twitter" />
												</a>
											</li>
											<li>
												<a href="/" className="icoGoogle" title="Google">
													<i className="fa fa-google" />
												</a>
											</li>
										</ul>
									</p>
									<hr className="my-4" />
									<p className="text-center">
										Don't have an account?<a href="/signup"> Sign Up</a>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Signin;

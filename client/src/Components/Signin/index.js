/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../../Api';
import './style.css';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			showpassword: false,
			error: '',
			redirectToReferer: false,
			loading: false,
		};
	}

	handleChange = name => event => {
		this.setState({ error: '' });
		this.setState({ [name]: event.target.value });
	};

	hideAlert = () => {
		this.setState({ error: '' });
	};

	togglePassword = async () => {
		await this.setState(prevState => ({ showpassword: !prevState.showpassword }));
	};

	clickSubmit = event => {
		event.preventDefault();
		this.setState({ loading: true });
		const { email, password } = this.state;
		const user = {
			email,
			password,
		};
		signin(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error, loading: false });
			} else {
				// authenticate
				authenticate(data, () => {
					this.setState({ redirectToReferer: true }); // redirect
				});
			}
		});
	};

	render() {
		const { email, password, showpassword, error, redirectToReferer, loading } = this.state;

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
									<button
										type="button"
										className="icon-cross"
										onClick={this.hideAlert}
									>
										<i className="fa fa-times" />
									</button>
									<span>{error}</span>
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
											type={!showpassword ? 'password' : 'text'}
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
										<button
											type="button"
											className="icon-eye"
											onClick={this.togglePassword}
										>
											<i
												className={`fa fa-${
													!showpassword ? 'eye' : 'eye-slash'
												}`}
											/>
										</button>
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
										{loading ? 'Signing In' : 'Sign in'}
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
												<a href="/" className="icoGoogle" title="Google">
													<i className="fa fa-google" />
												</a>
											</li>
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

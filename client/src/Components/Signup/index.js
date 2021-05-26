/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { signup } from '../../Api';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			// create state
			name: '',
			email: '',
			password: '',
			confirmpassword: '',
			showpassword: false,
			showconfirmpassword: false,
			error: '',
			open: false, //  for info message display
		};
	}

	handleChange = name => event => {
		// using name as placeholder argument, can be anything
		this.setState({ error: '' }); // when handle change remove the old error so they are not displayed
		this.setState({ [name]: event.target.value }); // one event for all the changes
	};

	hideAlert = name => () => {
		if (name === 'error') this.setState({ error: '' });
		if (name === 'open') this.setState({ open: false });
	};

	togglePassword = name => async () => {
		await this.setState(prevState => ({ [name]: !prevState[name] }));
	};

	clickSubmit = event => {
		// on click submit takes the event
		event.preventDefault(); // to not reload page without making any changes
		const { name, email, password, confirmpassword } = this.state;

		const user = {
			// create new user with these parameters
			name,
			email,
			password,
			confirmpassword,
		};
		signup(user).then(data => {
			if (data.error) {
				this.setState({ error: data.error });
				return;
			}
			this.setState({
				error: '',
				name: '',
				email: '',
				password: '',
				confirmpassword: '',
				open: true,
			});
		});
	};

	render() {
		const {
			name,
			email,
			password,
			confirmpassword,
			showpassword,
			showconfirmpassword,
			error,
			open,
		} = this.state; // Destruct
		console.log(this.state);
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-sign my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign Up</h5>
								<div
									className="alert alert-danger"
									style={{ display: error ? '' : 'none' }} // conditional inline css
								>
									<button
										type="button"
										className="icon-cross"
										onClick={this.hideAlert('error')}
									>
										<i className="fa fa-times" />
									</button>
									<span>{error}</span>
								</div>

								<div
									className="alert alert-info"
									style={{ display: open ? '' : 'none' }}
								>
									<button
										type="button"
										className="icon-cross"
										onClick={this.hideAlert('open')}
									>
										<i className="fa fa-times" />
									</button>
									<span>
										New account is successfully created. Please Sign In.
									</span>
								</div>
								<form className="form-sign">
									<div className="form-label-group">
										<input
											onChange={this.handleChange('name')}
											id="name"
											type="text"
											className="signinput"
											value={name}
											required
										/>
										<label
											htmlFor="name"
											className={`signlabel ${
												this.state.name !== '' ? 'signlabelfocus' : ''
											}`}
										>
											Name
										</label>
									</div>
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
											Email Address
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
											onClick={this.togglePassword('showpassword')}
										>
											<i
												className={`fa fa-${
													!showpassword ? 'eye' : 'eye-slash'
												}`}
											/>
										</button>
									</div>

									<div className="form-label-group">
										<input
											onChange={this.handleChange('confirmpassword')}
											id="confirmpassword"
											type={!showconfirmpassword ? 'password' : 'text'}
											className="signinput"
											value={confirmpassword}
											required
										/>
										<label
											htmlFor="confirmpassword"
											className={`signlabel ${
												this.state.confirmpassword !== ''
													? 'signlabelfocus'
													: ''
											}`}
										>
											Confirm Password
										</label>
										<button
											type="button"
											className="icon-eye"
											onClick={this.togglePassword('showconfirmpassword')}
										>
											<i
												className={`fa fa-${
													!showconfirmpassword ? 'eye' : 'eye-slash'
												}`}
											/>
										</button>
									</div>

									<button
										className="btn btn-lg btn-primary signBtn"
										type="submit"
										onClick={this.clickSubmit}
									>
										SignUp
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
										Already have an account? {'  '}
										<a href="/signin">Sign In</a>
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
export default Signup;

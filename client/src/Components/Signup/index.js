/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
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
			error: '',
			open: false, //  for info message display
		};
	}

	handleChange = name => event => {
		// using name as placeholder argument, can be anything
		this.setState({ error: '' }); // when handle change remove the old error so they are not displayed
		this.setState({ [name]: event.target.value }); // one event for all the changes
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
			if (data.error) this.setState({ error: data.error });
			else
				this.setState({
					error: '',
					name: '',
					email: '',
					password: '',
					open: true,
				});
		});
	};

	render() {
		const { name, email, password, confirmpassword, error, open } = this.state; // Destruct
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
									{error}
								</div>

								<div
									className="alert alert-info"
									style={{ display: open ? '' : 'none' }}
								>
									New account is successfully created. Please Sign In.
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

									<div className="form-label-group">
										<input
											onChange={this.handleChange('confirmpassword')}
											id="confirmpassword"
											type="password"
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
									</div>

									<button
										className="btn btn-lg btn-primary text-uppercase signBtn"
										type="submit"
										onClick={this.clickSubmit}
									>
										SignUp
									</button>
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

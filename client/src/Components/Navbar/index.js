import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import logo from '../../Images/logo.svg';
import { signout, isAuthenticated } from '../../Api';
import './style.css';

class NavDropdown extends React.Component {
	state = {
		isToggleOn: false,
	};

	showDropdown(e) {
		e.preventDefault();
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn,
		}));
	}

	render() {
		const classDropdownMenu = `dropdown-menu${this.state.isToggleOn ? ' show' : ''}`;
		return (
			<li className="nav-item dropdown">
				{' '}
				{/*user after login*/}
				<Link
					className="nav-link dropdown-toggle"
					id="navbarDropdown"
					role="button"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false"
					href={`/user/${isAuthenticated().user._id}`}
					to={`/user/${isAuthenticated().user._id}`}
					onClick={e => {
						this.showDropdown(e);
					}}
				>
					<i className="fa fa-user-circle fa-lg mx-2" />
					{`${isAuthenticated().user.name}`}
				</Link>
				<div
					className={classDropdownMenu}
					aria-labelledby="navbarDropdown"
					onMouseEnter={this.enterMenu}
					onMouseLeave={e => {
						this.showDropdown(e);
					}}
				>
					{this.props.children}
				</div>
			</li>
		);
	}
}

class Navigation extends React.Component {
	isActive = (history, path) => {
		if (history.location.pathname === path) return { color: 'white' };
		return { color: 'inherit' };
	};

	render() {
		const { history } = this.props;
		console.log(history);
		return (
			<div>
				<nav
					className="navbar fixed-top navbar-expand-lg "
					style={{
						backgroundColor: '#191c27',
						width: '100%',
					}}
				>
					{/* <p className="navbar-brand" >
                     <img src={logo} width="40" height="40" alt="logo" />
                 </p> */}

					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="nav navbar-nav navbar-nav mr-auto">
							<li className="nav-item">
								<Link
									href="/"
									to="/"
									className="nav-link"
									style={this.isActive(history, '/')}
									style={{ marginTop: 4 }}
								>
									Home
								</Link>
							</li>

							<li className="nav-item" style={{ width: 110, height: 40 }}>
								<Dropdown style={{ width: 130 }}>
									<p className="nav-link" style={{ fontSize: 17 }}>
										Diseases
										<Dropdown.Toggle
											id="dropdown-basic"
											style={{
												color: 'white',
												backgroundColor: 'transparent',
											}}
										/>
										<Dropdown.Menu
											style={{
												width: '200px',
												backgroundColor: 'white',
												fontWeight: 'bold',
												fontSize: 20,
											}}
										>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5ef74feab8e68909d8373f05">
												Joint Pain
											</Dropdown.Item>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5ef752e1b5a44e544477bea4">
												Diabetes
											</Dropdown.Item>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5f53911f22dd5e00175aaaa8">
												Asthama
											</Dropdown.Item>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5f152fdd63f8910017ebc088">
												Breast Cancer
											</Dropdown.Item>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5f15230c63f8910017ebc081">
												Acidity
											</Dropdown.Item>
											<Dropdown.Item href="https://gifted-gates-e3aa20.netlify.app/subdisease/5f09ea81c10a3a0017526850">
												Psoriasis
											</Dropdown.Item>
											<Dropdown.Divider />
											<Dropdown.Item href="/diseases">Others</Dropdown.Item>
										</Dropdown.Menu>
									</p>
								</Dropdown>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									style={this.isActive(history, '/posts')}
									style={{ marginTop: 4 }}
									to="/posts"
								>
									Posts
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									style={this.isActive(history, '/pathy')}
									style={{ marginTop: 4 }}
									to="/pathy"
								>
									Pathy
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									style={this.isActive(history, '/aboutus')}
									style={{ marginTop: 4 }}
									to="/aboutus"
								>
									About Us
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									style={this.isActive(history, '/contactus')}
									style={{ marginTop: 4 }}
									to="/contactus"
								>
									Contact Us
								</Link>
							</li>

							<li className="nav-item">
								<Link
									className="nav-link"
									style={this.isActive(history, '/feedback')}
									style={{ marginTop: 4 }}
									to="/feedback"
								>
									Feedback
								</Link>
							</li>
						</ul>

						<ul className="nav navbar-nav navbar-right ml-md-auto ">
							{!isAuthenticated() && (
								<>
									<li className="nav-item">
										<Link
											className="nav-link"
											style={this.isActive(history, '/signin')}
											to="/signin"
										>
											<button
												type="button"
												className="btn btn-primary float-right signin"
											>
												Sign In
											</button>
										</Link>
									</li>
									<li className="nav-item">
										<Link
											className="nav-link"
											style={this.isActive(history, '/signup')}
											to="/signup"
										>
											<button
												type="button"
												className="btn btn-primary float-right signup"
											>
												Sign Up
											</button>
										</Link>
									</li>
								</>
							)}
							{isAuthenticated() && isAuthenticated().user.role === 'admin' && (
								<li className="nav-item">
									<Link
										to="/admin"
										style={this.isActive(history, `/admin`)}
										className="nav-link"
									>
										Admin
									</Link>
								</li>
							)}

							{isAuthenticated() && ( // user authenticated show logout and username
								<NavDropdown name="Dropdown">
									<Link
										className="dropdown-item"
										to={`/user/${isAuthenticated().user._id}`}
									>
										View Profile
									</Link>
									<Link className="dropdown-item" to={`/bookmarks`}>
										Bookmarks
									</Link>
									<Link className="dropdown-item" to={`/share_experience`}>
										Share Experience
									</Link>

									{isAuthenticated() && isAuthenticated().user.role === 'admin' && (
										<Link className="dropdown-item" to={`/users`}>
											Users
										</Link>
									)}
									<Link
										className="dropdown-item"
										to={`/myposts/${isAuthenticated().user._id}`}
									>
										My Posts
									</Link>
									<div className="dropdown-divider" />
									<Link
										className="dropdown-item"
										to={`/user/settings/${isAuthenticated().user._id}`}
									>
										Settings
									</Link>

									<a
										className="dropdown-item"
										style={
											(this.isActive(history, '/signup'),
											{ cursor: 'pointer' })
										}
										onClick={() => signout(() => history.push('/'))}
									>
										Logout
									</a>
									<div className="dropdown-divider" />
									<Link className="dropdown-item" to={`/faq`}>
										FAQ
									</Link>
									<Link className="dropdown-item" to={`/privacypolicy`}>
										Privacy Policy
									</Link>
									<Link className="dropdown-item" to={`/termsofuse`}>
										Terms of Use
									</Link>
								</NavDropdown>
							)}
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default withRouter(Navigation);

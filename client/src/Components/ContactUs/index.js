import React, { Component } from 'react';
import { submitQuery } from '../../Api/Query';
import './style.css';
import contactus_img from '../../Images/contactus.svg';

class ContactUs extends Component {
	state = {
		name: '',
		email: '',
		query: '',
	};

	onFormSubmit = event => {
		event.preventDefault();
		submitQuery(this.state).then(data => {
			if (data.status === 200) {
				this.setState({
					name: '',
					email: '',
					query: '',
				});
			}
		});
	};

	onChange = event => {
		const key = event.target.name;
		const value = event.target.value;

		this.setState({
			[key]: value,
		});
	};

	queryForm = () => (
		<form onSubmit={this.onFormSubmit}>
			<div className="form-group">
				<label className="font-weight-bold" htmlFor="name">
					Name
				</label>
				<input
					id="name"
					onChange={this.onChange}
					name="name"
					value={this.state.name}
					placeholder="Name"
					className="form-control"
				/>
			</div>

			<div className="form-group">
				<label className="font-weight-bold">Email</label>
				<input
					onChange={this.onChange}
					type="email"
					className="form-control"
					name="email"
					value={this.state.email}
					placeholder="Email"
				/>
			</div>

			<div className="form-group">
				<label className="font-weight-bold">Query</label>
				<textarea
					onChange={this.onChange}
					className="form-control"
					name="query"
					value={this.state.query}
					placeholder="Write Your Query"
				/>
			</div>

			<button type="submit" className="btn btn-danger mb-3 float-right">
				Submit
			</button>
		</form>
	);

	render() {
		return (
			<div className="container contact-page">
				{/* <h2 className="my-5 contactus-heading">Contact Us</h2>
				<p className="lead lead-contactus">
					Tell us about your company, your data, and your analytic goals. We can help you
					use your data to make better decisions. And if you don't currently have the data
					you need, we can help design data-capture and data-management strategies today
					that will power your analytics tomorrow.
				</p>
				<h4 className="contactLine">Fill the Form to Contact us:</h4>
				<div className="card query bg-light">{this.queryForm()}</div>
				<div className="reach">
					<h6 className="lead mobHide">Follow us on:</h6>

					<div className="contactDesc">
						<div className="col-md-12 col-sm-12">
							<ul className="social-network social-circle">
								<li>
									<a href="/" className="icoGoogle" title="Google">
										<i className="fa fa-google" />
									</a>
								</li>
								<li>
									<a href="/" className="icoFacebook" title="Facebook">
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									<a href="/" className="icoTwitter" title="Twitter">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a href="/" className="icoLinkedin" title="Linkedin">
										<i className="fa fa-linkedin" />
									</a>
								</li>
								<li>
									<a href="/" className="icoRss" title="Rss">
										<i className="fa fa-rss" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div> */}

				<div className="row contact-head">
					<div className="col contact-head-text">
						<h1 className="contact-head-heading">Contact Us</h1>
						<p className="contact-head-desc">
							If you have any questions or queries a member of staff will always be
							happy to help. Feel free to contact us by telephone or email and we will
							be sure to get back to you as soon as possible.
						</p>
					</div>
					<div className="col text-center">
						<img className="contact-head-svg" src={contactus_img} />
					</div>
				</div>
				<div className="contact-map text-center">
					<iframe
						className="contact-map-embed"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.966118061159!2d75.92129505055546!3d26.93628858303452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1621443703793!5m2!1sen!2sin"
					/>
				</div>
				<div className="row contact-details">
					<div className="col contact-details-heading">
						<h2>Contact</h2>
					</div>
					<div className="col contact-details-desc">
						<p>
							If you have any questions or queries a member of staff will always be
							happy to help. Feel free to contact us by telephone, fax or email and we
							will be sure to get back to you accordingly.
						</p>
						<div className="row">
							<div className="col">
								<i class="fa fa-phone" aria-hidden="true" />
								<p>We are just a call away everyday from 9AM to 5PM</p>
								<p>
									<b>0731 - 420 1234</b>
								</p>
								<p>
									<b>0731 - 420 1235</b>
								</p>
								<p>
									<b>0731 - 420 1236</b>
								</p>
							</div>
							<div className="col">
								<i class="fa fa-envelope-o" aria-hidden="true" />
								<p>Got something to share with us?</p>
								<p>Mail us at:</p>
								<p>
									<b>customer.care@medipro.com</b>
								</p>
							</div>
						</div>
						<div>
							<p>
								<b>Headquarters:</b> The LNM Institute of Information Technology
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;

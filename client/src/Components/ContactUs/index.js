import React, { Component } from 'react';
import { submitQuery } from '../../Api/Query';
import './style.css';
import contactSvg from '../../Images/Contact Us/contactus.svg';
import contactBg from '../../Images/Contact Us/contact_bg_curve.png';
import address from '../../Images/Contact Us/address.svg';
import email from '../../Images/Contact Us/email.svg';
import call from '../../Images/Contact Us/call.svg';
import map from '../../Images/Contact Us/map.svg';

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
			<div className= "contact-us">
				<img className= "contact-bg-img" src= {contactBg}></img> 
				<div className= "container">
					<div className= "row contact-us_intro">
						<div className= "col">
							<div className= "contact-us_title">
								<div className= "motto">Contact Us</div>
							</div>
							<div className= "contact-us_content">
								<div className= "content-line">If you have any questions or queries a member of staff will always be happy to help. 
								</div>
								<div className= "content-line">Feel free to contact us by telephone or email and we will be sure to get back to you as soon as possible.
								</div>
							</div>
						</div>
						<div className= "col contact-svg">
							<img src= {contactSvg} class= "contact-svg_svg"></img>
						</div>
					</div>
					<div className= "row">
						<div className= "col">
							<div class="contact-us_card">
								<img src= {address} class="contact-card_icon"></img>
								<div class="contact-card_heading">Our Address</div>
								<div class="contact-card_text">
									The LNM Institute of Information Technology, Jaipur (Rajsthan)
								</div>
							</div>
						</div>
						<div className= "col">
							<div class="contact-us_card">
								<img src= {email} class="contact-card_icon"></img>
								<div class="contact-card_heading">Email Us</div>
								<div class="contact-card_text">
									<div>customer.care@medipro.com</div>
									<div>info.medipro@medipro.com</div>
								</div>
							</div>
						</div>
						<div className= "col">
							<div class="contact-us_card">
								<img src= {call} class="contact-card_icon"></img>
								<div class="contact-card_heading">
									Call Us
								</div>
								<div class="contact-card_text">
									<div>0731-6357412</div>
									<div>0731-8957123</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className=" container contact-map_box  mb-4">
              		<img src= {map} className= "contact-map_icon"></img>
              		<h3 className= "location">Location</h3>
              		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.964304229176!2d75.92133461504544!3d26.936346083117396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1590495186289!5m2!1sen!2sin" width= "1000" height= "600" className= "contact-us_map" aria-hidden= "false" tabIndex="0" allowFullScreen frameBorder="0"></iframe>
            	</div>
			</div>
			// <div className="container contact-page">
			// 	<div className="row contact-head">
			// 		<div className="col contact-head-text">
			// 			<h1 className="contact-head-heading">Contact Us</h1>
			// 			<p className="contact-head-desc">
			// 				If you have any questions or queries a member of staff will always be
			// 				happy to help. Feel free to contact us by telephone or email and we will
			// 				be sure to get back to you as soon as possible.
			// 			</p>
			// 		</div>
			// 		<div className="col text-center">
			// 			<img className="contact-head-svg" src={contactus_img} />
			// 		</div>
			// 	</div>
			// 	<div className="contact-map text-center">
			// 		<iframe
			// 			className="contact-map-embed"
			// 			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.966118061159!2d75.92129505055546!3d26.93628858303452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dba21e8a1d1c9%3A0x5ab565cce4d44c2b!2sThe%20LNM%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1621443703793!5m2!1sen!2sin"
			// 		/>
			// 	</div>
			// 	<div className="row contact-details">
			// 		<div className="col contact-details-heading">
			// 			<h2>Contact</h2>
			// 		</div>
			// 		<div className="col contact-details-desc">
			// 			<p>
			// 				If you have any questions or queries a member of staff will always be
			// 				happy to help. Feel free to contact us by telephone, fax or email and we
			// 				will be sure to get back to you accordingly.
			// 			</p>
			// 			<div className="row">
			// 				<div className="col">
			// 					<i class="fa fa-phone" aria-hidden="true" />
			// 					<p>We are just a call away everyday from 9AM to 5PM</p>
			// 					<p>
			// 						<b>0731 - 420 1234</b>
			// 					</p>
			// 					<p>
			// 						<b>0731 - 420 1235</b>
			// 					</p>
			// 					<p>
			// 						<b>0731 - 420 1236</b>
			// 					</p>
			// 				</div>
			// 				<div className="col">
			// 					<i class="fa fa-envelope-o" aria-hidden="true" />
			// 					<p>Got something to share with us?</p>
			// 					<p>Mail us at:</p>
			// 					<p>
			// 						<b>customer.care@medipro.com</b>
			// 					</p>
			// 				</div>
			// 			</div>
			// 			<div>
			// 				<p>
			// 					<b>Headquarters:</b> The LNM Institute of Information Technology
			// 				</p>
			// 			</div>
			// 		</div>
			// 	</div>
			// </div>
		);
	}
}

export default ContactUs;

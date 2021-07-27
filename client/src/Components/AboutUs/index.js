import React from 'react';
import './style.css';
import Testimonial from '../ContactUs/Testimonial';
import Testimonialdata from '../../Data/Testimonial_data';
import { countpost } from '../../Api/Post';
import { countuser } from '../../Api/User';
import aboutSvg from '../../Images/About Us/about_bg.svg';
import aboutBg from '../../Images/About Us/about_bg_curve.png';
import rating from '../../Images/About Us/ratings.svg';
import member from '../../Images/About Us/member.svg';
import doctor from '../../Images/About Us/doctor.svg';
import solution from '../../Images/About Us/solution.svg';
import therapist from '../../Images/About Us/therapist.svg';
import testimonials from '../../Images/About Us/testimonials.svg';
import target from '../../Images/About Us/target.svg';

class AboutUs extends React.Component {
	/*
	state = {
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
	*/

	render() {
		return (
			<div className="about-us">
				<img className="about-bg-img" alt="" src={aboutBg} />
				<div className="container">
					<div className="row about-us_intro">
						<div className="col">
							<div className="about-us_title">
								<div className="motto">About Us</div>
							</div>
							<div className="about-us_content">
								<div className="content-line">
									Super easy to use, fast results, and crystal clear.
								</div>
								<div className="content-line">
									Consulting in India was none of the above.
								</div>
								<div className="content-line">But we're changing that.</div>
							</div>
						</div>
						<div className="col about-svg">
							<img src={aboutSvg} alt="" class="about-svg_svg" />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="about-us_card">
								<img src={doctor} alt="" className="about-card_icon" />
								<div className="about-card_heading">500+</div>
								<div className="about-card_text">Doctors</div>
							</div>
						</div>
						<div className="col">
							<div className="about-us_card">
								<img src={member} alt="" className="about-card_icon" />
								<div className="about-card_heading">100+</div>
								<div className="about-card_text">Team Members</div>
							</div>
						</div>
						<div className="col">
							<div className="about-us_card">
								<img src={rating} alt="" className="about-card_icon" />
								<div className="about-card_heading">
									4.8
									<span> </span>
									<i className="material-icons" style={{ fontSize: '17px' }}>
										star
									</i>
								</div>
								<div className="about-card_text">Rating</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container efy">
					<div className="efy-title">Especially for Users</div>
					<div className="row efy-box">
						<div className="col efy-content">
							<h3 className="text-center efy-heading">Provide Solutions</h3>
							<p className="efy-content_data">
								Integrate solutions from all therapies and provide an effective
								solution to the disease.
							</p>
						</div>
						<div className="col efy-svg text-center">
							<img src={solution} alt="" className="efy-svg_svg" />
						</div>
					</div>
					<div className="row efy-box">
						<div className="col efy-svg text-center">
							<img src={testimonials} alt="" className="efy-svg_svg" />
						</div>
						<div className="col efy-content">
							<h3 className="text-center efy-heading">Collect Testimonials</h3>
							<p className="efy-content_data">
								Collect a large number of testimonials from people and search from
								different sources.
							</p>
						</div>
					</div>
					<div className="row efy-box">
						<div className="col efy-content">
							<h3 className="text-center efy-heading">Search for good...</h3>
							<p className="efy-content_data">
								Let you know names of good Doctors/Hospitals/ Clinics and People who
								cure certain kind of disease.
							</p>
						</div>
						<div className="col efy-svg text-center">
							<img src={therapist} alt="" className="efy-svg_svg" />
						</div>
					</div>
					<div className="row efy-box">
						<div className="col efy-svg text-center">
							<img src={target} alt="" className="efy-svg_svg" />
						</div>
						<div className="col efy-content">
							<h3 className="text-center efy-heading">Achieve your Targets</h3>
							<p className="efy-content_data">
								Gives truthful result about diseases and its treatment.
								Non-commercial service to humanity.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutUs;

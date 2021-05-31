import React from 'react';
import './style.css';
import { getPathy } from '../../Api/Pathy';
import { isAuthenticated } from '../../Api';
import pathySvg from '../../Images/Pathy/pathy_bg.svg';
import pathyBg from '../../Images/Pathy/pathy_bg_curve.png';
import trueIcon from '../../Images/Pathy/verified-icon.svg';
import tag from '../../Images/Pathy/tag-icon.svg';
import pathy from '../../Images/Pathy/pathy.svg';

class Pathy extends React.Component {
	state = {
		pathy: [],
	};

	componentDidMount() {
		getPathy().then(data => {
			if (data.error) {
				this.setState({ error: data.error });
			} else {
				this.setState({ pathy: data.data });
			}
		});
	}

	render() {
		return (
			<div className="pathy">
				<img className="pathy-bg-img" src={pathyBg} />
				<div className="container">
					<div className="row pathy_intro">
						<div className="col">
							<div className="pathy_title">
								<div className="motto">Pathy</div>
							</div>
							<div className="pathy_content">
								<div className="content-line">
									Consulting in India was none of the above.
								</div>
								<div className="content-line">But we're changing that.</div>
								<div className="content-line">
									Super easy to use, fast results, and crystal clear.
								</div>
							</div>
						</div>
						<div className="col pathy-svg">
							<img src={pathySvg} class="pathy-svg_svg" />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div class="pathy_card">
								<img src={pathy} class="pathy-card_icon" />
								<div class="pathy-card_heading">15</div>
								<div class="pathy-card_text">Pathies</div>
							</div>
						</div>
						<div className="col">
							<div class="pathy_card">
								<img src={tag} class="pathy-card_icon pathy-icon-tag" />
								<div class="pathy-card_heading">50</div>
								<div class="pathy-card_text">Most Effective Tags</div>
							</div>
						</div>
						<div className="col">
							<div class="pathy_card">
								<img src={trueIcon} class="pathy-card_icon pathy-icon-true" />
								<div class="pathy-card_heading">100%</div>
								<div class="pathy-card_text">True Data</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<br />
					{isAuthenticated() && isAuthenticated().user.role === 'admin' && (
						<a href="/add_pathy" className="btn btn-outline-primary btn-sm">
							{' '}
							<i className="fa fa-plus" /> Add New
						</a>
					)}

					<h2 className="my-5">Pathy</h2>

					{this.state.pathy.map((data, i) => {
						return (
							<div className="card pathy-card mb-4">
								<div className="card-body">
									<div className="card-title">
										<h3 className="text-bold">{data.title}</h3>
									</div>
									<div className="row">
										<div className="col-md-3">Description</div>
										<div className="col-md-9">
											<p>{data.description}</p>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3">Most effective for</div>
										<div className="col-md-9">{data.effective}</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Pathy;

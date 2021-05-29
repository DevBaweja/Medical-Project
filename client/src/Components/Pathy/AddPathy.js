import React from 'react';
import './style.css';
import { createPathy } from '../../Api/Pathy';

class AddPathy extends React.Component {
	state = {
		title: '',
		effective: '',
		description: '',
	};

	handleChange = name => event => {
		this.setState({
			[name]: event.target.value,
		});
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { title, description, effective } = this.state;

		const res = await createPathy(title, description, effective);
		console.log(res);
		if (res.status === 200) {
			this.setState({
				title: '',
				effective: '',
				description: '',
			});
		}
	};

	render() {
		return (
			<div className="container">
				<br />
				<a href="/pathy" className="mb-3">
					<i className="fa fa-arrow-left" /> Back
				</a>
				<br /> <br />
				<div className="card">
					<div className="card-body">
						<div className="card-title">Add New Pathy</div>
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="title">Name of Pathy</label>
								<input
									type="text"
									className="form-control"
									id="title"
									name="title"
									value={this.state.title}
									onChange={this.handleChange('title')}
								/>
							</div>
							<div className="form-group">
								<label>Most effective for</label>
								<select
									className="form-control"
									name="effective"
									value={this.state.effective}
									onChange={this.handleChange('effective')}
								>
									<option>Select Disease</option>
									<option>Cancer</option>
									<option>Arthritis</option>
									<option>ENT</option>
									<option>Asthma</option>
								</select>
							</div>
							<div className="form-group">
								<label>Description</label>
								<textarea
									rows="4"
									// style={{ height: '100px' }}
									className="form-control"
									name="description"
									value={this.state.description}
									onChange={this.handleChange('description')}
								/>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default AddPathy;

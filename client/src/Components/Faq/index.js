import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Accordion, Card } from 'react-bootstrap';

class Faq extends React.Component {
	state = {
		reveal: '0',
		isReveal: false,
	};

	changeReveal = index => () => {
		this.setState(prevState => {
			if (prevState.isReveal) {
				if (prevState.reveal === index) return { isReveal: !prevState.isReveal };
				return { reveal: index };
			}
			return { isReveal: !prevState.isReveal, reveal: index };
		});
		this.setState({ reveal: index });
	};

	render() {
		const questions = [
			'Q1. Insert Question 1 here',
			'Q2. Insert Question 2 here',
			'Q3. Insert Question 3 here',
			'Q4. Insert Question 4 here',
			'Q5. Insert Question 5 here',
			'Q6. Insert Question 6 here',
			'Q7. Insert Question 7 here',
			'Q8. Insert Question 8 here',
		];
		const answers = [
			'Hello! I am the body',
			'Hello! I am another body',
			'Hello! I am the body',
			'Hello! I am another body',
			'Hello! I am the body',
			'Hello! I am another body',
			'Hello! I am the body',
			'Hello! I am another body',
		];

		const { isReveal, reveal } = this.state;
		return (
			<div className="container">
				<h2 className="faq__main">Frequently Asked Questions</h2>
				<Accordion className="faq__container" defaultActiveKey="0">
					{questions.map((question, index) => (
						<Card className="faq__card">
							<Accordion.Toggle
								as={Card.Header}
								className="faq__toggle"
								eventKey={index}
								onClick={this.changeReveal(index)}
							>
								<span className="faq__span"> {question} </span>
								<i
									className={`fa fa-chevron-down faq__${
										isReveal && reveal === index ? 'icon--reveal' : 'icon'
									}`}
									aria-hidden="true"
								/>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={index}>
								<Card.Body className="faq__content">{answers[index]}</Card.Body>
							</Accordion.Collapse>
						</Card>
					))}
				</Accordion>
			</div>
		);
	}
}

export default Faq;

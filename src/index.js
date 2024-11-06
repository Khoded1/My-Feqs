import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import './media.css';

const myFaqs = [
	{
		title: 'What is Frontend Mentor, and how will help me?',
		answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
	},
	{
		title: 'Is Frontend Mentor Free?',
		answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
	},
	{
		title: 'Can I use  Frontend Mentor in my  portfolio?',
		answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!`,
	},
	{
		title: `How can i get help if i'm stuck on a challenge`,
		answer: `The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.`,
	},
];

function App() {
	return (
		<>
			<div className="accordion">
				<div className="headerContainer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="41"
						fill="none"
						viewBox="0 0 40 41"
					>
						<path
							fill="#AD28EB"
							d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
						/>
					</svg>
					<h1 className="header">
						FAQ <span>s</span>
					</h1>
				</div>
				{myFaqs.map(faq => (
					<Question
						title={faq.title}
						answer={faq.answer}
						key={faq.title}
					/>
				))}
			</div>
		</>
	);
}

function Question(props) {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(isOpen => !isOpen);
	}
	return (
		<div className="item" onClick={handleClick}>
			<div>
				<div className="title-con">
					<h2 className="title">{props.title}</h2>
					<div>
						{isOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="31"
								fill="none"
								viewBox="0 0 30 31"
							>
								<path
									fill="#301534"
									d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="31"
								fill="none"
								viewBox="0 0 30 31"
							>
								<path
									fill="#AD28EB"
									d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
								/>
							</svg>
						)}
					</div>
				</div>
			</div>
			{isOpen && (
				<div className="content-box open">
					<ul>{props.answer}</ul>
				</div>
			)}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

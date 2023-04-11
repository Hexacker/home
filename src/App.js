import React from 'react';
// import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconLinkedIn } from './assets/icons/linkedin.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import './App.css';

class App extends React.Component {
	render = () => {
		return (
			<div className="card">
				<div className="header">
					<div className="logo">
						<a href=".">Hexacker</a>
					</div>
					<div className="social">
						<a
							href="https://linkedin.com/in/abdelmadjid/"
							title="LinkedIn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconLinkedIn className="icon" />
						</a>
						<a
							href="https://twitter.com/Hexacker"
							title="Twitter"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconTwitter className="icon" />
						</a>
						<a
							href="https://github.com/Hexacker"
							title="GitHub"
							target="_blank"
							rel="noopener noreferrer"
						>
							<IconGithub className="icon" />
						</a>
					</div>
				</div>
				<div className="content">
					<div className="title-holder">
						<h1>
							I am a Backend Engineer. I am learning React and building my
							website
						</h1>
						<p>
							Website coming soon. Please check back to know more. Shoot me an
							email if you're curious.
						</p>
					</div>
					<a href="mailto:abdelmadjid.cherfaoui@gmail.com">
						<div className="cta">Send me an email</div>
					</a>
				</div>
				<div className="footer">
					<span>
						made by{' '}
						<a
							className="underlined"
							href="https://github.com/Hexacker"
							target="_blank"
							rel="noopener noreferrer"
						>
							Abdelmadjid Cherfaoui
						</a>{' '}
						using{' '}
						<a
							className="underlined"
							href="https://reactjs.org/"
							title="ReactJS"
							target="_blank"
							rel="noopener noreferrer"
						>
							React
						</a>{' '}
						|{' '}
						<a
							className="underlined"
							href="https://github.com/Hexacker"
							title="GitHub repo"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
					</span>
				</div>
			</div>
		);
	};
}

export default App;

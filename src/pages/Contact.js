import React from 'react';
import BottomButtons from '../components/BottomButtons';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from './../components/SocialNetwork';

const Contact = () => {
	return (
		<main>
			<Mouse />
			<div className="contact">
				<Navigation />
				<Logo />
				{/* contact form */}
				<div className="contact-infos">
					<div className="address">
						<div className="content">
							<h4>Adresse</h4>
							<p>12 Rue du Code</p>
							<p>33000 Bordeaux</p>
						</div>
					</div>

					<div className="phone">
						<div className="content">
							<h4>Téléphone</h4>
							<CopyToClipboard text="0642844284" className="hover">
								<p style={{ cursor: "pointer" }} className="clipboard"
								onClick={() => {
									alert('Numéro de téléphone copié !');
								}}>06 42 84 42 84</p>
							</CopyToClipboard>
						</div>
					</div>

					<div className="email">
						<div className="content">
							<h4>Email</h4>
							<CopyToClipboard text="fsagency@gmail.com" className="hover">
								<p style={{ cursor: "pointer" }} className="clipboard"
								onClick={() => {
									alert('Adresse email copié !');
								}}>fsagency@gmail.com</p>
							</CopyToClipboard>
						</div>
					</div>

					<SocialNetwork />

					<div className="credits">
						<p>fromScratch - 2021</p>
					</div>
				</div>

				<BottomButtons left={"/project-4"} />
			</div>
		</main>
	);
};

export default Contact
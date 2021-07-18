import React from 'react';
import BottomButtons from '../components/BottomButtons';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import DynamicText from './../components/DynamicText';

const Home = () => {
	return (
		<div>
			<div className="home">
			<Navigation />
			<SocialNetwork />
			<div className="home-main">
				<div className="main-content">
					<h1>FS AGENCY</h1>
					<h2><DynamicText /></h2>
				</div>
			</div>

			<BottomButtons right={"/project-1"} />
			</div>
		</div>
	);
};

export default Home;

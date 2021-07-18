import React from 'react';
import BottomButtons from '../components/BottomButtons';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';

const Contact = () => {
	return (
		<div>
			<Mouse />
			<Navigation />
			Contact
			<BottomButtons left={"/project-4"} />
		</div>
	);
};

export default Contact
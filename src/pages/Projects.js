import React from 'react';
import Logo from '../components/Logo';
import Navigation from './../components/Navigation';
import BottomButtons from '../components/BottomButtons';

export const Project1 = () => {
	return (
		<main>
			<div className="project">
				<Navigation />
				<Logo />
				Project 1
				<BottomButtons left={"/"} right= {"/project-2"} />
			</div>
		</main>
	)
}

export const Project2 = () => {
	return (
		<main>
			<div className="project">
				<Navigation />
				<Logo />
				Project 2
				<BottomButtons left={"/project-1"} right={"/project-3"} />
			</div>
		</main>
	)
}

export const Project3 = () => {
	return (
		<main>
			<div className="project">
				<Navigation />
				<Logo />
				Project 3
				<BottomButtons left={"/project-2"} right={"/project-4"} />
			</div>
		</main>
	)
}

export const Project4 = () => {
	return (
		<main>
			<div className="project">
				<Navigation />
				<Logo />
				Project 4
				<BottomButtons left={"/project-3"} right={"/contact"} />
			</div>
		</main>
	)
}
import React from 'react';
import { useEffect } from 'react';

const DynamicText = () => {
	useEffect(() => {
		let array = ["simple", "clear", "smart", "strong"];
		let wordIndex = 0;
		let letterIndex = 0;

		const target = document.getElementById("text-target");
		
		const createLetter = () => {
			const letter = document.createElement('span');
			target.appendChild(letter);

			letter.classList.add('letter');
			letter.style.opacity = '0';
			letter.style.animation = 'anim 5s ease forwards';
			letter.textContent = array[wordIndex][letterIndex];

			setTimeout(() => {
				letter.remove();
			}, 2000)
		}

		createLetter();
	});

	return (
		<span className="dynamic-text">
			<span className="simply">Simply</span>
			<span id="text-target"></span>
		</span>
	);
};

export default DynamicText;
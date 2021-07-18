import React, { useEffect } from 'react';

const Mouse = () => {
	useEffect(() => {
		const mouse = document.querySelector('.cursor');

		const handleCursor = (e) => {
			mouse.style.top = e.pageY + "px";
			mouse.style.left = e.pageX + "px";
		};

		window.addEventListener('mousemove', handleCursor);

		const handleHover = () => {
			mouse.classList.add('hovered');
		}

		const handleLeave = () => {
			mouse.style.transition = ".3s ease-out";
			mouse.classList.remove('hovered');
		}

		document.querySelectorAll('.hover').forEach((link) => {
			link.addEventListener('mouseover', handleHover);
			link.addEventListener('mouseleave', handleLeave);
		});
	}, []);

	return (
		<span className="cursor">

		</span>
	);
};

export default Mouse;
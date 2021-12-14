import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './TransitionElement.css'

const TransitionElement = ({children}) => {
	const [toggle, setToggle] = useState(false);
	useEffect(() => {
		setToggle(!toggle);
	}, []);

	return (
		<CSSTransition
			in={toggle}
			timeout={500}
			classNames="transition-element"
			unmountOnExit
		>
			<div className="transition-element">
				{children}
			</div>
		</CSSTransition>
	);
};

export default TransitionElement;
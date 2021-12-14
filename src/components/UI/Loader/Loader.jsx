import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import TransitionElement from '../TransitionElement/TransitionElement';
import './Loader.css';

const Loader = () => {
	return (
		<div className="loader-container">
			<TransitionElement>
				<div className="loader"></div>
			</TransitionElement>
		</div>
	);
};

export default Loader;
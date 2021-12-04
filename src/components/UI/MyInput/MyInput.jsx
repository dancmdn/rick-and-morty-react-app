import React from 'react';
import './MyInput.css';

const MyInput = ({inputValue, inputValueChanger, placeholder, onSearch }) => {
	function onClick(e) {
		e.preventDefault();
		onSearch();
	}

	function onKeyDown(e) {
		if (e.key === 'Enter') {
			onClick(e)
		}
	}

	return (
		<form>
			<input 
				className="my-input"
				value={inputValue}
				onChange={inputValueChanger}
				placeholder={placeholder}
				type="text" 
				onKeyDown={onKeyDown}
			/>
			<button 
				type="submit" 
				onClick={onClick}
			>
				SEARCH!
			</button>
		</form>
	);
};

export default MyInput;
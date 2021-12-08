import React from 'react';
import MyButton from '../MyButton/MyButton';
import MyInput from '../MyInput/MyInput';
import './SearchForm.css';

const SearchForm = ({ value, onChange, placeholder, onSearch }) => {
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
		<div className="search-form">
			<MyInput
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				onKeyDown={onKeyDown}
			/>
			<MyButton onClick={onClick} >
				<i className="fas fa-search"></i>
			</MyButton>
		</div>
	);
};

export default SearchForm;
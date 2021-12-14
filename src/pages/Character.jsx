import React, { useEffect, useRef, useState } from 'react';
import ApiService from '../components/API/ApiService';
import CharacterList from '../components/CharacterList';
import Loader from '../components/UI/Loader/Loader';
import SearchForm from '../components/UI/SearchForm/SearchForm';
import TransitionElement from '../components/UI/TransitionElement/TransitionElement';
import { useFetching } from '../hooks/useFetching';

const Character = () => {
	const [inputValue, setInputValue] = useState('');
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const clearDataToggler = useRef(false);

	const [fetchCharacter, isLoading, dataError] = useFetching(async () => {
		let response;
		if (clearDataToggler.current) {
			response = await ApiService.getCharacter(inputValue, 1);
			setData(response.data.results);
			setPage(1);
		} else {
			response = await ApiService.getCharacter(inputValue, page);
			setData([...data, ...response.data.results]);
		}
		setTotalPages(response.data.info.pages);
	});

	useEffect(() => {
		fetchCharacter();
	}, [page])

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {
		if (isLoading || dataError) return;
		if (observer.current) observer.current.disconnect();
		const callback = async function (entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) {
				clearDataToggler.current = false;
				setPage(page + 1);
			}
		};
		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current)
	}, [isLoading]);

	function onSearch() {
		clearDataToggler.current = true;
		fetchCharacter();
	}

	return (
		<div className="_container">
			<SearchForm
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
				onSearch={onSearch}
				placeholder='Search for character'
			/>
			<div className="main-content">
				{dataError &&
					<TransitionElement>
						<h1>There is no such character!</h1>
					</TransitionElement>
				}
				{isLoading
					? <Loader />
					: <div>
						<CharacterList data={dataError ? [] : data} />
						{dataError 
							? ""
							: <div ref={lastElement} style={{ height: '20px', background: '#ccc' }}></div>
						}
						
					</div>
				}
			</div>

			{/* <div ref={lastElement} style={{ height: '20px', background: '#ccc' }}></div> */}
		</div>
	);
};

export default Character;
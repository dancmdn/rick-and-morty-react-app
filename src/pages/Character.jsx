import React, { useEffect, useRef, useState } from 'react';
import ApiService from '../components/API/ApiService';
import CharacterList from '../components/CharacterList';
import Loader from '../components/UI/Loader/Loader';
import MyInput from '../components/UI/MyInput/MyInput';
import { useFetching } from '../hooks/useFetching';

const Character = () => {
	const [inputValue, setInputValue] = useState('');
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const clearDataToggler = useRef(false);
	const [fetchCharacter, isLoading, dataError] = useFetching(async () => {
		const response = await ApiService.getCharacter(inputValue, page);
		clearDataToggler.current
			? setData(response.data.results)
			: setData([...data, ...response.data.results])
		setTotalPages(response.data.info.pages);
	});

	useEffect(() => {
		fetchCharacter(inputValue, page);
	}, [])

	const lastElement = useRef();
	const observer = useRef();

	useEffect(() => {
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();
		var callback = async function (entries, observer) {
			if (entries[0].isIntersecting && page < totalPages) {
				console.log('observed page: ', page, 'of total: ', totalPages);
				clearDataToggler.current = false;
				setPage((prevPage) => prevPage + 1);
				fetchCharacter();
			}
		};
		observer.current = new IntersectionObserver(callback);
		observer.current.observe(lastElement.current)
	}, [isLoading])

	// function fetchNewData(value, pageNum) {
	// 	clearData()
	// }

	// function changePage(num) {
	// 	setPage(num)
	// }
	// async function clearData() {
	// 	setData([])
	// }

	// async function goFirstPageOfQuery() {
	// 	// await clearData();
	// 	changePage(1);
	// }

	function onSearch() {
		clearDataToggler.current = true;
		setPage(1);
		fetchCharacter();
	}

	return (
		<div className="_container">
			<MyInput
				inputValue={inputValue}
				inputValueChanger={event => setInputValue(event.target.value)}
				onSearch={onSearch}
				placeholder='Search for character'
			/>
			<div className="main-content">
				{dataError &&
					<div style={{height:'100vh'}}><h1>There is no such character!</h1></div>
				}
				{isLoading
					? <Loader />
					: <CharacterList data={dataError ? [] : data} />
				}
			</div>
			
			<div ref={lastElement} style={{ height: '20px', background: '#ccc' }}></div>
		</div>
	);
};

export default Character;
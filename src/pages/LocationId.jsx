import React from 'react';
import { useParams } from 'react-router-dom';

const LocationId = () => {
	const params = useParams();
	console.log(params);

	return (
		<div>
			Location id = {params.id}
		</div>
	);
};

export default LocationId;
import React from 'react';
import { useParams } from 'react-router-dom';

const EpisodeId = () => {
	const params = useParams();
	console.log(params);

	return (
		<div>
			Episode id = {params.id}
		</div>
	);
};

export default EpisodeId;
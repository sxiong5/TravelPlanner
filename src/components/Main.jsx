import React from 'react';
import Map from './Map';
import '../style/Main.css';

const Main = () => {
	return (
		<main className='main'>
			<Map />
			<aside className='aside'></aside>
		</main>
	);
};

export default Main;

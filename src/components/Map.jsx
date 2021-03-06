import React from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { API_KEY } from '../service/constant';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';
import MapBase from './MapBase';
import MapMarker from './MapMarker';

const Loading = () => {
	return <Spin size='large' />;
};

const Map = ({ attractions }) => {
	const { lng, lat } = useSelector(state => state.city);

	return (
		<Wrapper apiKey={API_KEY} render={Loading}>
			<MapBase center={{ lng, lat }}>
				{attractions.map(item => {
					const { longitude: lng, latitude: lat, name, imageUrl } = item;
					return <MapMarker key={name} name={name} imageUrl={imageUrl} position={{ lng, lat }} />;
				})}
			</MapBase>
		</Wrapper>
	);
};

export default Map;

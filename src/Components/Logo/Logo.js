import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import pig from './pig.png';

const Logo = () => {
	return (
		<div className='na5, mt4'>
			<Tilt className="Tilt br3 shadow-2" options={{ max : 50 }} style={{ height: 200, width: 200 }} >
				<div className="Tilt-inner pa3"> 
					<img alt='logo' src={pig}/> 
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
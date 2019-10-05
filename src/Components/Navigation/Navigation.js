import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
	if(isSignedIn) {
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end', }}>
				<p onClick={()=> onRouteChange('SignOut')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
			</nav>
		);
	} else {
		return(
			<nav style={{display: 'flex', justifyContent: 'flex-end', }}>
				<p onClick={()=> onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Home</p>
				<p onClick={()=> onRouteChange('Signing')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
				<p onClick={()=> onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
		);
	}
}

export default Navigation;



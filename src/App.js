import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';


const particlesOptions = {
    particles: {
    	number: {
    		value: 270,
    		density: {
    			enable: true,
    			value_area: 800,
    		},
    		opacity: {
    			value: 5,
    		}
    	},
    	size: {
    		value: 3,
    	}
    }
}

class App extends Component {
	render() {
	  	return (
		    <div className="App">
		    	<Particles  className="Particles"
              		params={particlesOptions}
            	/>
		      <Navigation />
		      <Logo />
		      <Rank />
			  <ImageLinkForm />
			      {/*<FaceRecognition />*/}
		    </div>
		);
	}
}

export default App;

import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Rank from './Components/Rank/Rank.js';
import './App.css';


const app = new Clarifai.App ({
 apiKey: 'f68eb42da2664bbcbfe9104b1994bc8f'
});

const particlesOptions = {
    particles: {
    	number: {
    		value: 100,
    		density: {
    			enable: true,
    			value_area: 200,
    		},
    		opacity: {
    			value: 4,
    		}
    	},
    	size: {
    		value: 1,
    	}
    }
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageURL: '',
			box: {},
		}
	}

	calculateFaceLocation = (data) => {
		const clarifaiFace= data.outputs[0].data.regions[0].region.info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		console.log(width, height);

	}

	onInputChange = (event) => {
		this.setState({input: event.target.value});
	}

	onButtonSubmit = () => {
		this.setState({imageURL: this.state.input})
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL,
				this.state.input)
			.then(response=> this.calculateFaceLocation(response))
	    	.catch(err=>console.logh(err));
	}

	render() {
	  	return (
		    <div className="App">
		    	<Particles  className="Particles"
              		params={particlesOptions}
            	/>
		      <Navigation />
		      <Logo />
		      <Rank />
			  <ImageLinkForm 
			  	onInputChange={this.onInputChange}
			  	onButtonSubmit={this.onButtonSubmit}
			  />
			  <FaceRecognition imageURL={this.state.imageURL}/>
		    </div>
		);
	}
}

export default App;

import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const data = {
	// image: "https://ucarecdn.com/f8cf81eb-3bab-4bba-9431-668884eab174/-/resize/300x/",
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Joan_Baez_Bob_Dylan_crop.jpg/1200px-Joan_Baez_Bob_Dylan_crop.jpg",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};

const content = <div class="card m-5 w-25">
<img class="card-img-top" src={data.image} alt="Card image cap" />
<div class="card-body">
	<h5 class="card-title">{data.cardTitle}</h5>
	<p class="card-text">{data.cardDescription}</p>
	<a href={data.button.url} class="btn btn-primary">{data.button.label}</a>
</div>
</div>

/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/

ReactDOM.render(content, document.querySelector("#root"));


import React from "react";
import ReactDOM from "react-dom";

// add the green inside this function
const Alert = props => {
	if (props.color == "red"){
		return <div className="alert alert-danger" role="alert">
		OMG! Something really bad has happened!
	</div>
	}
	else if (props.color == "orange"){
		return <div className="alert alert-warning" role="alert">
		Well, it is not that bad after all!
	</div>
	}
	else if (props.color == "green"){
		return <div className="alert alert-success" role="alert">I am supposed to be green</div>
	}

};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understan what properties is the component using
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
		<Alert text="I am supposed to be green" color="green" />
	</div>,
	document.getElementById("root")
);

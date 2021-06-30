import React from 'react'
import Alert from "./Alert"
export default function App() {
    return (
        <div>
		<Alert show={true} text="This is a primary alert-check it out!" />
		<Alert show={false} text="This is a primary alert-check it out!" />
	</div>
    )
}

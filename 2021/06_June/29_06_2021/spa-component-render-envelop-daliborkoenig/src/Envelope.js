import React from "react"

const Envelope = props => {
  const sender = props.sender
  const receiver = props.receiver
  return <div className="envelope border border-dark">
    <div className="sender">{sender}</div>
    <div className="stamp border border-dark"><p>STAMP</p></div>
    <div className="receiver">{receiver}</div>
  </div>
};

export default Envelope;
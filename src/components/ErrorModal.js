import "./ErrorModal.css" 
function ErrorModal (props) {

    function setFinished () {
        props.onModalExit()
    }

    if (props.errorType === "missingInput") {
        return (
            <div className="modal-card">You are missing information.
            <button onClick={setFinished}>Close</button></div>
        )
    }
    return (
        <div className="modal-card">You must enter a valid age.
        <button onClick={setFinished}>Close</button></div>
    )
}

export default ErrorModal
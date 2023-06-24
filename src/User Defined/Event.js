// This is example of event handling in React
function Event() {
    const handler = () => {
        alert("Teri Maki chut");
    }
    return (
        <div className="App">
            <button onClick={handler}>Yaha click kar lavde!</button>
        </div>
        
    )
}
export default Event;
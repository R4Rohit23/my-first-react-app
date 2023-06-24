// Condtitonal rendering is use to return HTML elements based on certain conditions
// this is similar to if else condition in JS
function ConditionalRendering(props) {
    const age = props.age;

    if (age > 18) {
        return <h1>You are eligible to vote.</h1>
    }
    return <h1>You are not eligible to vote.</h1>
}
export default ConditionalRendering;
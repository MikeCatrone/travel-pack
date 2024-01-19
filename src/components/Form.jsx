
const Form = ({numIn, textIn, theHandler, theData}) => {


    return (
        
        <div className="inputContainer">
        <span className="inputSpan">
            <h3>What do you need for the Trip?</h3>
            <input onChange={numIn} className="numField" type="number" name="num" value={theData.num} />
            <input onChange={textIn} className="textField" name="text" placeholder="Enter Text" value={theData.text} />
            <button onClick={theHandler}>Submit</button>
        </span>
        </div>
    )
}

export default Form;
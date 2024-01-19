
import './PackingList.css';


const PackingList = ({data, deleteHandler}) => {

    

    return (
        <div className="packingList">
            <h2>Total List:</h2>
            <hr />
            {data.map((curr, index) => <h2 onClick={() => deleteHandler(index)} key={index}> {curr.text} : {curr.num}</h2> )}
        </div>
    )
}

export default PackingList;
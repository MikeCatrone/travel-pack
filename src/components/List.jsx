
import './List.css';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import {useState} from 'react';


const List = () => {

    // State for list and current text field values
    const [totalList, setTotalList] = useState([]);
    const [current, setCurrent] = useState({num: 0, text: ''});
    const [hasPacked, setPacked] = useState('start');
   

////////////////////////////////////////////////////////////////////////////


    // Handler for input fields
    const aHandler = (eve) => {

        setCurrent((prev) => {

            let copy = {...prev};
            copy[eve.target.name] = eve.target.value;
            return copy;
        })
        
    }


    // Handler for button
    const buttonHandler = () => {
        
        setTotalList((prev) => {

            let copy = [...prev];
            copy.push(current);
            return copy;
        });

        setPacked('commence');
        
    }


    // Handler to remove an item
    const deleteHandler = (theKey) => {
        
        setTotalList((prev) => {

            let copy = prev.filter((x, y) => y !== theKey);
            console.log(copy);
            return copy;
        })

        if(hasPacked === 'commence' && totalList.length == 1) {
            console.log(totalList.length);
            setPacked('finished');
            
        }
    }



////////////////////////////////////////////////////////////////////


    return (

        <div className="listContainer">
            <Logo />
            <Form numIn={aHandler} textIn={aHandler} theHandler={buttonHandler} theData={current}/>
            <PackingList data={totalList} deleteHandler={deleteHandler} />
            
            {hasPacked === 'start' ? <h2>Let's Start Packing ✈</h2> :
             hasPacked === 'commence' ? <h2>{totalList.length} items left to pack</h2> :
             hasPacked === 'finished' && <h2>All Done!</h2> }
            
        </div>
    )
}

export default List;
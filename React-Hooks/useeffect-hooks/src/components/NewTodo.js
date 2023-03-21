import React, {useState} from 'react'


function NewTodo() {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState([]);
    const addData = () => {
        if (!inputData) {} else {
            setItems([
                ...items,
                inputData
            ]);
            setInputData('')
        }
    }
    const removeElm = (id) => {
        alert("Are you sure want to Delete this Data");
        const newData = items.filter((elem, ind) => {
            return ind != id;
        })
        setItems(newData);
    }

    return (
        <div>
            <h1>Add Dat in your TODO LIST</h1>
            <input type="text"value={inputData} 
            onChange={(e) => setInputData(e.target.value)}/>

            <button className='btn btn-success' 
            onClick={addData}>Add Data</button>
            {
            items.map((elem, ind) => {
                return (
                        <div key={ind}>
                            <h1>{elem} <span>
                            <button className='btn btn-primary'
                            onClick={() => removeElm(ind)}>
                                Remove</button>
                        </span></h1>
                        </div>
                );
            })
        } </div>
    )
}

export default NewTodo;

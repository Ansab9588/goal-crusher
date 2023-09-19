import { useState } from "react";
import './App.css';
import ToDo from "./ToDo";

const App = () => {

  const [items, setItems] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const itemEvent = (event) => {
    setItems(event.target.value);
  }

  const addItems = () => {
    setItemsList((item) => {
      return [...item, items];
    })
    setItems("");
  }

  const deleteItems = (key) =>{
    let newItemsList = [...itemsList];
    newItemsList.splice(key,1);
    setItemsList([...newItemsList]);
  }

  return (
    <div className="main_div">
      <div className="centre_div">
        <h1> Goal Crusher </h1>
        <div className="text-but">
        <span><input type="text" style={{margin:25, padding:10}} placeholder="Add an item"  onChange={itemEvent} id="text-box"/></span>
        <span><button onClick={addItems} id="add-but">Add</button></span>

        <ul>
          {itemsList.map( (renderItems, i) => {
            return <ToDo key={i} index={i} item={renderItems} deleteItems={deleteItems}/>;    // Pass index and key both speratately otherwise it will misbehave (delete the first entry everytime irrespective of the key)
          })}
        </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
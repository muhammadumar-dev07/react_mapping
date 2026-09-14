import { useState } from "react";
import "./App.css";

function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ todoinputText, setTodoInputText ] = useState('');

  const handleInputText = (e) => {
    setTodoInputText(e.target.value)
  }

  const addTodoList = (e) => {
    e.preventDefault()
    // using spread operator to copy array
    setTodoList([todoinputText, ...todoList])
    setTodoInputText('');
  }

  const removeTodo =  (indexToDelete) =>{
    const updatedArray = todoList.filter((todo, index)=>{
      if(index != indexToDelete){
        return todo;
      }
    })
    setTodoList(updatedArray)
  }

  return (
    <>
      <h1>This is App file rendering</h1>

      <form onSubmit={addTodoList}>
        <input type="text" name="query" id="query"  placeholder="Enter your task" onChange={handleInputText} value={todoinputText} /> <br />
        <button type="submit">Add Task</button>
      </form>

      {/* mapping todo list array */}


      <div>
        {
      todoList.map((todo,index) =>{
        return(
          <div>
        <div>
          <p>{todo}</p>
        </div>
        <div>
          <button onClick= {()=>{
            removeTodo (index)
          }}
          >
            Remove
        </button></div>
        </div>

        )
      })
      }

      </div>
    </>
  )
}

export default App;
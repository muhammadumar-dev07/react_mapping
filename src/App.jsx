import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoinputText, setTodoInputText] = useState('');

  const handleInputText = (e) => {
    setTodoInputText(e.target.value)
  }

  const addTodoList = (e) => {
    e.preventDefault()
    // using spread operator to copy array
    setTodoList([todoinputText, ...todoList])
    setTodoInputText('');
  }

  const removeTodo = (indexToDelete) => {
    const updatedArray = todoList.filter((todo, index) => {
      if (index != indexToDelete) {
        return todo;
      }
    })
    setTodoList(updatedArray)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          This is App file rendering
        </h1>

        <form
          onSubmit={addTodoList}
          className="w-full max-w-md bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="query"
            id="query"
            placeholder="Enter your task"
            onChange={handleInputText}
            value={todoinputText}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <br />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Add Task
          </button>
        </form>

        {/* mapping todo list array */}

        <div className="w-full max-w-md mt-8 space-y-3">
          {
            todoList.map((todo, index) => {
              return (
                <div
                  className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-gray-800 font-medium">
                      {todo}
                    </p>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        removeTodo(index)
                      }}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition duration-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default App;
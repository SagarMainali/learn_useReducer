import React, { useReducer, useState } from 'react'

function App() {

     // const [allTodos, dispatch] = useReducer(reducer, initialState)

     const [newtodo, setNewTodo] = useState('')

     function handleChange(e) {
          e.preventDefault()
          setNewTodo(e.target.value)
     }

     return (
          <div className='todo-container'>
               <form>
                    <input type="text" onChange={handleChange} value={newtodo} />
               </form>
          </div>
     )
}

export default App
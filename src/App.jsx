import React, { useReducer, useState } from 'react'
import Todo from './Todo'

const ACTIONS = {
     ADD_TODO: 'add_todo'
}

function reducer(allTodos, action) {
     switch (action.type) {
          case ACTIONS.ADD_TODO:
               return [
                    ...allTodos,
                    {
                         id: Date.now(),
                         todo: action.payload.newTodo,
                         completed: false
                    }
               ]
          default:
               return allTodos
     }
}

function App() {

     const [allTodos, dispatch] = useReducer(reducer, [])

     console.log(allTodos)

     const [newTodo, setNewTodo] = useState('')

     function handleChange(e) {
          setNewTodo(e.target.value)
     }

     function handleSubmit(e) {
          e.preventDefault()
          dispatch({ type: ACTIONS.ADD_TODO, payload: { newTodo: newTodo } })
          setNewTodo('')
     }

     return (
          <div className='todo-container'>
               <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={newTodo} />
               </form>
               {allTodos.map(todo => <Todo key={todo.id} {...todo} />)}
          </div>
     )
}

export default App
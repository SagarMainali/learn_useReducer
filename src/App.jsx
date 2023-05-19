import React, { useReducer, useState } from 'react'
import Todo from './Todo'

export const ACTIONS = {
     ADD_TODO: 'add_todo',
     COMPLETE_TODO: 'complete-todo',
     DEL_TODO: 'del-todo'
}

function reducer(allTodos, action) {
     switch (action.type) {
          case ACTIONS.ADD_TODO:
               return [
                    ...allTodos,
                    {
                         id: Date.now(),
                         newTodo: action.payload.newTodo,
                         completed: false
                    }
               ]
          case ACTIONS.COMPLETE_TODO:
               return allTodos.map(todo => {
                    return todo.id === action.payload.id
                         ? {
                              ...todo,
                              completed: !todo.completed
                         }
                         : todo
               })
          case ACTIONS.DEL_TODO:
               return allTodos.filter(todo => {
                    return todo.id !== action.payload.id
               })
          default:
               return allTodos
     }
}

function App() {

     const [allTodos, dispatch] = useReducer(reducer, [])

     const [newTodo, setNewTodo] = useState('')

     const [err, setErr] = useState('')

     function handleChange(e) {
          setNewTodo(e.target.value)
     }

     function handleSubmit(e) {
          e.preventDefault()
          if (newTodo.trim()) {
               dispatch({ type: ACTIONS.ADD_TODO, payload: { newTodo: newTodo } })
               setNewTodo('')
               setErr('')
          }
          else {
               setErr("Can't add empty todo")
          }
     }

     return (
          <div className='container'>
               <form onSubmit={handleSubmit}>
                    <input type="text" onChange={handleChange} value={newTodo} />
               </form>
               {err && <h3 style={{ color: 'red', fontSize: '12px' }}>{err}</h3>}
               {allTodos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
          </div>
     )
}

export default App
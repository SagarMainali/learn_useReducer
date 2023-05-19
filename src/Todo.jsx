import React from 'react'
import { ACTIONS } from './App'

function Todo({ todo, dispatch }) {

     const style = {
          backgroundColor: todo.completed ? 'gray' : 'white'
     }

     return (
          <div className='todo'>
               <div className="mark">
                    <span className='circle' style={style} onClick={() => dispatch({ type: ACTIONS.COMPLETE_TODO, payload: { id: todo.id } })}></span>
               </div>
               <p>{todo.todo}</p>
               <h6 onClick={() => dispatch({ type: ACTIONS.DEL_TODO, payload: { id: todo.id } })}>DEL</h6>
          </div>
     )
}

export default Todo

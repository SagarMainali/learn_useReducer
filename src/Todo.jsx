import React from 'react'

function Todo({ todo, completed }) {

     const style = {
          backgroundColor: completed ? 'gray' : 'white'
     }

     return (
          <div className='todo'>
               <div className="mark" style={{ style }}></div>
               <p>{todo}</p>
          </div>
     )
}

export default Todo

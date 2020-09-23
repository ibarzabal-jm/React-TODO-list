import React from 'react'

export const TodoCard = ({ todo, index, handleDelete, handleArchive}) => {
    return (
        <li>
            <p 
                className={ `${ todo.done && 'complete' }`}
                onClick={ ()=>handleArchive( todo.id ) }
            
            >
                {index + 1}. { todo.desc }
            </p>


            <button 
                className="btn btn-danger"
                onClick={ ()=>handleDelete( todo.id ) }                                        
            >
                Borrar
            </button>
        </li>
    )
}

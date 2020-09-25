

export const getTodoByComplete = ( todos, complete  ) =>{

    return todos.filter( todo => todo.done === complete );
}

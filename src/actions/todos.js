import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

// action creators
function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}
// action creators
function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

// async action creators
export function handleAddTodo (name, cb) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
        cb()
      })
      .catch(() => {
        alert('There was an error. Try again.')
      })
  }
}

// async action creators
export function handleDeleteTodo (todo) {
  return (dispatch) => {
    // call dispatch before the API request.
    dispatch(removeTodo(todo.id))
    // call API
    return API.deleteTodo(todo.id)
      // if there is an error add the todo back
      .catch(() => {
        dispatch(addTodo(todo))
        alert('An Error occured, please try again')
      })
  }
}

  // async action creators
export function handleToggle (id) {
  return (dispatch) => {
    dispatch(toggleTodo(id))

    return API.saveTodoToggle(id)
      .catch(() => {
        dispatch(toggleTodo(id))
        alert('An Error occured, please try again')
      })
  }
}
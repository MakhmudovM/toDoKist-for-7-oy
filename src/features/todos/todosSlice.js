import { createSlice } from '@reduxjs/toolkit'

function dataFromLocal() {
return JSON.parse(localStorage.getItem("todos")) || {
  todos: []
}
}


  export const todosSlice = createSlice({
    name: 'todos',
    initialState: dataFromLocal(),
    reducers: {
        addTodo: (state , {payload} ) => {
           state.todos.push(payload)
           localStorage.setItem('todos' , JSON.stringify(state))
        },
        removeTodo: (state , {payload}) => {
          state.todos = state.todos.filter((todo) => {
            return todo.id !== payload
          })
          localStorage.setItem('todos' , JSON.stringify(state))
        },
    }
  });

  export const {addTodo , removeTodo } = todosSlice.actions
  export default todosSlice.reducer;

  
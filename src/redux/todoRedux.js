import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        fetchTodosRequest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchTodosSuccess(state, action) {
            state.loading = false;
            state.todos = action.payload;
        },
        fetchTodosFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        deleteTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        editTodo(state, action) {
            const { id, newText } = action.payload;
            const todoToEdit = state.todos.find((todo) => todo.id === id);
            if (todoToEdit) {
                todoToEdit.text = newText;
            }
        },
    },
});

export const { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure, addTodo, deleteTodo, editTodo } =
    todoSlice.actions;

export default todoSlice.reducer;

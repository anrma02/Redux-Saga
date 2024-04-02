
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, fetchTodosRequest } from '~/redux/todoRedux';
import { handleAddTodo, handleDeleteTodo, handleEditTodo, } from '~/todoHandle';
import TodoItem from './TodoItem';


function AddTodo() {
     const [text, setText] = useState('');
     const dispatch = useDispatch();
     const { todos } = useSelector(state => state.todo);
     const [editTodo, setEditTodo] = useState(''); // [1

     // fetchTodosRequest function lấy danh sách todo
     useEffect(() => {
          dispatch(fetchTodosRequest())
     }, [dispatch])

     // handleAddTodo function thêm todo
     const handleSubmit = e => {
          e.preventDefault();
          handleAddTodo(dispatch, addTodo, text)
          setText('')

     };

     // handleDelete function xóa todo
     const handleDelete = id => {
          handleDeleteTodo(dispatch, id, deleteTodo)
     }

     const handleEdit = (id, newText) => {
          handleEditTodo(dispatch, id, newText, editTodo)
     }

     return (
          <div>
               <form onSubmit={handleSubmit} className='flex justify-center'>
                    <input
                         type="text"
                         value={text}
                         className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
                         onChange={e => setText(e.target.value)}
                         placeholder="Add todo..."
                    />
                    <button type="submit" className=' bg-lime-500 p-4 rounded-lg ml-3'>Add</button>
               </form>

               <div className='flex justify-center mt-7 max-h-[200px]  overflow-y-scroll overflow-x-hidden'>
                    <div className="relative overflow-x-hidden">
                         <table className="w-[510px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                              <thead className="sticky top-0 text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                                   <tr>
                                        <th scope="col" className="px-6 py-3">
                                             STT
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                             Công việc
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-center">
                                             Edit
                                        </th>
                                   </tr>
                              </thead>
                              <tbody  >
                                   {todos.map((item, index) => (
                                        <TodoItem key={item.id} item={item} index={index} handleDeleteTodo={handleDelete} handleEditTodo={handleEdit} />
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
               <div>
               </div>
          </div>
     );
}

export default AddTodo;

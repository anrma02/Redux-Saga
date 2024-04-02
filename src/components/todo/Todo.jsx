import { useState } from "react";



function AddTodo() {

     const [value,setValue] = useState('');  
     // handleAddTodo function thêm todo
     const handleSubmit = e => {
          e.preventDefault();

     };


     return (
          <div>
               <form onSubmit={handleSubmit} className='flex justify-center'>
                    <input
                         type="text"
                         value=""
                         className=' bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
                         onChange={" "}
                         placeholder="Add todo..."
                    />
                    <button type="submit" className=' bg-lime-500 p-4 rounded-lg ml-3'>Add</button>
               </form>


               <div>
               </div>
          </div>
     );
}

export default AddTodo;

/* eslint-disable react/prop-types */
const TodoItem = ({ item, index, handleDeleteTodo }) => {
     return (
          <tr key={item.id} className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-slate-200 transition duration-100">
               <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-[16px]">
                    {index + 1}
               </th>
               <td className="px-6 py-2 text-xl">
                    <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                         {item.text}
                    </span>
               </td>
               <td className="flex justify-center gap-4 py-6 text-[16px]">
                    <button className='hover:text-red-400' onClick={() => handleDeleteTodo(item.id)}>Delete</button>
               </td>
          </tr>
     );
};

export default TodoItem;

import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductSuccess } from "~/redux/actions/producRedux";
import { valiDateField, valiDateForm } from "../../valiDate";


function AddTodo() {
     const [product, setProduct] = useState({
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
     });
     const dispatch = useDispatch();
     const imageRef = useRef(null);
     const [errors, setErrors] = useState({});

     // handleAddTodo  value input
     const handleChange = (e) => {
          const { name, value } = e.target;
          setProduct({
               ...product,
               [name]: value,
          });
          
          const errorMessages = valiDateField(name, value)
          setErrors({
               ...errors,
               [name]: errorMessages,
          });
     }

     // handleAddTodo function thêm todo
     const handleSubmit = e => {
          e.preventDefault();
          const errors = valiDateForm(product);
          if (Object.keys(errors).length === 0) {
               dispatch(addProductSuccess(product));
          } else {
               setErrors(errors);
          }
     };

     // handleAddTodo function kiểm tra lỗi
     const handleBlur = (e) => {
          const { name, value } = e.target;
          const error = valiDateField(name, value);
          setErrors({
               ...errors,
               [name]: error,
          });
     }

     // handleAddTodo upload image
     const handleChangeImage = (e) => {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
               setProduct({
                    ...product,
                    image: reader.result,
               });
          }
     }

     return (
          <div>
               <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3 p-4">
                         <div className="grid gap-5">
                              <input
                                   type="text"
                                   value={product.title}
                                   name="title"
                                   className={` w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder="Title"
                              />
                              {errors.title && <span className="text-red-500">{errors.title}</span>}
                              <input
                                   type="text"
                                   value={product.price}
                                   name="price"
                                   className={`w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  `}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder="Price"
                              />
                              {errors.price && <span className="text-red-500">{errors.price}</span>}
                              <input
                                   type="text"
                                   value={product.description}
                                   name="description"
                                   className={`w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   `}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder="Description"
                              />
                              {errors.description && <span className="text-red-500">{errors.description}</span>}
                              <input
                                   type="text"
                                   value={product.category}
                                   name="category"
                                   className={`w-2/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500   `}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   placeholder="Category"
                              />
                              {errors.category && <span className="text-red-500">{errors.category}</span>}
                         </div>
                         <div>
                              {product.image && <img src={product.image} alt="product" className="w-1/3" />}
                              <input type="file" name="image" ref={imageRef} onChange={handleChangeImage} />
                         </div>
                    </div>

                    <button type="submit" className="bg-lime-500 p-4 rounded-lg ml-3">
                         Add
                    </button>
               </form>
               <div></div>
          </div>
     );
}

export default AddTodo;

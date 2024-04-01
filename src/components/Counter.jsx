import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
     const count = useSelector(state => state.counter.count)
     const dispatch = useDispatch()


     const handleIncrement = () => {
          dispatch({
               type: 'INCREMENT_ASYNC',
               payload: 10
          })
     }

     const handleDecrement = () => {
          dispatch({
               type: 'DECREMENT_ASYNC',
               payload: 10
          })
     }

     return (
          <div className=" p-4 text-center ">
               <div className=" text-xl mb-3  ">
                    Clicked: {count} times
               </div>
               <button className="bg-blue-400 p-2 rounded-md " onClick={handleIncrement}>
                    Increment
               </button>
               &nbsp;&nbsp;
               <button className="bg-blue-500 p-2 rounded-md" onClick={handleDecrement}>
                    Decrement
               </button>

          </div >
     )

}


export default Counter 
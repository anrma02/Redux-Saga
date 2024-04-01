

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
          <>
               <div>
                    Clicked: {count} times
               </div>
               <button className="bg-blue-400 " onClick={handleIncrement}>
                    Increment
               </button>
               &nbsp;
               <button className="bg-blue-500" onClick={handleDecrement}>
                    Decrement
               </button>
               <hr /></>
     )

}


export default Counter 
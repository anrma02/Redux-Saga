import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const ApiItem = ({ item }) => {
     return (
          <div className="max-w-[250px] h-[450px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <img className="rounded-t-lg bg-cover w-full p-4  h-[250px]" src={item.image} alt={item.title} />
               <div className="p-5">
                    <h5 className="mb-2 text-xl  line-clamp-1  font-bold tracking-tight text-gray-900 dark:text-white">{item.title} </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-[100px] text-balance  line-clamp-4">{item.description}</p>
               </div>
          </div>

     );
};

ApiItem.propTypes = {
     item: PropTypes.shape({
          title: PropTypes.string,
          image: PropTypes.string,
          description: PropTypes.string,
     }).isRequired,
};


export default ApiItem;

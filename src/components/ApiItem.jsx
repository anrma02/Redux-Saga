import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const ApiItem = ({ item }) => {
     return (
          <div>
               <span>{item.title}</span>
          </div>
     );
};

ApiItem.propTypes = {
     item: PropTypes.shape({
          title: PropTypes.string.isRequired,

     }).isRequired,
};


export default ApiItem;

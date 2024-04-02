/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '~/redux/actions/producRedux';
import ProductItem from './ProductItem';



const Product = () => {
    const [show, setShow] = useState(false);
    const { data } = useSelector((state) => state.api);
    const { products } = useSelector((state) => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    return (
        <>
            {products.map((item) => (
                <ProductItem key={item.id} item={item} />
            ))}

            List: &nbsp;
            <button className='bg-cyan-400 py-2 px-5 rounded-md font-medium' type="button" onClick={() => setShow(!show)} >Show</button>
            {show && <div className='grid grid-cols-3 md:grid-cols-5 gap-3 m-5 '>
                {data.map((item) => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>}
        </>
    );
};

export default Product

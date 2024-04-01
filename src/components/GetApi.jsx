

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchApi } from '~/redux/apiAction';

const GetApi = () => {
    const { data } = useSelector((state) => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);



    return (
        <div>
            List:
            {data.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};



export default GetApi

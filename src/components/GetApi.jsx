/* eslint-disable react-refresh/only-export-components */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '~/redux/apiAction';
import ApiItem from './ApiItem';


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
                <ApiItem key={item.id} item={item} />
            ))}
        </div>


    );
};

export default GetApi 

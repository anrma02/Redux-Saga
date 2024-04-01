/* eslint-disable react-refresh/only-export-components */

import { compose } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchApi } from '~/redux/apiAction';


const GetApi = (state) => {
    const { data } = useSelector((state) => state.api);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchApi());
    }, [dispatch]);

    console.log('🚀 ~ getApi ~ data:', state);

    return (
        <div>
            List:
            {data.length > 0 ? (
                <div>
                    List:{' '}
                    {data.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))}
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
};

const mapStatetoProps = createStructuredSelector({
    data: (state) => state.api.data || [],
    loading: (state) => state.api.loading || false,
    error: (state) => state.api.error || null,
});

const mapDispatchToProps = (dispatch) => ({
    fetchApi: () => dispatch(fetchApi()),
});

const withConnect = connect(mapStatetoProps, mapDispatchToProps);

export default compose(withConnect)(GetApi);

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Fragment } from 'react';

import { Provider, } from 'react-redux'
import store from './redux/store';
import Counter from './components/Counter';
import GetApi from './components/GetApi';

function App() {

    return (
        < >
            kk
            <Provider store={store}>
                <Counter />
                <hr />
                <GetApi />
            </Provider>
        </>
    );
}

export default App;

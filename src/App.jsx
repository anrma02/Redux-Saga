// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Fragment } from 'react';

import { Provider, } from 'react-redux'
import store from './redux/store';
import Counter from './components/Counter';
import GetApi from './components/GetApi';
import Todo from './components/Todo';

function App() {

    return (
        < >

            <Provider store={store}>
                <Counter />
                <hr />
                <Todo />
                <hr />
                <GetApi />
            </Provider>
        </>
    );
}

export default App;

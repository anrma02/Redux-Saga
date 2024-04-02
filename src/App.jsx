// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Fragment } from 'react';

import { Provider, } from 'react-redux'
import store from './redux/store';
import Counter from './components/Counter';
import Product from './components/Product/Product';
import Todo from './components/todo/Todo';

function App() {

    return (
        < >
            <Provider store={store}>
                <Counter />
                <hr />
                <Todo />
                <hr />
                <Product />
            </Provider>
        </>
    );
}

export default App;

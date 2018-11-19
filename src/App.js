import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout/Layout.js';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { imagesLoadQueriesInit } from './store/actions';

class App extends Component {
	componentDidMount() {
		store.dispatch(imagesLoadQueriesInit());
	}
	render() {
		return (
			<Provider store={store}>
				<Layout />
			</Provider>
		);
	}
}

export default App;

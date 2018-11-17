import React from 'react';
import { hot } from 'react-hot-loader';
import Layout from './components/Layout/Layout.js';
import { Provider } from 'react-redux';
import store from './store/store.js';

const App = () => {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	);
};

export default App;

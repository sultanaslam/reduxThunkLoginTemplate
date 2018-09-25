import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const middleware = [thunk];
const store = createStore( 
	rootReducer, 
	{}, 
	compose(
		applyMiddleware(...middleware),
		window.devToolsExtension && window.devToolsExtension()
	)
);

export default store;
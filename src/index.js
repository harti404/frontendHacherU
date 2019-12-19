import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from './store/confStore';
import { ConnectedRouter } from 'connected-react-router';
import theRoutes from './router/router';



import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Suspense fallback={<div>Loading...</div>}>
				<App>
					{ theRoutes }
				</App>
			</Suspense>
		</ConnectedRouter>
	</Provider>, document.getElementById('root'));

serviceWorker.unregister();
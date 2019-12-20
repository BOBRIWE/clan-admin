import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);

    if ((module as any).hot) {
        (module as any).hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        });
    }

    return store;
}
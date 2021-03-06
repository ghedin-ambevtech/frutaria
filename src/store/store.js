import { createStore } from 'redux';
import { reducers } from '../reducers/index_reducer' //utilizei o nome de arquivo, diferente do video

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
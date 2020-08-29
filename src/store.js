import  commentReducer from './reducer/commentReducer';
import { createStore} from 'redux';
 

const store= createStore (commentReducer);

export default store;
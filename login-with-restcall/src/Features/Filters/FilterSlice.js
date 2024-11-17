import { 
    FILTER_CHANGED_NAME,
    FILTER_CHANGED_ROLE,
 } from "../../Actions/types";

 
//  const initialState = {
//     todos: [
//       { id: 0, text: 'Learn React', completed: true },
//       { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
//       { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
//     ],
//     filters: {
//       status: 'All',
//       colors: []
//     }
//   }

 //const user = JSON.parse(localStorage.getItem("order"));

 // TUTORIAL : https://redux.js.org/tutorials/fundamentals/part-5-ui-react
 const initialState = {
        name: '',
        role: 'All',
 };

export default function (state, initialState, action){
    const {type, payload} = action;
    switch(type){
        case FILTER_CHANGED_NAME:
            return{
                    ...state.filters,
                    name: action.payload,
            }
        case FILTER_CHANGED_ROLE:
            return{
                   ...state.filters,
                   role: action.payload,
            }
        default:
            return state;
        
    }
}

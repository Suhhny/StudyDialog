import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    numberData: number,
    colorData: color
});

/* 
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
*/

export default reducers;












//쪼개지 않으면


// import * as types from '../actions/ActionTypes';

// const initialState = {
//     color: 'black',
//     number: 0
// };

// //reducer함수는 state와 action을 파라미터로 가지는 함수
// //state를 직접 수정 X, 기존 state값에 덮어쓴 새 상태객체 만들기

// function counter(state = initialState, action){
//     switch(action.type){
//         case types.INCREMENT:
//             return{
//                 ...state,
//                 number: state.number + 1
//             };
//         case types.DECREMENT:
//             return{
//                 ...state,
//                 number: state.number - 1
//             };
//         case types.SET_COLOR:
//             return{
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;
//     }
// };

// export default counter;
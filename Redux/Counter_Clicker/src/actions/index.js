//action 객체 생성자
//() => ({})는 function(){return{}}과 같다.

import * as types from './ActionTypes';

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});
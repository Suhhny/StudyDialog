import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setColor = ({index, color}) => ({
    type: types.SET_COLOR,
    color,
    index
});

export const create = (color) => ({
    type: types.CREATE,
    color
})

export const remove = () => ({
    type: types.REMOVE
})


// 예시

// increment(3) 액션은 index가 3인 counter의 값을 1씩 올린다.
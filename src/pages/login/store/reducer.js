import * as constants from './constants';

const defaultState = {
    focused: true,
}
export default (state = defaultState, action) => {
    switch(action.type) {
        // case constants.CHANGE_LIST:
        //     return state.merge({
        //         list: action.data,
        //         totalPage: action.totalPage
        //     })
        // case constants.MOUSE_ENTER:
        //     return state.set('mouseIn', true);
        // case constants.MOUSE_LEAVE:
        //     return state.set('mouseIn', false);
        // case constants.PAGE_CHANGE:
        //     return state.set('page', action.page);
        default:
            return state;
    }
}

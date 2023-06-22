import { handleActions } from 'redux-actions';
import {
    GET_DATA_SUCCEEDED,
} from '../constants';

const initialState = {
    data: {},
    errors: {}
};

const dataReducer = handleActions(
    {
        [GET_DATA_SUCCEEDED]: (state, action) => ({
            ...state,
            data: action.payload
        })
    },
    initialState
);

export default dataReducer;
import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';

export const signIn = (userId) => {
    console.log("Called sign in action creator");
    console.log("UserId: " + userId);
    return {
        type: SIGN_IN,
        payload: userId,
    };
};

export const signOut = () => {
    console.log("Called singout action creator")
    return {
        type: SIGN_OUT,
    };
};

export const createStream = (formValues) => async (dispatch) => {
    const streamInfo = await streams.post("/streams", formValues);

    dispatch({type: CREATE_STREAM, payload: streamInfo.data});
};


import streams from '../apis/streams';
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM,
} from './types';

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

export const createStream = (formValues) => async (dispatch, getState) => {
    try {
        const { userId } = getState().auth;
        const streamInfo = await streams.post("/streams", { ...formValues, userId });

        console.log(streamInfo);

        dispatch({ type: CREATE_STREAM, payload: streamInfo.data });
        history.push('/');
    } catch (err) {
        history.push("/streams/error")
    }
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');

    dispatch({ type: FETCH_STREAMS, payload: response.data });
}

export const fetchStream = (id) => async dispatch => {
    try {
        console.log("calling backend");
        console.log(id);
        const response = await streams.get(`/streams/${id}`);

        dispatch({ type: FETCH_STREAM, payload: response.data });
    } catch (err) {
        return Promise.reject(err)
    }
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
}



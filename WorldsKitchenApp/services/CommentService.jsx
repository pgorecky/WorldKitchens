import {postRequest} from "./axios_config";

const ADD_COMMENT_ENDPOINT = '/comment/add';

export const addCommentRequest = (data) => {
    return postRequest(ADD_COMMENT_ENDPOINT, data)
}

import {postRequest} from "../API_CONFIG";

const ADD_COMMENT_ENDPOINT = '/comment/add'

export const addCommentRequest = (mealId, content) => {
    return postRequest(ADD_COMMENT_ENDPOINT, {
        dishId: mealId,
        content: content,
    })
}
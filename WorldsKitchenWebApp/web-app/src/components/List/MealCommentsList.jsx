import './List.css'
import {useNavigate} from "react-router-dom";

export default function MealCommentsList({comments}) {
    const navigate = useNavigate();

    function handleRedirect(userId) {
        navigate(`/profile/${userId}`)
    }

    return (
        <div id={'comments-list'}>
            {comments.map((comment) => (
                <div key={comment.id} className={'comment'}>
                    <img src={comment.author.imageUrl} alt={'commenter'}/>
                    <div className={'comment-content'}>
                        <div className={'comment-author'} onClick={() => handleRedirect(comment.author.id)}>
                            {comment.author.firstName} {comment.author.lastName}
                        </div>
                        {comment.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
import './List.css'

export default function MealCommentsList({comments}) {
    return (
        <div id={'comments-list'}>
            {comments.map((comment) => (
                <div key={comment.id} className={'comment'}>
                    <img src={comment.author.imageUrl} alt={'commenter'}/>
                    <div className={'comment-content'}>
                        <div className={'comment-author'}>
                            {comment.author.firstName} {comment.author.lastName}
                        </div>
                        {comment.content}
                    </div>
                </div>
            ))}
        </div>
    )
}
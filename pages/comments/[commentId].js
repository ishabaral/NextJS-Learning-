import { comments } from "../../data/comments"

function CommentDetail(comment) {
    return (
        <>
            <h2>{comment.id} {comment.title}</h2>
        </>
    )
}
export default CommentDetail

export async function getStaticPaths() {
        return {
            paths: [
                { params: { commentId: '1' } },
                { params: { commentId: '2' } },
                { params: { commentId: '3' } },
            ],
            fallback: false
        }
}

export async function getStaticProps(context) {
    const { params } = context
    const { commentId } = params

    const comment = comments.find(comment => comment.id === parseInt(commentId))
    console.log("cmm",comment)

    return {
        props: {
            comment,
        }
    }
}
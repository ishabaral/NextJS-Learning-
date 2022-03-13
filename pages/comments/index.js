import { useState } from "react"

function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    
    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments',  {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }

    const handleDelete = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const handleDisplay = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`)
        const data = await response.json()
        console.log(data)
    }

    return(
        <>
            <input type="text" value={comment} onChange= {e => setComment(e.target.value)} />
            <button onClick={submitComment }>Submit Comment</button>
            <button onClick={fetchComments}>Load Comments</button>
            {
                comments.map(comment => {
                    return (
                        <div key= {comment.id}>
                            <p>
                                {comment.id} {comment.text}
                                <button onClick={() => handleDelete(comment.id)}>Delete</button>
                                <button onClick={() => handleDisplay(comment.id)}>Display</button>
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CommentsPage
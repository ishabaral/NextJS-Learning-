import { useRouter } from "next/router";

function ReviewDetail() {
    const route = useRouter()
    const { productId, reviewId } = route.query
    return <h2>Review {reviewId} for product {productId}</h2>
}

export default ReviewDetail
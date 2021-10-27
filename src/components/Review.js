const Review = ({review}) => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col rounded-2xl bg-gray-900 px-8 py-5">
                <p className="text-xl font-bold mb-3">{review.reviewTitle}</p>
                <p>{review.reviewText}</p>
            </div>
        </div>
    );
}

export default Review;
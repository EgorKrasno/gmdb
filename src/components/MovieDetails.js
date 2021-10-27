import {IoArrowBackCircleOutline} from "react-icons/all";
import {useEffect, useState} from "react";
import axios from "axios";
import Review from "./Review";

const MovieDetails = ({movie, setCurrentMovie, user, showRegisterModal}) => {
    const [reviews, setReviews] = useState([]);
    const [reviewTitle, setReviewTitle] = useState("");
    const [reviewText, setReviewText] = useState("");

    const handleReview = async (title, text) => {
        try {
            const reviewObj = {email: user.email, movieId: movie.movieId, reviewTitle, reviewText};
            console.log(reviewObj);
            const response = await axios.post("http://localhost:3001/reviews", reviewObj);
            setReviews([...reviews, reviewObj])
            console.log(response);
        } catch (e) {
            console.log(e);
            alert("Could not submit review");
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("http://localhost:3001/reviews/" + movie.movieId);
            setReviews(response.data);
        }

        fetchData();
    }, []);

    return (
        <div className="flex m-2 text-gray-100 overflow-hidden">
            <div className="flex flex-col">
                <div onClick={() => setCurrentMovie({})}
                     className="text-gray-100 hover:text-yellow-400 cursor-pointer w-16"><IoArrowBackCircleOutline
                    size={48}/></div>
                <div className="flex mt-3">
                    <img
                        style={{background: `url(https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec)`}}
                        width={300} height={450}
                        className="rounded-lg cursor-pointer" src={movie.poster}
                        alt={`${movie.title}`}/>
                    <div className="flex flex-col ml-4 space-y-3">
                        <h1 className="text-3xl font-bold">{movie.title}</h1>
                        <p className="text-2xl">Released {movie.released}</p>
                        <p>{movie.genre} | {movie.actors}</p>
                        <p>{movie.plot}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-full mt-4 mx-3">
                <form
                    onSubmit={async (event) => {
                        event.preventDefault();
                        if(!user.hasOwnProperty('email')) {
                            showRegisterModal();
                            return;
                        }
                        await handleReview(reviewTitle, reviewText);
                        setReviewTitle('');
                        setReviewText('');
                    }}>
                    <input
                        className="w-full text-white bg-gray-800 py-2.5 px-5 rounded-2xl focus:outline-none ring-1 ring-yellow-400 mb-3"
                        value={reviewTitle} placeholder='Movie Review Title'
                        onChange={(e) => setReviewTitle(e.target.value)}/>
                    <textarea
                        rows={3}
                        className="w-full text-white bg-gray-800 py-2.5 px-5 rounded-2xl focus:outline-none ring-1 ring-yellow-400"
                        value={reviewText} placeholder='Movie Review Text'
                        onChange={(e) => setReviewText(e.target.value)}/>
                    <button
                        className="mt-2 w-full text-lg text-black hover:bg-yellow-200 bg-yellow-400 py-2.5 px-5 rounded-2xl focus:outline-none focus:ring-1 focus:ring-yellow-400"
                        type='submit'>Submit Review
                    </button>
                </form>
                <h1 className="text-2xl font-bold text-center mt-5 mb-3">Reviews</h1>
                <div className="space-y-4 overflow-y-auto">
                    {reviews.map(review => <Review review={review}/>)}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
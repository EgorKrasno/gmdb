const MovieList = ({movies, setCurrentMovie}) => {
    return (
        <div className="flex justify-center gap-4 flex-wrap mt-8">
            {movies.map(movie => <img
                style={{background: `url(https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec)`}}
                onClick={() => setCurrentMovie(movie)} width={300} height={450}
                className="rounded-lg cursor-pointer transform hover:scale-125 hover:z-50 transition duration-500 ease-in-out "
                src={movie.poster}
                alt={`${movie.title}`}/>)}
        </div>
    );
}

export default MovieList;
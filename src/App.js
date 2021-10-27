import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import RegisterModal from "./components/RegisterModal";


const App = () => {
    const [user, setUser] = useState({});
    const [currentMovie, setCurrentMovie] = useState({});
    const [data, setData] = useState([]);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    useEffect(() => {
        async function fetchData() {
            await fetchAllMovies();
        }

        fetchData();
    }, []);

    const fetchAllMovies = async () => {
        const response = await axios.get("http://localhost:3001/movies");
        setData(response.data);
        // console.log(response.data);
    }

    const handleSearch = async (query) => {
        if (query.length === 0) {
            await fetchAllMovies();
            return;
        }
        const response = await axios.get("http://localhost:3001/search?query=" + query);
        setData(response.data);
        console.log(response.data);
    }

    const handleLogin = async (userLoginObj) => {
        try {
            const response = await axios.post("http://localhost:3001/register", userLoginObj);
            if (response.status === 200) setUser(userLoginObj);
        } catch (e) {
            alert("Failed to login");
        }
    }

    return (
        <>
            <div className="h-screen overflow-hidden bg-gray-800">
                <Navbar handleSearch={handleSearch} showRegisterModal={() => setShowRegisterModal(true)}/>
                <div className="flex h-screen overflow-y-auto -mt-16 pt-16">
                    {currentMovie.hasOwnProperty('movieId') ?
                        <MovieDetails showRegisterModal={() => setShowRegisterModal(true)} user={user} setCurrentMovie={setCurrentMovie} movie={currentMovie}/> :
                        <>{data.length > 0 && <MovieList setCurrentMovie={setCurrentMovie} movies={data}/>}</>
                    }
                </div>
            </div>
            <RegisterModal handleLogin={handleLogin} isOpen={showRegisterModal}
                           closeModal={() => setShowRegisterModal(false)}/>
        </>
    );
}

export default App;

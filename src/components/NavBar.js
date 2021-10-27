import {useState} from "react";

const Navbar = ({handleSearch, showRegisterModal}) => {
    const [query, setQuery] = useState('');

    return (
        <nav className="flex justify-between items-center h-16 px-4 bg-gray-900 z-10">
            <div className="flex items-center space-x-6">
                <p className="text-3xl text-white cursor-pointer">GMDB</p>
                <p className="text-xl text-white cursor-pointer">Home</p>
                <p onClick={showRegisterModal} className="text-xl text-gray-400 cursor-pointer hover:text-white ">Register</p>
            </div>

            <div className="flex items-center">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSearch(query);
                    }}
                    className="space-x-3">
                    <input value={query} onChange={(e) => setQuery(e.target.value)}
                           className="bg-gray-700 py-2 rounded-md px-3 text-gray-100"
                           placeholder='Search' type='text'/>
                    <button type='submit'
                            className="text-yellow-400 ring-2 ring-yellow-400 rounded-md py-2 px-3 ring-inset">Search
                    </button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
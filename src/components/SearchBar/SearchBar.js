import { useState } from 'react';
import "./searchbar.css";

const SearchBar = ({onSearchImage}) => {
    const [search, setSearch] = useState("");

    const inputChanged = (e) => {
        setSearch(e.target.value)
    };

    const searchImage = () => {
        onSearchImage(search)
    };

    return (
        <div className="ui action input search-bar-container">
            <input type="text" placeholder="Search..." onChange={inputChanged} onKeyPress={(e) => {
                if (e.key === "Enter") {
                    searchImage();
                }
            }} />
            <button className="ui icon button" onClick={searchImage}>
                <i className="search icon"></i>
            </button>
        </div>
    );
};

export default SearchBar;
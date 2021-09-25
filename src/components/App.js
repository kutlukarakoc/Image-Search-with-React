import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./app.css";
import axios from "axios";
import ImageList from "./Images/ImageList";

const App = () => {

  const [images, setImages] = useState([]);

  const onSearchImage = async (search) => {
    const result = await axios.get("https://api.unsplash.com/search/photos?page=10", {
      params: {query: search},
      headers: {Authorization: "Client-ID Q-vCWA3joCUZSIr96osDn0XM674ihPkMUDjGgGbBgm8"}
    });

    console.log(result)
    setImages(result.data.results);
  }

  
  return (
    <div className="app-container">
      <SearchBar onSearchImage={onSearchImage} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import "./Search.css";

const Search = ({ onPlantSelect }) => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const API =
    "https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search";
  const API_KEY = "Z-cZHwPlV_cTzUxR3avaPh8woPt_699Ir0lJ96fguK8";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API}?token=${API_KEY}&q=${input}`);
        const data = await response.json();
        console.log(data.data);
        setSuggestions(data.data);
      } catch (error) {
        console.error("Houston, mamy problem:", error);
      }
    };

    if (input.length > 2) {
      fetchData();
    }
  }, [input]);

  const debouncedOnChange = debounce(setInput, 300);

  return (
    <div>
      <input type="text" onChange={(e) => debouncedOnChange(e.target.value)} />
      <div>
        {suggestions.map((plant, index) => (
          <div
            className="suggestion"
            key={index}
            onClick={() => onPlantSelect(plant)}
          >
            {plant.scientific_name}{" "}
            <img src={plant.image_url} alt={plant.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

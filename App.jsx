import { useState } from "react";
import Search from "./components/Search";
import PlantDetails from "./components/PlantDetails";
import Collection from "./components/Collection";

const App = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handlePlantSelect = (plant) => {
    // Tutaj logika pobierania pełnych informacji o roślinie z API
    // ...
    setSelectedPlant(plant);
  };

  return (
    <Collection>
      {(collection, addToCollection) => (
        <div>
          <Search onPlantSelect={handlePlantSelect} />
          {selectedPlant && (
            <PlantDetails
              plant={selectedPlant}
              onAddToCollection={() => addToCollection(selectedPlant)}
            />
          )}
        </div>
      )}
    </Collection>
  );
};

export default App;

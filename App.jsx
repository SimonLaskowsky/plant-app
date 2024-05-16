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
    <>
      <Search onPlantSelect={handlePlantSelect} />
      <Collection>
        {(collection, addToCollection) => (
          <div>
            {selectedPlant && (
              <PlantDetails
                plant={selectedPlant}
                onAddToCollection={() => addToCollection(selectedPlant)}
              />
            )}
          </div>
        )}
      </Collection>
    </>
  );
};

export default App;

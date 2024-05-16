import { useState } from 'react';
import Search from './components/Search';
import PlantDetails from './components/PlantDetails';

const App = () => {
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handlePlantSelect = (plant) => {
    // Tutaj logika pobierania pełnych informacji o roślinie z API
    // ...
    setSelectedPlant(plant);
  };

  return (
    <div>
      <Search onPlantSelect={handlePlantSelect} />
      {selectedPlant && <PlantDetails plant={selectedPlant} />}
    </div>
  );
};

export default App;

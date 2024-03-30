import { useState, useEffect } from 'react';
import './App.css';

const API = 'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/search';
const API_KEY = 'Z-cZHwPlV_cTzUxR3avaPh8woPt_699Ir0lJ96fguK8';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getPlantData = async (name) => {
      try {
        const response = await fetch(`${API}?token=${API_KEY}&q=${name}`);
        const result = await response.json();
        setData(result); 
      } catch (error) {
        console.error('Houston, mamy problem:', error);
      }
    };
    getPlantData('beach');
  }, []);

  // Sprawdzenie, czy dane zostały załadowane, zanim spróbujemy uzyskać do nich dostęp
  if (data && data.data && data.data.length > 0) {
    console.log(data.data);
    const plantImageUrl = data.data[0].image_url;

    return (
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={plantImageUrl} className="logo" alt="Plant image" />
          </a>
        </div>
      </>
    );
  } else {
    // Renderowanie alternatywnego UI, gdy dane są jeszcze ładowane
    return <div>Loading...</div>;
  }
}

export default App;
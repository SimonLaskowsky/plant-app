const PlantDetails = ({ plant, onAddToCollection }) => {
  return (
    <div>
      <h1>{plant.scientific_name}</h1>
      <img src={plant.image_url} alt={plant.name} />
      <button onClick={onAddToCollection}>Dodaj do kolekcji</button>
    </div>
  );
};

export default PlantDetails;

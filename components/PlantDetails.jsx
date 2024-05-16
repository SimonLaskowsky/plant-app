const PlantDetails = ({ plant }) => {
  return (
    <div>
      <h1>{plant.name}</h1>
      <img src={plant.image_url} alt={plant.name} />
      {/* Inne informacje o roślinie */}
    </div>
  );
};

export default PlantDetails;
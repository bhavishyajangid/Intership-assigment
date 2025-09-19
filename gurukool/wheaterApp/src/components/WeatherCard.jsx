const WeatherCard = ({ label, value }) => {
  return (
    <div className="bg-white/15 p-3 rounded-lg text-center">
      <p className="font-semibold">{label}</p>
      <p>{value}</p>
    </div>
  );
};

export default WeatherCard;

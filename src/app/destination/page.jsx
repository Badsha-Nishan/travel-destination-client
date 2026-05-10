import DestinationCard from "../components/DestinationCard";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();

  return (
    <div className="w-11/12 mx-auto">
      <h2>All Destinations</h2>
      <div className=" grid grid-cols-3 gap-3 py-5">
        {destinations.map((destination) => (
          <DestinationCard destination={destination} key={destination._id} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;

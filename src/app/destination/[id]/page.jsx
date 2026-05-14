
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { FaRegCalendar } from "react-icons/fa6";
import BookingCard from "@/app/components/BookingCard";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  const {
    _id,
    description,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
  } = destination;
  return (
    <div className="w-11/12 mx-auto">
      <div className="border">
        <Image
          className="w-full"
          alt={destinationName}
          src={imageUrl}
          height={400}
          width={400}
        />

        <div className="p-2">
          <div className="flex justify-between items-center">
            <div className="space-y-3">
              <div className="flex items-center gap-1">
                <LuMapPin /> <span>{country}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{destinationName}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <FaRegCalendar /> {duration}
              </div>
              <p>Description: {description}</p>
            </div>

            <BookingCard destination={destination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;

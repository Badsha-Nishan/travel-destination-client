"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [departureDate, setDepartureDate] = useState(null);

  const {
    _id,
    description,
    imageUrl,
    price,
    destinationName,
    duration,
    country,
  } = destination;

  const handleBookings = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    toast.success("Your destination booked successfully!");
  };
  return (
    <div className="w-2xs border space-y-3 p-6">
      <p>Starting from</p>
      <h3 className="text-2xl font-bold text-cyan-500">$ {price}</h3>
      <p>Per person</p>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Departure Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>

      <Button
        onClick={handleBookings}
        className={"w-full rounded-none bg-cyan-500"}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingCard;

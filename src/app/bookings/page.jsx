import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { BookingCancelAlert } from "../components/BookingCancelAlert";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const user = session?.user;

  const res = await fetch(`http://localhost:5000/bookings/${user?.id}`);

  const bookings = await res.json();

  return (
    <div className="w-7xl mx-auto py-5">
      <h1 className="text-3xl text-center font-bold">My Bookings</h1>

      <div className="w-11/12 mx-auto flex flex-col py-4 gap-5">
        {bookings.map((booking) => (
          <div
            className="border p-4 rounded-md justify-between items-center flex gap-3"
            key={booking._id}
          >
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src={booking.imageUrl}
                  alt={booking.destinationName}
                  height={300}
                  width={300}
                />
              </div>

              <div>
                <h1 className="font-bold text-2xl space-y-3">
                  {booking.destinationName}
                </h1>
                <p>
                  {new Date(booking.departureDate).toDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p>Booking ID: {booking._id}</p>
                <p className="text-2xl text-cyan-500 font-bold">
                  ${booking.price}
                </p>
              </div>
            </div>
            <div>
              <BookingCancelAlert bookingId={booking._id} />
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;

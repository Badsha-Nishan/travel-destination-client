"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleLogOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="py-4 w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destination"}>Destination</Link>
        </li>
        <li>
          <Link href={"/bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/admin"}>Admin</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt="Logo"
          height={150}
          width={150}
        />
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <Avatar>
              <Avatar.Image
                referrerPolicy="no-referrer"
                alt={user?.name}
                src={user?.image}
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <li>
              <Link href={"/"}>
                <Button
                  onClick={handleLogOut}
                  variant="danger"
                  className={"rounded-none"}
                >
                  LogOut
                </Button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;

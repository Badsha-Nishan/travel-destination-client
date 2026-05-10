import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
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
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

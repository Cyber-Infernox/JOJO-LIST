import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>JOJO LIST</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/Pages/About">About</Link>
      <Link href="/Pages/Listing">Listing</Link>
    </nav>
  );
};

export default Navbar;

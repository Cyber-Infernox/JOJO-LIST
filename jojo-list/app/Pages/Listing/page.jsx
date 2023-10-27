export const metadata = {
  title: "Listing",
};

import Link from "next/link";

// Style
import "./Listing.css";

async function getNameList() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      // revalidate: 30,
      revalidate: 0,
    },
  });
  return res.json();
}

const Listing = async () => {
  const nameList = await getNameList();

  return (
    <div>
      <h2>Listing...</h2>
      {nameList.map((jojo) => (
        <Link className="single" href={`Listing/${jojo.id}`} key={jojo.id}>
          <h3>{jojo.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Listing;

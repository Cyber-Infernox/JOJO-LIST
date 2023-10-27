export const metadata = {
  title: "Listing",
};

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
        <div key={jojo.id}>
          <a className="single">
            <h3>{jojo.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Listing;

export const metadata = {
  title: "ListingID",
};

import { notFound } from "next/navigation";

// export const dynamicParams = true;

// export async function generateStaticParams() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const jojos = await res.json();

//   return jojos.map((jojo) => ({
//     id: jojo.id,
//   }));
// }

async function getNameDetails(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
    next: {
      revalidate: 60,
      //   revalidate: 0,
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

const ListingDetails = async ({ params }) => {
  const nameDetails = await getNameDetails(params.id);

  return (
    <div>
      <h1>{nameDetails.name}</h1>
      <p>{nameDetails.email}</p>
      <p>{nameDetails.website}</p>
      {/* <p>{nameDetails.address.city}</p> */}
    </div>
  );
};

export default ListingDetails;

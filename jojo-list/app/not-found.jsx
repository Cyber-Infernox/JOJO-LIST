// Style
import "./not-found.css";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>We hit a brick wall...</h2>
      <p>
        Go back to <Link href="/">home</Link>
      </p>
    </div>
  );
};

export default NotFound;

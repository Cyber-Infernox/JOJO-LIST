// Style
// import styles from "./page.module.css";
import "./page.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="title">HomePage</h1>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo
        nesciunt laboriosam placeat cum quasi, perspiciatis molestiae commodi
        natus repudiandae rerum repellat sed provident nobis. Itaque obcaecati
        aliquid, inventore sapiente perspiciatis nostrum animi accusamus ducimus
        ipsa! Rerum tenetur dolore quam quibusdam ad fugiat dolorem molestiae
        fuga laboriosam laudantium, explicabo dolorum?
      </p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo
        nesciunt laboriosam placeat cum quasi, perspiciatis molestiae commodi
        natus repudiandae rerum repellat sed provident nobis. Itaque obcaecati
        aliquid, inventore sapiente perspiciatis nostrum animi accusamus ducimus
        ipsa! Rerum tenetur dolore quam quibusdam ad fugiat dolorem molestiae
        fuga laboriosam laudantium, explicabo dolorum?
      </p>
      <Link className="btn" href="/Pages/Listing">
        Listing
      </Link>
    </div>
  );
}

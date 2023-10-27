"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// Style
import "./not-found.css";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

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

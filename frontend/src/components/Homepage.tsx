import Data from "@/typings/data";
import Link from "next/link";
import { useState, useEffect } from "react";

const Homepage = () => {
  const [homepageData, setHomepageData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses/")
      .then((res) => {
        return res.json();
      })
      .then((data: Data[]) => {
        setHomepageData(data);
      });
  }, []);

  return (
    <div className="justify-center flex text-4xl mt-8">
      <div>
        <Link href="/courses">{homepageData.length}</Link>
        <h1> courses found.</h1>
      </div>
    </div>
  );
};

export default Homepage;

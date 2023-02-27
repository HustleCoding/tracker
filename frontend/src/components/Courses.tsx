import Data from "@/typings/data";
import { useState, useEffect } from "react";

const Courses = () => {
  const [courseData, setCourseData] = useState<Data[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/courses/")
      .then((res) => {
        return res.json();
      })
      .then((data: Data[]) => {
        setCourseData(data);
      });
  }, []);

  return (
    <div className="justify-center flex text-4xl mt-8 flex-col">
      <ul>
        {courseData.map((course) => (
          <li key={course.title}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;

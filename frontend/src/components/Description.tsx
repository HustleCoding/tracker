import React, { useState, useEffect } from "react";

interface Course {
  id: number;
  name: string;
  // add other properties as needed
}

interface CourseListProps {
  numberOfCourse: number;
}

function CourseList({ numberOfCourse }: CourseListProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8000/courses/${numberOfCourse}`)
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error(error));
  }, [numberOfCourse]);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>{course.name}</li>
      ))}
    </ul>
  );
}

export default CourseList;


import { useEffect, useState } from "react";
import AddCourseForm from "./components/Input";

export function App() {
  const [courses, setCourses] = useState<{ id: string, title: string, price: number }[]>([]);

  useEffect(() => {
    async function fetchCourses() {
     try {
      const response = await fetch("http://localhost:3001/courses");
      if(!response.ok) {
        throw new Error("Failed to fetch courses");
      }
      const data = await response.json();
      setCourses(data.courses);
     } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }
  fetchCourses();

  }, []);

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h2>{course.title}</h2>
          <p>{course.price}</p>
        </div>
      ))}
      <AddCourseForm />
    </div>
  );
}

export default App;

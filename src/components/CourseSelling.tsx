import { useEffect, useState } from "react";

// const courses = [
//     { id: "c1", title: "Node.js & Express", price: 2999 },
//     { id: "c2", title: "MongoDB & Prisma", price: 3499 },
//     { id: "c3", title: "System Design", price: 4999 },
// ];


export function CourseSelling() {
  const [courses, setCourses] = useState<{ id: string, title: string, price: number }[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function fetchCourses() {
      const response = await fetch("http://localhost:3000/api/v1/courses", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setCourses(data);
    }
    fetchCourses();
  }, []);

  // fetchCourses();

  return (
      <div>
        <h2>All Courses ({courses.length})</h2>
        {courses.map((course) => (
          <div key={course.id} style={{ borderBottom: "1px solid #eee", padding: "8px 0" }}>
            <strong>{course.title}</strong>: ₹{course.price}
          </div>    
        ))}
      </div>
    );
}

export default CourseSelling;
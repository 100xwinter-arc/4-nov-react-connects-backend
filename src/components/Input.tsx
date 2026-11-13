import { useEffect, useState } from "react";

export function AddCourseForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(e: any) {
    // Stop the browser from reloading the page on form submit!
    e.preventDefault();

    const response = await fetch("http://localhost:3001/courses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, price }),
    });
    const data = await response.json();
    console.log(data);

    if (!title.trim()) return;
    // Clear inputs after submitting. This works automatically because inputs are controlled!
    setTitle("");
    setPrice("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Course title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price (₹)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Create Course</button>
    </form>
  );
}

export default AddCourseForm;
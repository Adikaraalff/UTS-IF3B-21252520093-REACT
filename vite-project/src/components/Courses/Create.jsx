import React, { useState } from "react";
import axios from "axios"; // You imported Axios, but it's not needed, only axios is necessary.

export default function CreateCourses() {
  const [namaCourses, setNamaCourses] = useState("");
  const [namaDosen, setnamaDosen] = useState(""); // Initialize as an empty string
  const [error, setError] = useState(""); // Initialize as an empty string
  const [success, setSuccess] = useState(""); // Fixed 'succes' to 'success'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (namaCourses.trim() === "") {
      setError("Nama Courses is required");
      return;
    }

    try {
      const response = await axios.post(
        "https://uts-if-3-b-21252520093-api.vercel.app/api/api/Courses",
        { nama: namaCourses } // This is how you pass the request body data
      );
      
      if (response.status === 201) {
        setSuccess("Courses Created Successfully"); // Corrected the spelling of 'Succes'
        setNamaCourses(""); // Reset input after successful creation
      } else {
        setError("Failed to create Courses");
      }
    } catch (error) {
      setError("An error occurred while creating Courses");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Create Courses</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="namaCourses" className="form-label">
            Nama Mata Kuliah
          </label>

          <input
            type="text"
            className="form-control"
            id="namaCourses"
            value={namaCourses}
            onChange={(e) => setNamaCourses(e.target.value)}
            placeholder="Masukkan Nama Courses"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="namaDosen" className="form-label">
            Nama Dosen
          </label>

          <input
            type="text"
            className="form-control"
            id="namaDosen"
            value={namaDosen}
            onChange={(e) => setnamaDosen(e.target.value)}
            placeholder="Masukkan Nama Courses"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}
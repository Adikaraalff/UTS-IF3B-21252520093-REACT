import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function List() {
  const [courses, setcoures] = useState([]);

  useEffect(() => {
    axios
      .get("https://uts-if-3-b-21252520093-api.vercel.app/api/api/Courses")
      .then((response) => {
        console.log(response.data.result);
        setcoures(response.data.result);
      })
      .catch((error) => {
        console.log("Error : ", error);
      });
  }, []);

  return (
    <>
      <h1>List Courses</h1>

      <NavLink to="/courses/create" className="btn btn-primary mb-3">
        Create
      </NavLink>

      <ul className="list-group">
        {courses.map((data) => (
          <li
            key={data.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{data.nama}</span>
            <span>{data.dosen}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
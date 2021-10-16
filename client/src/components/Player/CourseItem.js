import React from "react";
import { useParams } from "react-router-dom";

function CourseItem() {
  const { genre } = useParams();

  return <div>{genre}</div>;
}

export default CourseItem;

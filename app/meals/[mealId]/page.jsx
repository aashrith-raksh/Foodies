import React from "react";

export default function DynamicMeal({params}) {
  return (
    <>
      <h1>Dynamic Meals Page</h1>
      <p>Meal Id: {params.mealId}</p>
    </>
  );
}

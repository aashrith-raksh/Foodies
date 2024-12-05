"use client";

import { useEffect } from "react";
import { useFormStatus } from "react-dom";

const MealItemDeleteButton = () => {
  const { pending } = useFormStatus();

  useEffect(() => console.log("pending:", pending), [pending]);
  return (
    <button disabled={pending}>{pending ? "Deleting..." : "Delete"}</button>
  );
};

export default MealItemDeleteButton;

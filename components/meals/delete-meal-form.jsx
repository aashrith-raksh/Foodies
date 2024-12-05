
"use client"
import MealItemDeleteButton from "./meal-item-delete-button";

import { deleteMealAction } from "@/lib/actions";
import { useFormState } from "react-dom";

const DeleteMealForm = ({mealId}) => {
  const deleteMealActionBind = deleteMealAction.bind(null, mealId);
  const [state, formAction] = useFormState(deleteMealActionBind, {
    message: null,
  });

  if (state.message != null) {
    alert(state.message);
  }
  return (
    <form action={formAction}>
      <MealItemDeleteButton mealId={mealId} />
    </form>
  );
};

export default DeleteMealForm;

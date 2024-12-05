"use server";

import { redirect } from "next/navigation";
import { deleteMeal, saveMealToDB } from "./meals";
import { validateFormData } from "./utils";
import { revalidatePath } from "next/cache";

export async function shareMeal(prevState, formData) {

  console.log(formData)
  
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  const errors = validateFormData(formData);

  console.log(errors);
  if (Object.keys(errors).length > 0) {
    console.log("invaid inputs");
    return { errors, invalidInputs: true };
  }

  await saveMealToDB(meal);
  revalidatePath("/meals")
  redirect("/meals");
}

export async function deleteMealAction(mealId, formData) {
  await new Promise((r) => {
    setTimeout(r, 2000);
  });
  
  try {
    const res = await deleteMeal(mealId);
  
    revalidatePath("/meals");
    return {message: "Recipe deleted succesfully"}

  } catch (error) {
    return {message: error.message || "Error while deleting the recipe"}
  }
}

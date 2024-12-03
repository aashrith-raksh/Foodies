import { getMeals } from '@/app/lib/meals';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default async function MealsGrid() {
    const loadedMeals = await getMeals()
  return (
    <ul className={classes.meals}>
      {loadedMeals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
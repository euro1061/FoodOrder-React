import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/use-http";

/* const DUMMY_MEALS = [
  {
    id: "m1",
    name: "ต้มยำรวมมิตร",
    description: "ต้มยำรสเด็ด อร่อยไม่ซ้ำจำสูตรไม่ได้",
    price: 22.99,
  },
  {
    id: "m2",
    name: "ข้าวผัดหมู",
    description: "หมูก็แพงไม่แรงได้ไง",
    price: 16.5,
  },
  {
    id: "m3",
    name: "ข้าวมันไก่",
    description: "ตอนนั้นเคี้ยวอยู่บ้าน เอ๊า! ตอนนี้นอนโรงบาลเฉย",
    price: 12.99,
  },
  {
    id: "m4",
    name: "ปลาสลิดทอดน้ำมัน",
    description: "อร่อยเกินคาด อัมพาตครึ่งตัว",
    price: 18.99,
  },
]; */

const AvalibleMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();
  useEffect(() => {
    const transformMeals = (mealObj) => {
      const loadedMeals = [];
      for (const mealKey in mealObj) {
        loadedMeals.push({
          id: mealKey,
          name: mealObj[mealKey].name,
          price: mealObj[mealKey].price,
          description: mealObj[mealKey].description,
        });
      }
      setMeals(loadedMeals);
    };

    fetchMeals(
      {
        url: "https://react-http-cfe16-default-rtdb.firebaseio.com/meals.json",
      },
      transformMeals
    );
  }, [fetchMeals]);
  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={classes.meals}>
      {!isLoading && !error && (
        <Card>
          <ul>{mealList}</ul>
        </Card>
      )}
      {isLoading && <p className={classes.loading}>Loading...</p>}
      {error && !isLoading && <p className={classes.loading}>Error : {error}</p>}
    </section>
  );
};

export default AvalibleMeals;

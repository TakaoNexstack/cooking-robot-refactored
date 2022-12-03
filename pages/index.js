import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [displayList, setDisplayList] = useState([]);
  const [cookableList, setCookableList] = useState([]);
  const [location, setLocation] = useState(null);
  const [needGroceries, setNeedGroceries] = useState(false);

  const title = "The Cooking Robot";

  const handleReset = () => {
    setCookableList([]);
    setDisplayList([]);
    setLocation(null);
    setNeedGroceries(false);
  };

  useEffect(() => {
    cookableList.length > 0 && setNeedGroceries(true);
  }, [cookableList]);

  const handleFridge = async () => {
    setLocation("fridge");
    const { data } = await axios.get("/api/fridge");
    const items = await data.fridge;
    setDisplayList(items);
  };

  const handlePantry = async () => {
    setLocation("pantry");
    const { data } = await axios.get("/api/pantry");
    const items = await data.pantry;
    setDisplayList(items);
  };

  const handleCook = async () => {
    const {
      data: { fridge },
    } = await axios.get("/api/fridge");
    const {
      data: { pantry },
    } = await axios.get("/api/pantry");
    const {
      data: { recipes },
    } = await axios.get("/api/recipes");

    setCookableList(
      recipes.filter((recipe) =>
        Object.keys(recipe.ingredients).every(
          (ingredient) =>
            !!fridge.filter(
              (item) =>
                item.name === ingredient &&
                item.qty >= recipe.ingredients[ingredient]
            ).length ||
            !!pantry.filter(
              (item) =>
                item.name === ingredient &&
                item.qty >= recipe.ingredients[ingredient]
            ).length
        )
      )
    );
  };

  return (
    <div>
      <h1 className="text-center">{title}</h1>
      <div className="buttonContainer">
        <button onClick={handleFridge}>{"What's in the fridge?"}</button>
        <button onClick={handlePantry}>{"What's in the pantry?"}</button>
        <button onClick={handleCook}>{"What can I cook?"}</button>
        <button onClick={handleReset}>{"Reset"}</button>
      </div>

      <br />

      {location !== null && (
        <p className="text-center">{`The following items are in the ${location}: `}</p>
      )}
      <ul className="itemList">
        {displayList.length
          ? displayList?.map((item) => (
              <li className="itemListItem" key={item.id}>
                <span>{item.name}</span>
                <span>{"(" + item.qty + ")"}</span>
              </li>
            ))
          : "No data"}
      </ul>

      <p className="text-center">You can cook: </p>
      <ul className="itemList cookList">
        {cookableList.length
          ? cookableList?.map((item) => (
              <li className="itemListItem" key={item.id}>
                <span>{item.name}</span>
              </li>
            ))
          : "No data"}
      </ul>

      {needGroceries && (
        <>
          <h4 className="text-center">Need to go for grocery shopping?</h4>
          <div className="text-center buttonContainer shoppingButtons">
            <button>Yes</button>
            <button>No</button>
          </div>
        </>
      )}
    </div>
  );
}

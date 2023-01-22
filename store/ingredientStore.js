import axios from "axios";
import { create } from "zustand";

const storeState = {
  location: "",
  fridge: [],
  pantry: [],
  recipes: [],
  displayList: [],
  cookableList: [],
  needGroceries: false,
};

const ingredientStore = (set, get) => ({
  ...storeState,
  resetStates: () => set(storeState),
  fetchData: async (dataName) => {
    const { data } = await axios.get(`/api/${dataName}`);
    return data[dataName];
  },
  findCookableRecipes: async () => {
    const { fetchData } = get();

    const fridgeData = await fetchData("fridge");
    const pantryData = await fetchData("pantry");
    const recipesData = await fetchData("recipes");

    set({ fridge: fridgeData, pantry: pantryData, recipes: recipesData });

    const { fridge, pantry, recipes } = get();

    const cookableRecipes = recipes.filter((recipe) =>
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
    );
    set({ cookableList: cookableRecipes });
  },
  updateDisplayList: async (destination) => {
    const { fetchData } = get();
    const items = await fetchData(destination);
    set({ location: destination, displayList: items });
  },
  setNeedGroceries: (bool) => set({ needGroceries: bool }),
});

const useIngredientStore = create(ingredientStore);
export default useIngredientStore;

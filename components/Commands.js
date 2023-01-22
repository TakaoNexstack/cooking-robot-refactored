import useIngredientStore from "../store/ingredientStore";

const Commands = () => {
  const { findCookableRecipes, updateDisplayList, resetStates } =
    useIngredientStore((state) => ({
      findCookableRecipes: state.findCookableRecipes,
      updateDisplayList: state.updateDisplayList,
      resetStates: state.resetStates,
    }));

  return (
    <div className="buttonContainer">
      <button onClick={() => updateDisplayList("fridge")}>
        {"What's in the fridge?"}
      </button>
      <button onClick={() => updateDisplayList("pantry")}>
        {"What's in the pantry?"}
      </button>
      <button onClick={findCookableRecipes}>{"What can I cook?"}</button>
      <button onClick={resetStates}>{"Reset"}</button>
    </div>
  );
};

export default Commands;

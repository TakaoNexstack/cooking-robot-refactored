import useIngredientStore from "../store/ingredientStore";
import Header from "./_common/Header";

const ShopPrompt = () => {
  const { needGroceries } = useIngredientStore((state) => ({
    needGroceries: state.needGroceries,
  }));
  return (
    <div>
      {needGroceries ? (
        <>
          <Header>Need to go for grocery shopping?</Header>
          <div className="text-center buttonContainer shoppingButtons">
            <button>Yes</button>
            <button>No</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ShopPrompt;

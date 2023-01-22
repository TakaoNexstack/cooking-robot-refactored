import { useEffect } from "react";
import useIngredientStore from "../store/ingredientStore";
import Header from "./_common/Header";
import List from "./_common/List";

const CookableList = () => {
  const { cookableList, setNeedGroceries } = useIngredientStore((state) => ({
    cookableList: state.cookableList,
    setNeedGroceries: state.setNeedGroceries,
  }));

  const cookableListColumns = [
    {
      dataField: "name",
    },
  ];

  useEffect(() => {
    cookableList.length > 0 ? setNeedGroceries(true) : setNeedGroceries(false);
  }, [cookableList, setNeedGroceries]);

  return (
    <>
      <Header>You can cook: </Header>
      <List
        className="itemList cookList"
        data={cookableList}
        columns={cookableListColumns}
      />
    </>
  );
};

export default CookableList;

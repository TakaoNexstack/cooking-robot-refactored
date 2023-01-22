import useIngredientStore from "../store/ingredientStore";
import Header from "./_common/Header";
import List from "./_common/List";

const CookableList = () => {
  const { cookableList } = useIngredientStore((state) => ({
    cookableList: state.cookableList,
  }));

  const cookableListColumns = [
    {
      dataField: "name",
    },
  ];

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

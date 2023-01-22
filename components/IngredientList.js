import useIngredientStore from "../store/ingredientStore";
import Header from "./_common/Header";
import List from "./_common/List";

const IngredientList = () => {
  const { displayList, location } = useIngredientStore((state) => ({
    displayList: state.displayList,
    location: state.location,
  }));

  const displayListColumns = [
    {
      dataField: "name",
    },
    {
      dataField: "qty",
      formatter: (data) => `(${data})`,
    },
  ];

  return (
    <>
      {location !== null ? (
        <Header>{`The following items are in the ${location}: `}</Header>
      ) : null}
      <List
        className="itemList"
        data={displayList}
        columns={displayListColumns}
      />
    </>
  );
};

export default IngredientList;

import Commands from "../components/Commands";
import CookableList from "../components/CookableList";
import IngredientList from "../components/IngredientList";
import PageHeader from "../components/PageHeader";
import ShopPrompt from "../components/ShopPrompt";

export default function Home() {
  return (
    <>
      <PageHeader>The Cooking Robot</PageHeader>
      <Commands />
      <IngredientList />
      <CookableList />
      <ShopPrompt />
    </>
  );
}

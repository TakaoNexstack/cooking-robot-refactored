import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [displayList, setDisplayList] = useState([]);

  const getFridgeData = async () => {
    const { data } = await axios.get("/api/fridge");
    const items = await data.fridge;
    setDisplayList(items);
  };

  const getPantryData = async () => {
    const { data } = await axios.get("/api/pantry");
    const items = await data.pantry;
    setDisplayList(items);
  };

  return (
    <div>
      <div className="buttonContainer">
        <button onClick={() => getFridgeData()}>
          {"What's in the fridge?"}
        </button>
        <button onClick={() => getPantryData()}>
          {"What's in the pantry?"}
        </button>
      </div>

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
    </div>
  );
}

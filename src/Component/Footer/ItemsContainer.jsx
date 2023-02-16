import Item from "./Item";
import { DIVERS } from "./Menus";
import { RESOURCES } from "./Menus";
import { iVie } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={iVie} title="Logo" />
      <Item Links={DIVERS} title="DIVERS" />
    </div>
  );
};

export default ItemsContainer;

//este componente solo muestra datos que le pasen por props, no sabe de donde vienen los datos y ni le interesa

import Item from "./Item";
import style from "../assets/css/itemlist.module.css";

const ItemList = ({ products }) => {
  return (
    <div>
      <div className={style.itemscontainer}>
        {products.map((p) => (
          <Item key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

//este componente solo muestra datos que le pasen por props, no sabe de donde vienen los datos y ni le interesa

import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((p) => (
        <Item key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ItemList;

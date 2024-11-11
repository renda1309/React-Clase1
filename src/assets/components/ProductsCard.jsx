import Products from "/src/assets/components/Products.js";

export const ProductsCard = () => {
  return (
    <div>
      <h1>Productos</h1>
      {Products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          <p>{product.description}</p>
          <span>{product.price}</span>
        </div>
      ))}
    </div>
  );
};

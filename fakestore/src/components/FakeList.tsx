import Image from "next/image";

const FakeList = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products/1");
    const product = await response.json();
    console.log(product);
    return (
      <div>
        {product && (
          <div>
            <div>Id - {product.id}</div>
            <div>Title - {product.title}</div>
            <div>Category - {product.category}</div>
            <div> Description - {product.description}</div>
            <Image
              alt="product image"
              src={product.image}
              width={100}
              height={100}
            />
            <div>Price - {product.price}</div>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.log(error);
  }
};

export default FakeList;

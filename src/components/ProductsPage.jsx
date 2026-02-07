function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "Cookies",
      price: "    KES 50",
      description:
        "Freshly baked chocolate chip, oatmeal raisin, and sugar cookies..",
      image: "/cookie.jpg",
    },
    {
      id: 2,
      name: "Cakes",
      price: "KES 1500",
      description: "Custom birthday cakes, wedding cakes, and cupcakes.",
      image: "/cake.jpg",
    },
    {
      id: 3,
      name: "Cinnamon Roll",
      price: "KES 300",
      description: "Warm, gooey cinnamon rolls with cream cheese frosting",
      image: "/cinnamon.jpg",
    },
    {
      id: 4,
      name: "Doughnut",
      price: "KES 100",
      description: "All flavors you need",
      image: "/doughnut.jpg",
    },
  ];

  return (
    <div className="container text-center mt-5">
      <h1 className="text-center mb-4">Our Products</h1>
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card h-100 shadow-sm">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                width={350}
                height={350}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold text-primary">{product.price}</p>
                <button className="btn btn-dark w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;

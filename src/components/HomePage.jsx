function HomePage() {
  return (
    <div className="container w-75 text-center mt-5">
      <div className="text-center mb-5">
        <h1 className="display-3 fw-bold mb-3">Welcome to DukaLetu Bakery</h1>
        <p className="lead fs-3 mb-4">
          Have a sweet tooth? Don't worry, we got you covered. Freshly baked
          goods made with love every single day!
        </p>
      </div>

      <h3 className="mb-3 text-center">Our Menu</h3>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./cake.jpg"
              className="d-block w-100"
              width={400}
              height={350}
              alt="cake"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./cookie.jpg"
              className="d-block w-100"
              width={400}
              height={350}
              alt="cookie"
            />
          </div>
          <div className="carousel-item">
            <img
              src="./cinnamon.jpg"
              className="d-block w-100"
              width={400}
              height={350}
              alt="cinnamon-rolls"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-center">Cookies</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-center">Cakes</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-center">Cinnamon rolls</div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm text-center">Doughnuts</div>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;

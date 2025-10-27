import "./banner.css";

function Banner() {
  return (
    <section className="banner-section">
      {/* Left Big Banner */}
      <div className="banner-left">
        <div className="banner-text">
          <h1>Fresh Smoothie & Summer Juice</h1>
          <p>
            Discover our range of refreshing smoothies and juices made from the
            freshest ingredients.
          </p>
          <button>Shop Now</button>
        </div>
        <div className="banner-image">
          <img
            src="https://food-mart-template.vercel.app/images/product-thumb-1.png"
            alt="Smoothie"
          />
        </div>
      </div>

      {/* Right Small Banners */}
      <div className="banner-right">
        <div className="banner-card">
          <div className="banner-text">
            <h1>Fresh Vegetables</h1>
            <p>Up to 25% Off</p>
          </div>
          <div className="banner-image">
            <img
              src="https://nationaltoday.com/wp-content/uploads/2022/05/Fresh-Veggies-1200x834.jpg"
              alt="Vegetables"
            />
          </div>
        </div>

        <div className="banner-card">
          <div className="banner-text">
            <h1>Baked Items</h1>
            <p>Delicious & Fresh</p>
          </div>
          <div className="banner-image">
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2024/06/potato-bread-roll-recipe-500x500.jpg"
              alt="Baked Items"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner

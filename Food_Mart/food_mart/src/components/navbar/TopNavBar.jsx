import "./Top.css";

function TopNavBar() {
  return (
    <div className="top-nav">
      
      <div className="top-nav-top">
        <div>
          <h1>
            <span>FOOD</span>
            <span style={{ color: "#FFC43F" }}>MART</span>
          </h1>
        </div>

        <div className="support">
          <p>For Support?</p>
          <p>+980-34984089</p>
        </div>

        <div className="cart">
          <p>Your Cart</p>
          <p>$1290.00</p>
        </div>
      </div>

      <nav>
        <div>
          <ul>
            <li>Shop by Departments</li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
            <li>Accessories</li>
            <li>Pages</li>
            <li>Brand</li>
            <li>Sale</li>
            <li>Blog</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default TopNavBar;

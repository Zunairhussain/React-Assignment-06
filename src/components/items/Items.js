import img1 from "../pics/Arrow Left.png"
import img2 from "../pics/Rectangle 336.png"
import img3 from "../pics/Rectangle 337.png"
import img4 from "../pics/Rectangle 338.png"
import img5 from "../pics/Rectangle 339.png"
import img6 from "../pics/Rectangle 340.png"
import img7 from "../pics/Arrow Right.png"







function Items(params) {
    return(
        <>
  <p style={{ fontSize: 50, fontWeight: "bold", textAlign: "center" }}>
    Popular items
  </p>
  <div className="container-flot">
    <div className="row">
      <div className="col-lg-1 col-md-1 col-sm-6">
        <img
          src={img1}
          alt="images not found"
          style={{ width: 80, paddingTop: 60 }}
        />
      </div>
      <div className="col-lg-2 col-md-1 col-sm-6">
        <img
          src={img2}
          alt="images not found"
          style={{ width: 200 }}
        />
        <p>Cheese Burger</p>
        <b style={{ color: "orange" }}>Burger Arena</b>
        <br />
        <b>$3.88</b>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          style={{ backgroundColor: "rgb(235, 112, 18)" }}
        >
          Order Now
        </button>
      </div>
      <div className="col-lg-2 col-md-1 col-sm-6">
        <img
          src={img3}
          alt="images not found"
          style={{ width: 200 }}
        />
        <p>Toffe’s Cake</p>
        <b style={{ color: "orange" }}>Top Sticks</b>
        <br />
        <b>$4.00</b>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          style={{ backgroundColor: "rgb(235, 112, 18)" }}
        >
          Order Now
        </button>
      </div>
      <div className="col-lg-2 col-md-1 col-sm-6">
        <img
          src={img4}
          alt="images not found"
          style={{ width: 200 }}
        />
        <p>Dancake</p>
        <b style={{ color: "orange" }}>Cake World</b>
        <br />
        <b>$1.99</b>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          style={{ backgroundColor: "rgb(235, 112, 18)" }}
        >
          Order Now
        </button>
      </div>
      <div className="col-lg-2 col-md-1 col-sm-6">
        <img
          src={img5}
          alt="images not found"
          style={{ width: 200 }}
        />
        <p>Crispy Sandwitch</p>
        <b style={{ color: "orange" }}>Fastfood Dine</b>
        <br />
        <b>$3.00</b>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          style={{ backgroundColor: "rgb(235, 112, 18)" }}
        >
          Order Now
        </button>
      </div>
      <div className="col-lg-2 col-md-1 col-sm-6">
        <img
          src={img6}
          alt="images not found"
          style={{ width: 200 }}
        />
        <p>Thai Soup</p>
        <b style={{ color: "orange" }}>Foody man</b>
        <br />
        <b>$2.79</b>
        <br />
        <button
          type="button"
          className="btn btn-warning"
          style={{ backgroundColor: "rgb(235, 112, 18)" }}
        >
          Order Now
        </button>
      </div>
      <div className="col-lg-1 col-md-1 col-sm-6">
        <img
          src={img7}
          alt="images not found"
          style={{ width: 90, paddingTop: 60 }}
        />
      </div>
    </div>
  </div>
</>

    )
}
export default Items;
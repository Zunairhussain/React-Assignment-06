import img1 from "../pics/crispy sandwiches.png"
import img2 from "../pics/celebrate.png"


function Best() {
    return(
        <div className="container" style={{ marginTop: 60 }}>
  <div className="row" style={{ border: "1px solid black" }}>
    <div className="col-lg-4 col-sm-12">
      <h1 style={{ fontSize: 50, fontWeight: "bold", marginTop: 40 }}>
        Best deals Crispy Sandwiches
      </h1>
      <p style={{ fontSize: "larger" }}>
        Enjoy the large size of sandwiches. Complete perfect slice of
        sandwiches.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        style={{
          width: "70%",
          backgroundColor: "orange",
          fontSize: "x-large",
          marginTop: 30
        }}
      >
        Proceed to order
      </button>
    </div>
    <div className="col-lg-8 col-sm-12">
      <img
        src={img1}
        alt="images not found"
        style={{ width: "101%" }}
      />
    </div>
  </div>
  <div className="row" style={{ border: "1px solid black", marginTop: 50 }}>
    <div className="col-lg-8 col-sm-12">
      <img
        src={img2}
        alt="images not found"
        style={{ width: "101%" }}
      />
    </div>
    <div className="col-lg-4 col-sm-12">
      <h1 style={{ fontSize: 50, fontWeight: "bold", marginTop: 40 }}>
        Celebrate parties with Fried Chicken
      </h1>
      <p style={{ fontSize: "larger" }}>
        Get the best fried chicken smeared with a lip smacking lemon chili
        flavor. Check out best deals for fried chicken.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        style={{
          width: "70%",
          backgroundColor: "orange",
          fontSize: "x-large",
          marginTop: 30
        }}
      >
        Proceed to order
      </button>
    </div>
  </div>
</div>

    )
}
export default Best;
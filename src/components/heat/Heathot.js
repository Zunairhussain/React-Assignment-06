import img1 from "../pics/spicy pizza.png"
import img2 from "../pics/last.png"


function Heat() {
    return(
        <>
  <div className="row" style={{ marginTop: 50, border: "1px solid black" }}>
    <div className="col-lg-4 col-sm-12">
      <h1 style={{ fontSize: 50, fontWeight: "bold", marginTop: 60 }}>
        Wanna eat hot &amp; spicy Pizza?
      </h1>
      <p style={{ fontSize: "larger" }}>
        Pair up with a friend and enjoy the hot and crispy pizza pops. Try it
        with the best deals.
      </p>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        style={{
          width: "70%",
          backgroundColor: "orange",
          fontSize: "x-large",
          marginTop: 50
        }}
      >
        Proceed to order
      </button>
    </div>
    <div className="col-lg-8 col-sm-12">
      <img
        src={img1}
        alt="images not found"
        style={{ width: "101%", height: "100%" }}
      />
    </div>
  </div>
  <div>
    <img
      src={img2}
      salt="images not found"
      style={{ marginTop: 60, width: "100%" }}
    />
  </div>
  <div className="container" style={{ marginLeft: 100,  }}>
    <div className="row">
      <div className="col">
        <h2>
          {" "}
          <b> Our top cities</b>
        </h2>{" "}
        <p />
      </div>
    </div>
  </div>
</>

    )
}
export default Heat;
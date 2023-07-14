import img1 from "../pics/Logo.png"
import img2 from "../pics/map-marker-alt (1).png"
import img3 from "../pics/Search.png"
import img4 from "../pics/Icon.png"
import img5 from "../pics/lock.png"
import img6 from "../pics/Image Base.png"



function Navbar() {
    return(
        <div className="container-flot" sm={12} lg={12}>
  <div className="row" style={{ marginTop: 10 }}>
    <div className="col-lg-3 col-sm-12">
      <img
        src={img1}
        alt="images not found"
        style={{ width: 200 }}
      />
    </div>
    <div className="col-lg-1 col-sm-12">
      <b>Deliver to:</b>
    </div>
    <div className="col-lg-1 col-sm-12">
      <img
        src={img2}
        alt="images not found"
        style={{ width: 15 }}
      />
    </div>
    <div className="col-lg-4 col-sm-12">
      <p>
        Current Location <b>Mohammadpur Bus Stand,Dhaka</b>
      </p>
    </div>
    <div className="col-lg-1 col-sm-12">
      <img
        src={img3}
        alt="images not found"
        style={{ width: 30 }}
      />
    </div>
    <div className="col-lg-1 col-sm-12">
      <p>
        <b>SearchFood</b>
      </p>
    </div>
    <div className="col-lg-1 col-sm-12">
      <button
        type="button"
        className="btn btn-outline-warning"
        style={{ height: 30 }}
      >
        <b>Login</b>
      </button>
    </div>
  </div>
  <div
    className=" container-flot"
    style={{ backgroundColor: "rgb(238, 194, 49)", paddingTop: 20 }}
  >
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bolder",
            paddingTop: 80,
            color: "aliceblue",
            paddingLeft: 50
          }}
        >
          Are you starving?
        </h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <p style={{ fontSize: "larger", paddingLeft: 50 }}>
          Within a few clicks, find meals that are accessible near you
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-12 col-sm-12" style={{ paddingLeft: 60 }}>
        <form
          action=""
          style={{
            backgroundColor: "aliceblue",
            marginBottom: 90,
            borderRadius: 7
          }}
        >
          <button
            type="button"
            className="btn btn-outline-warning"
            style={{ height: 40 }}
          >
            <img
              src={img4}
              alt="images not found"
              style={{ height: 20 }}
            />{" "}
            <b>Deleviry</b>
          </button>
          <button
            type="button"
            className="btn btn-outline-warning"
            style={{ height: 40 }}
          >
            <img src={img5} alt="" style={{ height: 20 }} />
            <b> Pick up</b>
          </button>
          <br />
          <input
            type="text"
            placeholder="Enter your Adress"
            style={{ width: 350, borderRadius: 8, paddingLeft: 20 }}
          />
          <button
            type="button"
            className="btn btn-danger"
            style={{ paddingLeft: 30, backgroundColor: "orangered" }}
          >
            Find Food
          </button>
        </form>
      </div>
      <div className="col-lg-6 col-sm-12">
        <img
          src={img6}
          alt="IMAGES NOT found"
          style={{ width: 400 }}
        />
      </div>
    </div>
  </div>
</div>

    )
}
export default Navbar;
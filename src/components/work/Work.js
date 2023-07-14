import img1 from "../pics/Vector.png"
import img2 from "../pics/Vector 2.png"
import img3 from "../pics/Vector 3.png"
import img4 from "../pics/Vector 4.png"



function Work() {
    return(
        <>
  <div style={{ textAlign: "center", color: "orangered" }}>
    <h2> How does it work</h2>
  </div>
  <div style={{ backgroundColor: "mistyrose" }}>
    <div className="container">
      <div className="row">
        <div className="col 3">
          <img src={img1} alt="imges not found" width="75px" />
          <h4>Select Location</h4>{" "}
          <p>Choose the location where your food will be delivered.</p>
        </div>
        <div className="col 3">
          <img
            src={img2}
            alt="images not found"
            style={{ backgroundColor: "orange" }}
            width="86px"
          />
          <h4>Choose order</h4>
          <p>Check over hundreds of menus to pick your favorite food</p>{" "}
        </div>
        <div className="col 3">
          <img
            src={img3}
            alt="images not found"
            style={{ backgroundColor: "orange" }}
            width="62px"
          />
          <h4>Pay advance</h4>
          <p>
            It's quick, safe, and simple. Select several methods of payment
          </p>{" "}
        </div>
        <div className="col 3">
          <img
            src={img4}
            alt="Images not found"
            style={{ backgroundColor: "orange" }}
            width="86px"
          />
          <h4>Enjoy meals</h4>
          <p>Food is made and delivered directly to your home.</p>
        </div>
      </div>
    </div>
  </div>
</>

    )
}
export default Work;
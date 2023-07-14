import img1 from "../pics/pizza.png"
import img2 from "../pics/burger.png"
import img3 from "../pics/noodles.png"
import img4 from "../pics/sub -sandwiches.png"
import img5 from "../pics/chowmen.png"
import img6 from "../pics/steak.png"
import img7 from "../pics/times.jpeg"


function Search() {
    return(
        <>
  <div className="container" style={{ backgroundColor: "#FEFAF1" }}>
    <div className="row">
      <div className="coi-lg-10 col-sm-9">
        <p style={{ fontSize: "xx-large", fontWeight: "bold" }}>
          Search by Food
        </p>{" "}
      </div>
    </div>
    <div className="row" style={{ marginTop: 40 }}>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img1}
          alt="images not found"
          style={{ borderRadius: "40%" }}
        />
      </div>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img2}
          alt="images not found"
          style={{ borderRadius: "40%" }}
        />
      </div>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img3}
          alt="images not found"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img4}
          alt="images not found"
          style={{ borderRadius: "40%" }}
        />
      </div>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img5}
          alt="images not found"
          style={{ borderRadius: "40%" }}
        />
      </div>
      <div className="col-lg-2 col-sm-6">
        <img
          src={img6}
          alt="images not found"
          style={{ borderRadius: "40%" }}
        />
      </div>
    </div>
    <div className="row" style={{ marginBottom: 50 }}>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Pizza</b>
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Burger</b>
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Noodles</b>
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Sub-sandiwch</b>
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Chowmein</b>
        </p>
      </div>
      <div className="col-lg-2 col-sm-6">
        <p>
          <b>Steak</b>
        </p>
      </div>
    </div>
  </div>
  <div style={{ textAlign: "center" }}>
    <img src={img7} alt="images not founds" width="90% " />
  </div>
</>
    )
}
export default Search;
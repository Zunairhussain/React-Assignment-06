import img1 from "../pics/Image 1.png"
import img2 from "../pics/Image 2.png"
import img3 from "../pics/Image 3.png"
import img4 from "../pics/Image 4.png"



function Main() {
    return(
        <div className="container" style={{ paddingTop: 50 }}>
  <div className="row">
    <div className="col-lg-3 col-sm-6">
      <img src={img1} alt="" style={{ width: 300 }} />
    </div>
    <div className="col-lg-3 col-sm-6">
      <img src={img2} alt="" style={{ width: 300 }} />
    </div>
    <div className="col-lg-3 col-sm-6">
      <img src={img3} alt="" style={{ width: 300 }} />
    </div>
    <div className="col-lg-3 col-sm-6">
      <img src={img4} alt="" style={{ width: 300 }} />
    </div>
  </div>
  <div className="row">
    <div className="col-lg-3 col-sm-6" style={{ marginTop: 10 }}>
      <b>Greys Vage</b>
    </div>
    <div className="col-lg-3 col-sm-6" style={{ marginTop: 10 }}>
      <b>Greys Vage</b>
    </div>
    <div className="col-lg-3 col-sm-6" style={{ marginTop: 10 }}>
      <b>Greys Vage</b>
    </div>
    <div className="col-lg-3 col-sm-6" style={{ marginTop: 10 }}>
      <b>Greys Vage</b>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-2 col-sm-6" style={{ marginTop: 10 }}>
      <p
        style={{
          color: "orangered",
          backgroundColor: "lightpink",
          borderRadius: 4
        }}
      >
        6 days remaining
      </p>
    </div>
    <div className="col-lg-1 " />
    <div className="col-lg-2 col-sm-6" style={{ marginTop: 10 }}>
      <p
        style={{
          color: "orangered",
          backgroundColor: "lightpink",
          borderRadius: 4
        }}
      >
        6 days remaining
      </p>
    </div>
    <div className="col-lg-1 " />
    <div className="col-lg-2 col-sm-6" style={{ marginTop: 10 }}>
      <p
        style={{
          color: "orangered",
          backgroundColor: "lightpink",
          borderRadius: 4
        }}
      >
        7 days remaining
      </p>
    </div>
    <div className="col-lg-1 " />
    <div className="col-lg-2 col-sm-6" style={{ marginTop: 10 }}>
      <p
        style={{
          color: "orangered",
          backgroundColor: "lightpink",
          borderRadius: 4
        }}
      >
        8 days remaining
      </p>
    </div>
    <div className="col-lg-1 " />
  </div>
</div>

    )
}
export default Main;
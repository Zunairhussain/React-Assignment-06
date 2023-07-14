import img1 from "../pics/instagram.png"
import img2 from "../pics/Facebook.png"
import img3 from "../pics/twitter.png"

function Footer() {
    return(
        <div style={{ backgroundColor: "black", color: "white" }}>
  <div className="container">
    <div className="row">
      <div className="col"> San francisco</div>
      <div className="col"> los Angles</div>
      <div className="col"> New York city</div>
      <div className="col"> Chicago</div>
      <div className="col"> Columbus </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col"> Miami</div>
      <div className="col"> Washngton DC</div>
      <div className="col"> Orange Country</div>
      <div className="col"> Phonix</div>
      <div className="col"> New Mexico </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col"> San Diego</div>
      <div className="col"> Seattle</div>
      <div className="col"> Atlanta</div>
      <div className="col"> LAS Vegas</div>
      <div className="col"> Albuquerque </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col"> East Bey</div>
      <div className="col"> Portland</div>
      <div className="col"> Charlotte</div>
      <div className="col"> Sacramento</div>
      <div className="col"> Sacramento </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col"> Long Beach</div>
      <div className="col"> Nashville</div>
      <div className="col"> Danver</div>
      <div className="col"> Oklahoma City</div>
      <div className="col"> New orleans </div>
    </div>
  </div>
  <div style={{ color: "gainsboro" }}>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col 2"> company</div>
      <div className="col 2"> Contact</div>
      <div className="col 2"> Legal</div>
      <div className="col 6"> Fellow us</div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col 2"> About us</div>
      <div className="col 2"> Help &amp; Support</div>
      <div className="col 2"> Terms &amp; Conditions</div>
      <div className="col 6">
        {" "}
        <img src={img1} alt="images not found" />
        <img src={img2} alt="images not found" />{" "}
        <img src={img3} alt="images not found" />
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col 2"> Careers</div>
      <div className="col 2"> Ride with us</div>
      <div className="col 2"> Privacy policy</div>
      <div className="col 6"> Receive exclusive offers in your mailbox</div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col 2"> Blogs</div>
      <div className="col 2"> </div>
      <div className="col 2"> Cookies policy</div>
      <div className="col 6">
        {" "}
        <input
          type="text"
          placeholder="Enter your Adress"
          style={{ width: 170, borderRadius: 5, paddingLeft: 10 }}
        />
        <button
          type="button"
          className="btn btn-danger"
          style={{ paddingLeft: 30, backgroundColor: "orangered" }}
        >
          Find Food
        </button>
      </div>
    </div>
  </div>
  <div style={{ color: "gainsboro" }}>
    <hr />
  </div>
  <div className="container">
    <div className="row">
      <div className="col 6 ">All Right Reserved © your Company , 2023</div>
      <div className="col 6"> Made with  by Muhammad Zunair Hussain</div>
    </div>
  </div>
</div>

    )
}
export default Footer;
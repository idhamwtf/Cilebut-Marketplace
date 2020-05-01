import React from "react";


export default function Login() {
  return (
    <div className="container-login">
      <div className="container-img-login">
        <img src="https://i1.wp.com/shopee.co.id/inspirasi-shopee/wp-content/uploads/2019/12/Didi-Kempot-x-Bruno.png?resize=696%2C657&ssl=1" height="630px" width="650px" />
      </div>
      <div className="container-box-login">
        <div className="container-box-login-layer2">

          <div className="box-login-1">
            <div style={{ fontSize: "20px", marginRight: "auto" }}>Login</div>
            <div className="daftar-login">
              <span style={{ fontSize: "14px", color: "#c7cbd7" }}>Baru di Shopee?</span> &nbsp;
              <a style={{ fontSize: "14px", color: "#ee4d2d", fontWeight: "bold" }}>Daftar</a>
            </div>
          </div>

          <div className="box-login-2">
            <form>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Username or Email" />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder="Password" />
              </div>
              {/* <button type="submit" className='button-login'>
                Submit
              </button> */}
              <button type="submit" className="btn" style={{fontSize:'14px',backgroundColor:'#ee4d2d', color:'white',width:'440px',height:'40px'}} disabled>LOGIN</button>
            </form>
          </div>

              <div className="box-login-3">
                <a style={{marginRight:'200px'}}>Hilang Ingatan?</a>
                <a>Long in dengan MMS </a>
              </div>

        </div>
      </div>
    </div>
  );
}

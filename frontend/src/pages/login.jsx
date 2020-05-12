import React, { useEffect, useState } from "react";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FacebookIcon from "@material-ui/icons/Facebook";
import './../css/login.css'

export default function Login() {
  const [visibility, setvisibility] = useState(false);
  console.log("visibility", visibility);
  return (
    <div className="container-login">
      <div className="container-img-login">
        <img src="https://i1.wp.com/shopee.co.id/inspirasi-shopee/wp-content/uploads/2019/12/Didi-Kempot-x-Bruno.png?resize=696%2C657&ssl=1"  />
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
              <div className="form-group" style={{ marginBottom: "30px" }}>
                <input type="email" className="form-control" placeholder="Username or Email" />
              </div>
              <div className="form-group" style={{ marginBottom: "40px" }}>
                {visibility ? <input type="text" className="form-control" placeholder="Password" /> : <input type="password" className="form-control" placeholder="Password" />}
                {visibility ? (
                  <VisibilityIcon className="mata-mata" onClick={() => setvisibility(!visibility)} />
                ) : (
                    <VisibilityOffIcon className="mata-mata" onClick={() => setvisibility(!visibility)} />
                  )}
              </div>
              <button type="submit" className="btn login-btn" style={{ fontSize: "14px", backgroundColor: "#ee4d2d", color: "white" }} disabled>
                LOGIN
              </button>
            </form>
          </div>

          <div className="box-login-3">
            <a className='box-login-3-a'>Hilang Ingatan?</a>
            <a>Long in dengan MMS </a>
          </div>

          <div className="box-login-4">
            <div className="cuma-garis" />
            <span>ATAU</span>
            <div className="cuma-garis" />
          </div>

          <div className="box-login-5">
            <button type="button" className="btn">
              <div className='logo-fb'>
                <FacebookIcon />
              </div>
              <div className='logo-fb-b' style={{ width: "165px" }}>Facebook</div>
            </button>
            <button type="button" className="btn">
              <div>
                <img src="https://news-cdn.softpedia.com/images/news2/google-unveils-new-logo-in-an-emotional-video-490639-3.jpg" className='logo-google' />
              </div>
              <div className='logo-fb-b' style={{ width: "165px" }}>Google</div>
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

import "./Landing.css";
import SignupForm from "./SignupForm";
import SignUpDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import SignUpMobile from "../assets/images/illustration-sign-up-mobile.svg";
import IconList from "../assets/images/icon-list.svg";

function Landing({ setSuccess }) {
  return (
    <>
      <section className="content-wrapper">
        <div className="image">
          <picture>
            <source media="(min-width: 950px)" srcSet={SignUpDesktop} />
            <source media="(min-width: 375px)" srcSet={SignUpMobile} />
            <img src={SignUpMobile} alt="" />
          </picture>
        </div>
        <div className="signup-form">
          <h2>Stay updated!</h2>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <div className="product-list">
                <img src={IconList} />
                <p>Product discovery and building what matters</p>
              </div>
            </li>
            <li>
              <div className="product-list">
                <img src={IconList} />
                <p>Measuring to ensure updates are a success</p>
              </div>
            </li>
            <li>
              <div className="product-list">
                <img src={IconList} />
                <p>And much more!</p>
              </div>
            </li>
          </ul>
          <SignupForm setSuccess={setSuccess} />
        </div>
      </section>
    </>
  );
}

export default Landing;

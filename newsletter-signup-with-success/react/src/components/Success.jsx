import successCheck from "../assets/images/icon-list.svg";

const Success = ({ setLanding }) => {
  return (
    <section className="success-wrapper">
      <img src={successCheck} />
      <h3>Thanks for subscribing!</h3>
      <p>
        A confirmation email has been sent to
        <span id="user-email"></span> Please open it and click the button inside
        to confirm your subscription.
      </p>
      <button onClick={setLanding} className="dismiss-button">
        Dismiss message
      </button>
    </section>
  );
};
export default Success;

import RetroPizza from "../../assets/images/RetroPizza.png";

export default function Landing() {
  return (
    <>
      <div className="left-container">
        <img src={RetroPizza} height="300px" width="300px" />
      </div>
      <div className="right-container">
        <div>
          <h1>Another One Bites the Crust</h1>
          <a className="button" href="/customize">
            Start Order
          </a>
        </div>
      </div>
    </>
  );
}

import car_img from "../../images/cars.png";

export default function DefaultCards() {
  let i = 0;
  return (
    <div className="card-container" key={i++}>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Skoda</h2>
        <p>
          Functional and intuitive interface of the system helps operators to
          provide a quicker more efficient service by collecting all orders on
          one dashboard, listed and sorted by relevancy.
        </p>
      </div>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Tesla</h2>
        <p>
          Address search works like a swiss clock — we spend a lot of effort to
          make it effective and easy-to-use. Worldwide geo-coding is only
          available in our taxi software.
        </p>
      </div>
      <div className="card">
        <img src={car_img} className="image" alt="" />
        <h2>Jaguar</h2>
        <p>
          Manage your business on tablet, desktop and mobile. You can offer not
          only instant orders but also pre-booking to provide services whenever
          clients need it. One click is enough to book your service.
        </p>
      </div>
    </div>
  );
}

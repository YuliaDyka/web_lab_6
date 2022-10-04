import './home.css'
import car_img from "../../images/cars.png";
import main_img from "../../images/png-transparent-taxi.png";

<div class="main-img-block">
    <img src={main_img}></img>
</div>

export default function Home(){
 return(
    <main>
        <div class="main-img-block">
          <img src={main_img} ></img>
          <h1>TAXI MANAGER</h1>
          <p class="text-desc">
            TaxiDataManager is an easy app to schedule trips, dispatch them to
            other drivers, manage bookings and track your taxi business as
            driver or owner. Fully implemented taximeter, printing receipts,
            charts and more. Taxi app allows entry into the database and easily
            monitor the income of taxi drivers. Also enables statistical
            processing of data daily, weekly, monthly and annual basis.Data are
            owned taxi driver and stored on a local device. Bluetooth printing
            reports, receipts and statistics. Integration with our "Taximeter"
            application. You can use "Taximeter" who send data to "Taximanager"
            and use full power of both application.
          </p>
        </div>
        <div class="cards-container">
            <div class="card-container">
                <div class="card">
                   <img src={car_img} className="image" alt="" />
                   <h2>Skoda</h2>
                   <p>
                      Functional and intuitive interface of the system helps operators
                      to provide a quicker more efficient service by collecting all
                      orders on one dashboard, listed and sorted by relevancy.
                   </p>
                </div>
                <div class="card">
                   <img src={car_img} className="image" alt="" />
                   <h2>Tesla</h2>
                   <p>
                      Address search works like a swiss clock — we spend a lot of effort
                      to make it effective and easy-to-use. Worldwide geo-coding is only
                      available in our taxi software.
                   </p>
                </div>
                <div class="card">
                   <img src={car_img} className="image" alt="" />
                   <h2>Jaguar</h2>
                   <p>
                       Manage your business on tablet, desktop and mobile. You can offer
                       not only instant orders but also pre-booking to provide services
                       whenever clients need it. One click is enough to book your
                       service.
                   </p>
                </div>
            </div>
        </div>
    </main>
  
 )
}
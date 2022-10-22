import './footer.css'
import logo from "../../images/logo2.png";

export default function Footer(){
    return(
        <footer class="footer-block">
             <a href="/home">
                 <img src={logo} className="img_logo" alt="logo" />
            </a>
            <div class="footer-item">
                <a class="footer-link" href="">Company</a>
            </div>
            <div class="footer-item">
                <a class="footer-link" href="">About us</a>
            </div>
            <div class="footer-item">
                <a class="footer-link" href="">Contact us</a>
            </div>
            <div class="footer-item">
                <a class="footer-link" href="">Help</a>
            </div>
        
        </footer>
    )
    
}


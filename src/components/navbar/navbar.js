import './navbar.css'
import logo from "../../images/logo2.png";

export default function NavBar() {
    return(
        <nav class="nav-block">
            <a href="/home">
                 <img src={logo} className="img_logo" alt="logo" />
            </a>
            <ul class="nav-elements"> 
                <li>
                    <a href="/home" class="nav-home">Home</a>
                </li>
                <li>
                    <a href="/catalog" class="nav-catalog">Catalog</a>
                </li>
                <li>
                    <a href="/card" class="nav-card">Card</a>
                </li>
            </ul>

        </nav>


    )

    




}
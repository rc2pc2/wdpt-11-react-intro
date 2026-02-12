import Navbar from "./Navbar";
import Logo from "./Logo";
import logoImage from "../assets/img/logo.png";

export default function Header() {
    return (
        <header>
            <Logo
                image={logoImage}
                description="Logo principale della molisana"
            />
            <Navbar />

        </header>
    );
}

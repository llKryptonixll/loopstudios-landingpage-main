import { useContext } from "react"
import MobileMenuContext from "../context/Mobile_Menu_Context"
import Nav_Link from "./Nav_Link"

const Navbar = () => {
    const linkStyles = "hover:after:opacity-100 after:transition-opacity relative after:content-[''] after:bg-white after:w-7 after:left-[50%] after:bottom-[-12px] after:translate-x-[-50%] after:h-[2px] after:absolute after:opacity-0"
    const { setIsOpen } = useContext(MobileMenuContext);

    return (
        <nav className="flex items-center justify-between font-alata relative">
            <img src="images/logo.svg" alt="loopstudios-company-logo" />
            <ul className="space-x-6 text-white md:flex hidden">
                <li>
                    <Nav_Link name="About" />
                </li>
                <li>
                    <Nav_Link name="Careers" />
                </li>
                <li>
                    <Nav_Link name="Events" />
                </li>
                <li>
                    <Nav_Link name="Products" />
                </li>
                <li>
                    <Nav_Link name="Support" />
                </li>
            </ul>
            <button onClick={() => setIsOpen(true)} className="md:hidden block" aria-label="open-mobile-menu">
                <img src="images/icon-hamburger.svg" alt="open-mobile-menu-icon" />
            </button>
        </nav>
    )
}

export default Navbar
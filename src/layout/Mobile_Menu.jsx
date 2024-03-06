import { useContext } from "react"
import MobileMenuContext from "../context/Mobile_Menu_Context"

const Mobile_Menu = () => {
    const { isOpen, setIsOpen } = useContext(MobileMenuContext)
    return (
        <div className={`${isOpen === true ? "grid" : "hidden"} bg-black fixed top-0 left-0 h-full w-full z-20 overflow-y-auto px-main_page_padding_small py-10 items-start gap-10`}>
            <div className="flex justify-between items-center">
                <img src="images/logo.svg" alt="loopstudios-company-logo" />
                <button onClick={() => setIsOpen(false)} aria-label="close-mobile-menu">
                    <img src="images/icon-close.svg" alt="x-icon" />
                </button>
            </div>
            <nav>
                <ul className="text-white grid gap-4 text-2xl font-light font-josefin_sans">
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">CAREERS</a>
                    </li>
                    <li>
                        <a href="#">EVENTS</a>
                    </li>
                    <li>
                        <a href="#">PRODUCTS</a>
                    </li>
                    <li>
                        <a href="#">SUPPORT</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Mobile_Menu
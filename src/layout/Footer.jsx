import Nav_Link from "./Nav_Link"
import Social_Media_Link from "./Social_Media_Link"

const Footer = () => {
    return (
        <footer className="xl:flex xl:gap-0 gap-12 py-12 grid xl:justify-between justify-items-center mt-[200px] items-center min-h-[160px] bg-black text-white lg:px-main_page_padding_large px-main_page_padding_small">
            <div className="grid xl:justify-items-start justify-items-center sm:gap-5 gap-12">
                <img src="images/logo.svg" alt="" />
                <ul className="flex sm:space-x-12 sm:flex-row sm:space-y-0 space-y-5 sm:text-left text-center flex-col">
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
            </div>
            <div className="grid xl:justify-items-start justify-items-center gap-5">
                <ul className="flex xl:justify-self-end items-center space-x-5">
                    <li>
                        <Social_Media_Link
                            image="images/icon-facebook.svg"
                            altText={"facebook icon"}
                            ariaLabel="our facebook page"
                        />
                    </li>
                    <li>
                        <Social_Media_Link
                            image="images/icon-twitter.svg"
                            altText={"twitter icon"}
                            ariaLabel="our twitter page"
                        />
                    </li>
                    <li>
                        <Social_Media_Link
                            image="images/icon-pinterest.svg"
                            altText={"pinterest icon"}
                            ariaLabel="our pinterest page"
                        />
                    </li>
                    <li>
                        <Social_Media_Link
                            image="images/icon-instagram.svg"
                            altText={"instagram icon"}
                            ariaLabel="our instagram page"
                        />
                    </li>
                </ul>
                <p className="font-alata text-very_dark_gray">&#169; 2021 Loopstudios. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
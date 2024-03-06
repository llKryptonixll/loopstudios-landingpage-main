import Navbar from "../layout/Navbar"

const Hero_Section = () => {
    return (
        <header className="relative grid items-start sm:bg-[url('images/desktop/image-hero.jpg')] bg-[url('images/mobile/image-hero.jpg')] min-h-[650px] lg:px-main_page_padding_large px-main_page_padding_small pt-14 bg-cover bg-no-repeat">
            <div className="bg-black absolute top-0 left-0 w-full h-full opacity-40"></div>
            <Navbar />
            <div>
                <h1 className="sm:text-6xl text-4xl text-white font-josefin_sans max-w-[650px] w-full border-2 sm:p-10 p-5 font-light relative break-words">
                    IMMERSIVE
                    EXPERIENCES
                    THAT DELIVER
                </h1>
            </div>
        </header>
    )
}

export default Hero_Section
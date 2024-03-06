const About_Section = () => {
    return (
        <section className="lg:pl-main_page_padding_large px-main_page_padding_small sm:my-40 my-28 relative flex lg:flex-row flex-col max-w-[1350px] 2xl:mx-auto">
            <img className="sm:block hidden" src="images/desktop/image-interactive.jpg" alt="person with vr glasses" />
            <img className="sm:hidden block" src="images/mobile/image-interactive.jpg" alt="person with vr glasses" />
            <div className="lg:bg-white lg:text-left text-center self-center right-0 max-w-[620px] lg:self-end sm:px-20 px-5 sm:pt-20 pt-5 grid gap-8 lg:absolute">
                <h2 className="sm:text-5xl text-4xl font-light text-black">THE LEADER IN INTERACTIVE VR</h2>
                <p className="text-very_dark_gray font-medium font-alata">
                    Founded in 2011, Loopstudios has been producing world-class
                    virtual reality projects for some of the best companies around the
                    globe. Our award-winning creations have transformed 
                    businesses through digital experiences that bind to their brand.
                </p>
            </div>
        </section>
    )
}

export default About_Section
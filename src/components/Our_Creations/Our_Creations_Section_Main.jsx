import Card_Item from "./Card_Item"

const Our_Creations_Section_Main = () => {

    const cardData = [
        {
            id: 1,
            desktopImage: "images/desktop/image-deep-earth.jpg",
            mobileImage: "images/mobile/image-deep-earth.jpg",
            altText: "Deep Earth",
            title: "DEEP EARTH",
        },
        {
            id: 2,
            desktopImage: "images/desktop/image-night-arcade.jpg",
            mobileImage: "images/mobile/image-night-arcade.jpg",
            altText: "Night Arcade",
            title: "NIGHT ARCADE",
        },
        {
            id: 3,
            desktopImage: "images/desktop/image-soccer-team.jpg",
            mobileImage: "images/mobile/image-soccer-team.jpg",
            altText: "Soccer Team Vr",
            title: "SOCCER TEAM VR",
        },
        {
            id: 4,
            desktopImage: "images/desktop/image-grid.jpg",
            mobileImage: "images/mobile/image-grid.jpg",
            altText: "The Grid",
            title: "THE GRID",
        },
        {
            id: 5,
            desktopImage: "images/desktop/image-from-above.jpg",
            mobileImage: "images/mobile/image-from-above.jpg",
            altText: "From up above Vr",
            title: "FROM UP ABOVE VR",
        },
        {
            id: 6,
            desktopImage: "images/desktop/image-pocket-borealis.jpg",
            mobileImage: "images/mobile/image-pocket-borealis.jpg",
            altText: "Pocket Borealis",
            title: "POCKET BOREALIS",
        },
        {
            id: 7,
            desktopImage: "images/desktop/image-curiosity.jpg",
            mobileImage: "images/mobile/image-curiosity.jpg",
            altText: "The Curiosity",
            title: "THE CURIOSITY",
        },
        {
            id: 8,
            desktopImage: "images/desktop/image-fisheye.jpg",
            mobileImage: "images/mobile/image-fisheye.jpg",
            altText: "Make it Fisheye",
            title: "MAKE IT FISHEYE",
        },
    ]

    return (
        <section className="lg:px-main_page_padding_large px-main_page_padding_small grid sm:gap-24 gap-16 mb-32 relative">
            <div className="sm:flex grid sm:justify-between justify-center items-center">
                <h2 className="text-4xl font-light text-black font-josefin_sans">OUR CREATIONS</h2>
                <button className="sm:relative absolute sm:left-0 left-[50%] sm:translate-x-0 translate-x-[-50%] sm:bottom-0 bottom-[-80px] font-alata text-black tracking-[5px] border-2 border-very_dark_gray rounded-sm py-2 px-8 transition-colors hover:bg-black hover:text-white hover:border-black">SEE ALL</button>
            </div>
            <ul className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                {cardData.map(card => {
                    return <Card_Item key={card.id} data={card}/>
                })}
            </ul>
        </section>
    )
}

export default Our_Creations_Section_Main
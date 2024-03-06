const Card_Item = ({ data }) => {

    const { desktopImage, mobileImage, altText, title } = data

    return (
        <li className="relative group cursor-pointer transition-opacity">
            <img className="hover:opacity-50 transition-opacity w-full sm:block hidden" src={desktopImage} alt={altText} />
            <img className="sm:hidden block h-[150px]" src={mobileImage} alt={altText} />
            <p className="text-white text-4xl font-light absolute bottom-0 sm:p-10 py-8 px-10  max-w-[270px] group-hover:text-black transition-colors">{title}</p>
        </li>
    )
}

export default Card_Item
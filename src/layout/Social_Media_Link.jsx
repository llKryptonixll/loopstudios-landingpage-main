const Social_Media_Link = ({ image, altText, ariaLabel }) => {
    const linkStyles = "hover:after:opacity-100 after:transition-opacity relative after:content-[''] after:bg-white after:w-full after:left-[50%] after:bottom-[-12px] after:translate-x-[-50%] after:h-[2px] after:absolute after:opacity-0"

    return (
        <a className={linkStyles} href="#">
            <img aria-label={ariaLabel} src={image} alt={altText} />
        </a>
    )
}

export default Social_Media_Link

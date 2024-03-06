const Nav_Link = ({ name }) => {
    const linkStyles = "font-alata hover:after:opacity-100 after:transition-opacity relative after:content-[''] after:bg-white after:w-7 after:left-[50%] after:bottom-[-12px] after:translate-x-[-50%] after:h-[2px] after:absolute after:opacity-0"

    return (
        <a className={linkStyles} href="#">{name}</a>
    )
}

export default Nav_Link
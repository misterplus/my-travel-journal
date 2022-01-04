import icon from "../images/earth.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header-img" src={icon} alt="" />
            <h3 className="header-text">my travel journal.</h3>
        </header>
    )
}
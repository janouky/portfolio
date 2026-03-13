import "./header.css"

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo-section">
                <img src="icon-big.png" className="header-logo" alt="Charlotte Guyot logo" />
                <div>
                    <h1>Charlotte</h1>
                    <h1>Guyot</h1>
                </div>
            </div>
            <nav className="header-social">
                <a href="mailto:guyotcharlotte14@gmail.com">
                    <img
                        src="icon-email.svg"
                        alt="Email"
                    />
                </a>

                <a
                    href="https://www.instagram.com/charlyguyot/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="icon-instagram.png"
                        alt="Instagram"
                    />
                </a>

                <a
                    href="https://www.behance.net/charlotteguyot3"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="icon-behance.svg"
                        alt="Behance"
                    />
                </a>
            </nav>
        </header>
    )
}
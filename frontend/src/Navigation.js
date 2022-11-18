const Navigation = () => {
    // <p> to be replaced with nav
    return (
        <header id="head">
            <p id="logo">GM Logo</p>
            <nav id="nav">
                <a className="link" href="/" >Home</a>
                <a className="link" href="/about">About</a>
                <a className="link" href="/contact">Contact Me</a>
                <a className="link" href="/projects">Projects</a>
                <a className="link" href="/resume">Resume</a>
            </nav>
        </header>
    );
}

export default Navigation;
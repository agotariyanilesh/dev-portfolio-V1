import NavLink from "@/Components/NavLink";

const LevenLayout = () => {
    return (
        <header id="site_header" className="header">
                <div className="header-content clearfix">
                    <div className="text-logo">
                        <a href="/">
                            <div className="logo-symbol">N</div>
                            <div className="logo-text">
                                Nilesh <span>Agotariya</span>
                            </div>
                        </a>
                    </div>

                    <div className="site-nav mobile-menu-hide">
                        <ul className="leven-classic-menu site-main-menu">
                            <li className={route().current('welcome') ? "menu-item current-menu-item" : "menu-item"}>
                                <NavLink href="/">About Me</NavLink>
                            </li>

                            <li className={route().current('blog') ? "menu-item current-menu-item" : "menu-item"}>
                                <NavLink href="/blog">Blog</NavLink>
                            </li>

                            <li className={route().current('contact') ? "menu-item current-menu-item" : "menu-item"}>
                                <NavLink href="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <a className="menu-toggle mobile-visible">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </header>
    );
};

export default LevenLayout;
 
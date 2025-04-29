import React from "react";
import logo from "../assets/location.png";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/' },
        { name: 'Reviews', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 bg-white w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white shadow-md text-gray-700 py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo and Appointly Text */}
            <a href="/" className="flex items-center gap-2">
                <img src={logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                <span className={`font-bold text-[#1E3A8A] ${isScrolled ? "text-[#1E3A8A]" : "text-[#1E3A8A]"}`}>Appointly</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-[#4B5563]" : "text-[#1E3A8A]"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-[#4B5563]" : "bg-[#FBBF24]"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}
                <button className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-[#4B5563]' : 'text-[#FBBF24]'} transition-all`}>
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* Search Icon */}
                <button className="text-[#1E3A8A] text-xl">
                    <i className="ri-search-line"></i>
                </button>

                {/* Login Button */}
                <button className="bg-[#1E3A8A] text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500 hover:bg-[#FBBF24]">
                    Login
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
                <svg onClick={() => setIsMenuOpen(!isMenuOpen)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-[#4B5563] transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-6" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-[#1E3A8A]">
                        {link.name}
                    </a>
                ))}

                <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer text-[#FBBF24] transition-all">
                    Dashboard
                </button>

                <button className="bg-[#1E3A8A] text-white px-8 py-2.5 rounded-full transition-all duration-500 hover:bg-[#FBBF24]">
                    Login
                </button>
            </div>
        </nav>
    );
}

export default Navbar;

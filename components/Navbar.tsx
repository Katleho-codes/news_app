
import { navitems } from "@/public/_data/navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/logo.svg";

export default function Navbar() {
    const [isOpen, setIsopen] = useState(false);
    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    };
    return (
        <>
            <header>
                <nav className="navbar flex items-center justify-between p-3 border-b h-16">
                    <Link href="/" className="logo">
                        <Image src={logo} alt="logo" />
                    </Link>
                    <ul></ul>
                    {/* <button className="hamburger" onClick={ToggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </button> */}
                </nav>
            </header>
            {/* <aside className={`sidebar bg-white ${isOpen === true ? "active" : ""}`}>
                <div className="sd-header flex items-center justify-between p-3 h-16">
                    <Link href="/" className="logo">
                        <Image src={logo} alt="logo" />
                    </Link>
                    <button className="btn close_button" onClick={ToggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                            <path d="M0 0h24v24H0z" fill="none" />
                        </svg>
                    </button>
                </div>
                <div className="sidebar_body">
                    <ul>
                        {navitems.map((link) => (
                            <li key={link.id}>
                                <Link href={link.item} className={"sd-link text-slate-900"}>
                                    {link.item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside> */}
        </>
    );
}
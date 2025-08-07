"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import DropdownLink from "./components/DropdownLink";
import LinkNav from "./components/LinkNav";
import "./header.css";

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);
    const [containerFullHeight, setContainerFullHeight] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [menuInitialized, setMenuInitialized] = useState(false);
    const [currentMenu, setCurrentMenu] = useState("main");

    useEffect(() => {
        const savedMenuState = localStorage.getItem("menuActive");
        if (savedMenuState !== null) {
            setMenuActive(JSON.parse(savedMenuState));
        }

        const handleResize = () => {
            if (window.innerWidth <= 850) {
                setIsSmallScreen(true);
                if (!menuInitialized) {
                    setMenuInitialized(true);
                    if (!savedMenuState) {
                        setMenuActive(true);
                    }
                    setContainerFullHeight(true);
                }
            } else {
                setCurrentMenu("main");
                setIsSmallScreen(false);
                setMenuActive(false);
                setContainerFullHeight(false);
                setMenuInitialized(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [menuInitialized]);

    useEffect(() => {
        localStorage.setItem("menuActive", JSON.stringify(menuActive));
        if (menuActive) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuActive]);

    const toggleMenu = () => {
        if (menuActive) {
            setCurrentMenu("main");
            setContainerFullHeight(false);
        } else {
            setContainerFullHeight(true);
        }
        setMenuActive(!menuActive);
    };


    const goToSubMenu = (menu) => {
        setCurrentMenu(menu);
    };

    const goBack = () => {
        setCurrentMenu("main");
    };

    return (
        <>
            <div className={`containerF w-full justify-center bg-[#001C27] flex flex-row ${menuActive ? "full-height" : ""}`}>
                <header
                    className={`bg-[#001C27] header-container h-[100px]  flex items-center justify-around gap-6 px-5 ${menuActive ? "menu-active" : ""}`}
                >
                    {!menuActive && (
                        <figure className="logo-container flex items-center justify-center animate-fade-in opacity-100 transition-opacity duration-1000"
                        >
                            <img
                                src="/principal/logo.jpg"
                                alt="Logo"
                                className="w-[200px] h-auto"
                            />
                        </figure>
                    )}
                    <div className="flex items-center justify-center gap-4 text-white text-lg font-bold">
                        <LinkNav text={"Inicio"} link={"/"} />
                        <LinkNav text={"Nosotros"} link={"/nosotros"} />
                        <LinkNav text={"Servicios"} link={"/servicios"} />
                        <LinkNav text={"Contacto"} link={"/contacto"} />
                        <LinkNav text={"Bolsa de trabajo"} link={"/bolsaDeTrabajo"} />
                        <LinkNav text={"Login"} link={"/login"} />

                    </div>
                    
                    <div className="flex justify-center align-middle mx-10">
                        <Link href="/contacto">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
                            ¡Solicita una cotización!
                            </span>
                        </Link>
                    </div>


                    {currentMenu === "main" ? (

                        <div></div>
                        
                    ) : (
                        <div className="h-[50px] w-auto  text-white mx-7 text-center logo flex items-center justify-center">
                            <a
                                href="#"
                                onClick={() => {
                                    goBack();
                                }}
                                className="text-white font-bold cursor-pointer"
                            >
                                &lt; Volver
                            </a></div>
                    )}

                    
                    {isSmallScreen && (
                        <>
                        <div className="menu-icon" onClick={toggleMenu}>
                            <span className={`menu-icon-text ${menuActive ? "text-small" : "text-large"}`}>
                                {menuActive ? "Cerrar" : "\u2630"}
                            </span>
                            {menuActive && (
                                <div className="icon-box">
                                    <div className="inner-box">
                                        <div className="bar bar1"></div>
                                        <div className="bar bar2"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                        </>
                        
                    )}
                </header>
                {/* {menuActive && (
                    <div className="dropdown-menu bg-gradient-to-r from-[--azul_brillante] to-[--azul_intenso]"> */}
                <div className={`dropdown-menu bg-[#001C27] ${menuActive ? "show" : ""}`}>

                    {currentMenu === "main" && (
                        <>
                            <DropdownLink
                                text={"Inicio"}
                                link={"/"}
                                isInicio={true}
                                final={false}
                                closeMenu={() => {
                                    setMenuActive(false);
                                    setContainerFullHeight(false);
                                }}
                            />
                            <DropdownLink
                                text={"Nosotros"}
                                link={"/nosotros"}
                                isInicio={false}
                                final={false}
                                 closeMenu={() => {
                                    setMenuActive(false);
                                    setContainerFullHeight(false);
                                }}
                            />
                            <DropdownLink
                                text={"Servicios"}
                                link={"/servicios"}
                                isInicio={false}
                                final={false}
                                onClick={() => goToSubMenu("servicios")}

                            />
                            <DropdownLink
                                text={"Contacto"}
                                link={"/contacto"}
                                isInicio={false}
                                final={false}
                                closeMenu={() => {
                                    setMenuActive(false);
                                    setContainerFullHeight(false);
                                }}
                            />
                            <DropdownLink
                                text={"Bolsa de trabajo"}
                                link={"/bolsaDeTrabajo"}
                                isInicio={false}
                                final={true}
                                closeMenu={() => {
                                    setMenuActive(false);
                                    setContainerFullHeight(false);
                                }}
                            />
                            <DropdownLink
                                text={"Login"}
                                link={"/login"}
                                isInicio={false}
                                final={false}
                                closeMenu={() => {
                                    setMenuActive(false);
                                    setContainerFullHeight(false);
                                }}
                            />
                        </>

                    )}

                    <div className="red-bg">
                        <div className="absolute w-[110px] h-[110px] left-1/2 bottom-0 translate-x-[-50%] translate-y-[40%] z-30 rounded-full bg-white flex items-center justify-center">
                            
                
                    <img
                        src="/principal/miniLogo.png"
                        alt="Logo"
                        className="w-[200px] h-auto"
                    />

                        </div>
                    </div>

                </div>
                {/* )} */}
            </div>
        </>
    );
}

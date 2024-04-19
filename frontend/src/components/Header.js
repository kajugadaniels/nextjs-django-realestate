"use client";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MainMenu from './MainMenu'
import SidebarPanel from './sidebar-panel';
import LoginSignupModal from './login-signup-modal';

const Header = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", changeBackground)

        return () => {
            window.addEventListener("scroll", changeBackground)
        }
    }, [])

    return (
        <>
            <header
                className={`header-nav nav-homepage-style light-header menu-home4 main-menu ${
                    navbar ? "sticky slideInDown animated" : ""
                }`}
            >
                <nav className="posr">
                    <div className="container maxw1600 posr menu_bdrt1">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <MainMenu />
                            </div>

                            <div className="col-auto">
                                <Link className="header-logo" href="/">
                                    <Image
                                        width={138}
                                        height={44}
                                        src="/images/header-logo3.svg"
                                        alt="Header Logo"
                                    />
                                </Link>
                            </div>

                            <div className="col-auto">
                                <div className="d-flex align-items-center">
                                    <a
                                        href="#"
                                        className="login-info d-flex align-items-center"
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginSignupModal"
                                        role="button"
                                    >
                                        <i className="far fa-user-circle fz16 me-2" />{" "}
                                        <span className="d-none d-xl-block">Login / Register</span>
                                    </a>

                                    <Link
                                        className="ud-btn btn-dark add-property bdrs0 mx-2 mx-xl-4"
                                        href="/dashboard-add-property"
                                    >
                                        Add Property
                                        <i className="fal fa-arrow-right-long" />
                                    </Link>
                                    <a
                                        className="sidemenu-btn filter-btn-right"
                                        href="#"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#SidebarPanel"
                                        aria-controls="SidebarPanelLabel"
                                    >
                                        <Image
                                            width={25}
                                            height={9}
                                            className="img-1"
                                            src="/images/icon/nav-icon-dark.svg"
                                            alt="humberger menu"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div className="signup-modal">
                <div
                    className="modal fade"
                    id="loginSignupModal"
                    tabIndex={-1}
                    aria-labelledby="loginSignupModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog  modal-dialog-scrollable modal-dialog-centered">
                        <LoginSignupModal />
                    </div>
                </div>
            </div>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="SidebarPanel"
                aria-labelledby="SidebarPanelLabel"
            >
                <SidebarPanel />
            </div>
        </>
    )
}

export default Header
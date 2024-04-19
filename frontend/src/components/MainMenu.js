import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
    const pathname = usePathname();

    const handleActive = (link) => {
        if (link.split("/")[1] == pathname.split("/")[1]) {
            return "menuActive";
        }
    };

    return (
        <ul className="ace-responsive-menu">
            <li className="visible_list dropitem">
                <a className="list-item" href="#">
                    <span className={"home" ? "title menuActive" : "title"}>
                        Home
                    </span>
                </a>
            </li>
            <li className="visible_list dropitem">
                <a className="list-item" href="#">
                    <span className="">
                        Property
                    </span>
                </a>
            </li>
            <li className="visible_list dropitem">
                <a className="list-item" href="#">
                    <span className="">
                        Agents
                    </span>
                </a>
            </li>
            <li className="visible_list dropitem">
                <a className="list-item" href="#">
                    <span className="">
                        Blog
                    </span>
                </a>
            </li>
            <li className="visible_list dropitem">
                <a className="list-item" href="#">
                    <span className="">
                        Contact
                    </span>
                </a>
            </li>
        </ul>
    )
}

export default MainMenu
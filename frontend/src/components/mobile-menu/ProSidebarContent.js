import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { isParentActive } from "@/utils/isMenuActive";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const ProSidebarContent = () => {
    const path = usePathname();



    return (
        <Sidebar width="100%" backgroundColor="#fff" className="my-custom-class">
            <Menu>
                <SubMenu className="" label="Home" />
                <SubMenu className="" label="Property" />
                <SubMenu className="" label="Agents" />
                <SubMenu className="" label="Blog" />
                <SubMenu className="" label="Contact" />
            </Menu>
        </Sidebar>
    );
};

export default ProSidebarContent;

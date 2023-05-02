import React from "react";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/SidebarItem";

const Dashboard = () => {
    return (<>
        <Sidebar>
            <SidebarItem href="/">
                <Link to="/">
                    Home </Link>
                </SidebarItem>
                <SidebarItem href="/edit">
                    <Link to="/edit">
                        Edit </Link>
                    </SidebarItem>
                    <SidebarItem href="/videos">
                        <Link to="/videos">
                            Videos </Link>
                        </SidebarItem>
                        <SidebarItem href="/analytics">
                            <Link to="/analytics">
                                Analytics </Link>
                            </SidebarItem>
                        </Sidebar>
                    </>
                    )

                }


export default Dashboard;

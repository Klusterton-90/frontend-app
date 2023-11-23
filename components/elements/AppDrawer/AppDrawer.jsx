import React from "react";
import styles from "./AppDrawer.module.scss";
import ListItem from "../ListItem/ListItem";
import { useRouter } from "next/router";
import { Routes } from "@/constants/navigation";
import Image from "next/image";

// healthcare provider menu items
const providerMenuItems = [
  {
    name: "Dashboard",
    url: Routes.ProviderDashboard,
    icon: "/images/dashboard.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Patients",
    url: Routes.ProviderDashboard,
    icon: "/images/patients.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Schedule",
    url: Routes.ProviderDashboard,
    icon: "/images/schedule.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Messages",
    url: Routes.ProviderDashboard,
    icon: "/images/messages.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Reports",
    url: Routes.ProviderDashboard,
    icon: "/images/report.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Statistics",
    url: Routes.ProviderDashboard,
    icon: "/images/statistics.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
];

// patient menu items
const patientMenuItems = [];

export default function AppDrawer({ mode }) {
    // router
    const router = useRouter();


  // menu items to display on the drawer
  const menuItems = mode === "provider" ? providerMenuItems : patientMenuItems;

  const [, setSelectedIndex] = React.useState(0);

  // handle list item click
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    router.push(menuItems[index].url);
    // TODO navigate here
  };

  return (
    <div className={styles.drawerContainer}>
      <div>logo</div>
      {menuItems.map((item, index) => {
        return (
          <ListItem
            key={index}
            icon={
                <Image src={item.icon} alt="" width={24} height={24}/>
            }
            title={item.name}
            onClick={(event) => handleListItemClick(event, index)}
          />
        );
      })}
    </div>
  );
}

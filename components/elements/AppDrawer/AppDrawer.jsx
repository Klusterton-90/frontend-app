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
    iconHover: "/images/dashboard-selected.svg",
  },
  {
    name: "Schedule",
    url: Routes.ProviderSchedule,
    icon: "/images/schedule.svg",
    iconHover: "/images/schedule-selected.svg",
  },
  {
    name: "Patients",
    url: Routes.ProviderPatients,
    icon: "/images/patients.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Messages",
    url: Routes.ProviderMessages,
    icon: "/images/messages.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Reports",
    url: Routes.ProviderReports,
    icon: "/images/report.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
  {
    name: "Statistics",
    url: Routes.ProviderStatistics,
    icon: "/images/statistics.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
];

// patient menu items
const patientMenuItems = [];

// bottom menu items
const bottomMenuItems = [
  {
    name: "Settings",
    url: Routes.ProviderDashboard,
    icon: "/images/settings.svg",
    iconHover: "/images/dashboard-selected.svg",
  },
  {
    name: "Help Center",
    url: Routes.ProviderDashboard,
    icon: "/images/helpCenter.svg",
    iconHover: "/images/icon-provider-dashboard-hover.svg",
  },
];

export default function AppDrawer({ mode }) {
  // router
  const router = useRouter();

  // menu items to display on the drawer
  const menuItems = mode === "provider" ? providerMenuItems : patientMenuItems;

  const [, setSelectedIndex] = React.useState(0);
  const [selected, setSelected] = React.useState(menuItems.map(() => false));

  // handle list item click
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    const newSelected = selected.map((select, i) => i === index);
    setSelected(newSelected);
    router.push(menuItems[index].url);
    // TODO navigate here
  };

  // handle bottom list item click
  const handleBottomListItemClick = (event, index) => {
    router.push(bottomMenuItems[index].url);
    // TODO navigate here
  };
  return (
    <div className={styles.drawerContainer}>
      <div>
        <div>logo</div>
        {menuItems.map((item, index) => {
          return (
            <ListItem
              selected={
                mode == "provider"
                  ? router.pathname === item?.url
                  : router.pathname.includes(item?.url)
              }
              key={index}
              icon={<Image src={item.icon} alt="" width={24} height={24} />}
              iconSelected={
                <Image src={item.iconHover} alt="" width={24} height={24} />
              }
              title={item.name}
              onClick={(event) => handleListItemClick(event, index)}
            />
          );
        })}
      </div>
      <div>
        {bottomMenuItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              icon={<Image src={item.icon} alt="" width={24} height={24} />}
              iconSelected={
                <Image src={item.icon} alt="" width={24} height={24} />
              }
              title={item.name}
              onClick={(event) => handleBottomListItemClick(event, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

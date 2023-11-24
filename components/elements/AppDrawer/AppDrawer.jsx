import React from "react";
import styles from "./AppDrawer.module.scss";
import ListItem from "../ListItem/ListItem";
import { useRouter } from "next/router";
import { Routes } from "@/constants/navigation";
import Image from "next/image";
import Logo from "../Logo";
import LogoBlack from "../Logo/LogoBlack";

// healthcare provider menu items
const providerMenuItems = [
  {
    name: "Dashboard",
    url: Routes.ProviderDashboard,
    icon: "/images/dashboard.svg",
    iconHover: "/images/dashboard-selected.svg",
  },
  {
    name: "Patients",
    url: Routes.ProviderPatients,
    icon: "/images/patients.svg",
    iconHover: "/images/patients-selected.svg",
  },
  {
    name: "Reports",
    url: Routes.ProviderReports,
    icon: "/images/report.svg",
    iconHover: "/images/report-selected.svg",
  },
  {
    name: "Statistics",
    url: Routes.ProviderStatistics,
    icon: "/images/statistics.svg",
    iconHover: "/images/statistics-selected.svg",
  },
];

// patient menu items
const patientMenuItems = [
  {
    name: "Dashboard",
    url: Routes.PatientDashboard,
    icon: "/images/dashboard.svg",
    iconHover: "/images/dashboard-selected.svg",
  },
  {
    name: "Reminders",
    url: Routes.PatientReminders,
    icon: "/images/calendar-black.svg",
    iconHover: "/images/calendar.svg",
  },
  {
    name: "Medications",
    url: Routes.PatientMedications,
    icon: "/images/pill.svg",
    iconHover: "/images/pill-selected.svg",
  },
  {
    name: "Report",
    url: Routes.PatientReport,
    icon: "/images/report.svg",
    iconHover: "/images/report-selected.svg",
  },
];

// bottom menu items
const bottomMenuItems = [
  {
    name: "Settings",
    url: "",
    icon: "/images/settings.svg",
    iconHover: "/images/dashboard-selected.svg",
  },
  {
    name: "Help Center",
    url: "",
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
        <LogoBlack />
        <div className={styles.menuItemsContainer}>
          {menuItems.map((item, index) => {
            return (
              <ListItem
                selected={router.pathname === item?.url}
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

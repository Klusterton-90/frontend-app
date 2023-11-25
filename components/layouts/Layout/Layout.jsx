import React from "react";
import styles from "./Layout.module.scss";
import AppDrawer from "@/components/elements/AppDrawer/AppDrawer";
import Client from "./Client";

export default function Layout({ mode = "provider", children }) {
  return (
    <Client>
      <div className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <aside>
            <AppDrawer mode={mode} />
          </aside>
          <main className={styles.mainContent}>{children}</main>
        </div>
      </div>
    </Client>
  );
}

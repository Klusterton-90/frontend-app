import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderDashboard.module.scss";
import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";

export default function ProviderDashboard() {
  return (
    <Layout>
      <Breadcrumbs/>
      <div>dashboard</div>
    </Layout>
  );
}

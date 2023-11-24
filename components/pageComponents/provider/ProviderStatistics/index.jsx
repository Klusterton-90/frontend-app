import Breadcrumbs from "@/components/layouts/Layout/Breadcrumbs/Breadcrumbs";
import Layout from "@/components/layouts/Layout/Layout";
import React from "react";
import styles from "./ProviderStatistics.module.scss";
import HeadingCard from "@/components/elements/HeadingCard/HeadingCard";

export default function ProviderStatistics() {
  return (
    <Layout>
      <Breadcrumbs />
      <HeadingCard heading={"My Patient’s Statistics"} />
    </Layout>
  );
}

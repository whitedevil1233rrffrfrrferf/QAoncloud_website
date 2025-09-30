import Clients from "@/components/Common/Clients/Clients";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";
import Models from "@/components/EngagementModel/Models";
import PricingModelsTable from "@/components/EngagementModel/PricingModelsTable";
import Table from "@/components/EngagementModel/Table";
import ContactUs from "@/components/Security_testing/ContactUs";
import React from "react";

export default function page() {
  return (
    <div>
      <Models />
      <Table />
      <PricingModelsTable />
      <ContactUs />
      <Clients />
    </div>
  );
}

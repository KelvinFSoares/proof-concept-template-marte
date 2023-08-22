import MainLayout from "@/layout/Layout";
import HeroBanner from "@/components/HeroBanner";
import { useEffect, useState } from "react";
import { fetchAPI } from "./api/fetch-api";

export default function Home() {
  const [templateData, setTemplateData] = useState({});

  useEffect(() => {
    return async () => {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const customerID = process.env.NEXT_PUBLIC_STRAPI_CUSTOMER_ID;
      const path = `/customers/${customerID}?populate[websiteTemplateData][populate]=*`;
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, options);
      const templateRawData =
        responseData?.data?.attributes?.websiteTemplateData[0];

      setTemplateData(templateRawData);
    };
  }, []);

  return (
    <MainLayout>
      <HeroBanner
        heroImg={templateData?.heroBanner?.heroImg}
        title={templateData?.heroBanner?.heroTitle}
        subtitle={templateData?.heroBanner?.heroSubtitle}
      />
    </MainLayout>
  );
}

import React from "react";
import Layout from "../common/Layout";
import SectionHeader from "../common/SectionHeader";
import IconDescriptionSection from "../common/IconDescriptionSection";
import {
  FaCartShopping,
  FaCloudArrowUp,
  FaRightToBracket,
} from "react-icons/fa6";

const ProductShowcase = () => {
  const iconDescriptions = [
    {
      icon: FaCartShopping,
      title: "Checkout and sales are handled for you",
      description:
        "You don't have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you.",
    },
    {
      icon: FaRightToBracket,
      title: "Your customers log in, and your products are there for them",
      description:
        "Your Podia site handles access to products for you. Everything is in one place. When your customers buy a product, they get a log in. After that, they can see all the products they've bought from you.",
    },
    {
      icon: FaCloudArrowUp,
      title: "Upload your product. Make your sales page. Done.",
      description:
        "You don't have to figure out a bunch of tools or website embeds. Just connect a payment provider and your Podia site takes care of payments for you.",
    },
  ];

  return (
    <div
      style={{
        padding: "1.5em 0",
      }}
    >
      <SectionHeader
        sectionTitle="All you have to do is make the product. Podia takes care of the details for you."
        sectionSubtitle="Podia lets you make your sales page, take payments, and give your customers access all in one place. Host and sell your products without needing to figure out a handful of new tools."
      />
      <IconDescriptionSection iconDescriptions={iconDescriptions} />
    </div>
  );
};

export default ProductShowcase;

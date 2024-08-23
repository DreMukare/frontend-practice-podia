import React from "react";
import PageLayout from "../common/PageLayout";
import Nav from "../common/Nav";
import Hero from "../common/Hero";
import Layout from "../common/Layout";
import ProductShowcase from "../DigitalProducts/ProductShowcase";
import ProductsListing from "../DigitalProducts/ProductsListing";

const DigitalProducts = () => {
  return (
    <Layout>
      <Hero
        titleText="DIGITAL PRODUCTS"
        callToActionHeaderText="Sell online courses, coaching sessions, webinars, workshops, ebooks, and anything you can think of on Podia"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/3xU9z3jUaXTRdC0ii7hXVb/2ac68a4e2bab8ea98b76e001daf345af/digital_products-hero.png?w=1440&q=75"
        heroCopy="Get everything you need in one place that you own. Podia takes care of hosting products, taking payments, and getting products to your customers. And you always control your own work."
        ctaButtonText="Get your free account"
        catButtonFunction={() => {}}
        isHero
      />
      <ProductShowcase />
      <ProductsListing />
    </Layout>
  );
};

export default DigitalProducts;

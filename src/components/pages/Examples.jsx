import Layout from "../common/Layout";
import Hero from "../common/Hero";

const Examples = () => {
  return (
    <Layout>
      <Hero
        titleText="website builder"
        callToActionHeaderText="You could have a beautiful, free website in the next 10 minutes"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/57zCybqM0DPlteulIC2BTI/d7024a01fb212e243f124bad5a868318/website_builder-hero.png?w=1440&q=75"
        heroCopy="Your website is your home on the internet. Want to sell products? Share more about yourself? Host a community? Post a portfolio? You can use your Podia site for pretty much anything."
        ctaButtonText="Get your free website"
        catButtonFunction={() => {}}
      />
    </Layout>
  );
};

export default Examples;

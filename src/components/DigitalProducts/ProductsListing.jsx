import Hero from "../common/Hero";
import SectionHeader from "../common/SectionHeader";
import UserRating from "../common/UserRating";

const ProductsListing = () => {
  return (
    <div>
      <SectionHeader
        sectionTitle="What kinds of products can you sell with Podia?"
        sectionSubtitle="Podia gives you the flexibility to sell whatever you want. That means you have more ways to grow your creator business."
      />
      <Hero
        titleText="Online courses"
        callToActionHeaderText="Beautiful online courses you can build in moments"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/6Upd6xYyofNMlYawCQm7OA/1c2d7c3b665bb2dda455db43da72762a/digital_products-courses.png?w=1440&q=75"
        heroCopy="Make a beautiful online course for your customers. Podia hosts your course. That means all the lessons, files, and videos you want handled for you."
        linkHref="#"
        linkText="Learn more about courses"
      />
      <UserRating
        ratingQuote="I've wanted to offer e-courses for a while but always felt overwhelmed with how to set it up. Podia has made it super easy."
        userName="Joy Cho, Oh Joy! Academy"
      />
      <Hero
        titleText="Digital downloads"
        callToActionHeaderText="Ebooks, templates, and any file type you can think of"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/7p6JX5lRphfQnMNrsU1OuP/1c5e24ecb26ce3440fc87034242f0a27/digital_products-downloads.png?w=1440&q=75"
        heroCopy="Have an ebook to sell? Templates you love? Podia makes it easy to spin up a sales page and sell ebooks, templates, audio files, video files, spreadsheets, and any other file type."
        linkHref="#"
        linkText="Learn more about downloads"
      />
      <UserRating
        ratingQuote="We didn’t have to stress about technical details or custom coding. Using Podia made selling our first eBook quick, efficient, and fun."
        userName="Matt & Steph, Plant-based food bloggers"
      />
      <Hero
        titleText="Coaching"
        callToActionHeaderText="One-on-one coaching and consultations, with billing managed for you"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/6MRIUMFs5dX9PKOjtzMXjf/9f5b01182904ffc6c4663dc2f442c3ba/digital_products-coaching.png?w=1440&q=75"
        heroCopy="Sometimes your students want one-on-one attention. Podia makes it easy for you to charge for coaching sessions and consultations."
        linkHref="#"
        linkText="Learn more about coaching"
      />
      <UserRating
        ratingQuote="Podia just works. It's easy to use and includes everything you need to sell digital products. I’ve tried all the alternatives, and Podia is hard to beat."
        userName="Shawn Leamon, Divorce and Your Money"
      />
      <Hero
        titleText="Webinars"
        callToActionHeaderText="Webinars and workshops with registration and payment in one place"
        heroImg="https://images.ctfassets.net/19dvw6heztyg/5LepYwomTxpDT9PU2CoeHo/0aec7f94e534ac062df48c7e7f4c7f51/digital_products-webinars.png?w=1440&q=75"
        heroCopy="How can you charge for your webinars and workshops? Do it from your Podia site. Set up a paid webinar product and your customers can register straight from your website."
        linkHref="#"
        linkText="Learn more about webinars"
      />
    </div>
  );
};

export default ProductsListing;

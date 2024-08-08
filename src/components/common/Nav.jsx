import Layout from "./Layout";
import Logo from "./Logo";
import Button from "./Button";
import theme from "../../utils/theme";

export const NavLink = (props) => {
  const { text, url, isDropdown } = props;
  return (
    <a
      style={{
        textDecoration: "none",
        margin: "0 0.5em",
        color: theme.colors.darkGrey,
      }}
      href={url}
    >
      {text} {isDropdown && ">"}
    </a>
  );
};

const Nav = () => {
  const navLinkData = [
    {
      text: "Features",
      url: "/features",
      isDropdown: true,
    },
    {
      text: "Examples",
      url: "/examples",
    },
    {
      text: "Pricing",
      url: "/pricing",
    },
    {
      text: "Demo",
      url: "/demo",
    },
    {
      text: "Resources",
      url: "/resources",
      isDropdown: true,
    },
  ];

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "1.5em 0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Logo />
          {navLinkData.map((navLink, idx) => {
            return (
              <NavLink
                key={idx}
                text={navLink.text}
                url={navLink.url}
                isDropdown={navLink.isDropdown}
              />
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1em",
          }}
        >
          <NavLink text="Login" url="/login" />
          <Button text="Sign up free" handleClick={() => {}} />
        </div>
      </div>
    </Layout>
  );
};

export default Nav;

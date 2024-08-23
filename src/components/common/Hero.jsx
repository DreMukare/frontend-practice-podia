import Button from "./Button";
import theme from "../../utils/theme";

const Hero = (props) => {
  const {
    titleText,
    callToActionHeaderText,
    heroImg,
    heroCopy,
    ctaButtonText,
    ctaButtonFunction,
    linkHref,
    linkText,
    isHero,
  } = props;

  return (
    <div
      style={{
        width: "100%",
        margin: "1.5em 0",
      }}
    >
      {isHero && (
        <h1
          style={{
            color: theme.colors.darkGrey,
            fontSize: "1em",
            marginBottom: 10,
          }}
        >
          {titleText.toUpperCase()}
        </h1>
      )}
      <div
        style={{
          display: "flex",
          alignItems: isHero ? "flex-start" : "center",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <div>
          {!isHero && (
            <h1
              style={{
                color: theme.colors.darkGrey,
                fontSize: "1em",
                marginBottom: 10,
              }}
            >
              {titleText.toUpperCase()}
            </h1>
          )}
          <h2
            style={{
              fontFamily: theme.fonts.serif,
              fontSize: isHero ? "3.5em" : "2.2em",
              width: isHero ? "90%" : "100%",
              lineHeight: "1.2em",
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {callToActionHeaderText}
          </h2>
          <p
            style={{
              width: isHero ? "90%" : "100%",
              lineHeight: "1.5em",
              fontSize: isHero ? "1.5em" : "1.2em",
              margin: "1em 0",
            }}
          >
            {heroCopy}
          </p>
          {ctaButtonText ? (
            <Button text={ctaButtonText} handleClick={ctaButtonFunction} />
          ) : (
            <a
              style={{
                textDecoration: "none",
              }}
              href={linkHref}
            >
              {linkText}
              {" ->"}
            </a>
          )}
        </div>
        <img width={"50%"} src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;

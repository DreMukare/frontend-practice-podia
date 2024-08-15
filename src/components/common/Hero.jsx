import React from "react";
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
  } = props;

  return (
    <div>
      <h1
        style={{
          color: theme.colors.darkGrey,
          fontSize: "1em",
          marginBottom: 10,
        }}
      >
        {titleText.toUpperCase()}
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "1em",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "tiempos",
              fontSize: "2.7em",
              lineHeight: "1.2em",
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            {callToActionHeaderText}
          </h2>
          <p
            style={{
              lineHeight: "1.5em",
              fontSize: "1.2em",
            }}
          >
            {heroCopy}
          </p>
          <Button text={ctaButtonText} handleClick={ctaButtonFunction} />
        </div>
        <img width={"60%"} src={heroImg} />
      </div>
    </div>
  );
};

export default Hero;

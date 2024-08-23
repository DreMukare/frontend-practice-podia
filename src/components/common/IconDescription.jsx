import React from "react";
import theme from "../../utils/theme";

const IconDescription = (props) => {
  const { title, description, icon: Icon } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1em",
        textAlign: "center",
      }}
    >
      <Icon
        style={{
          background: theme.colors.cream,
          color: theme.colors.darkGrey,
          height: "3.5em",
          width: "auto",
          padding: "1em",
          borderRadius: "50%",
        }}
      />
      <h3
        style={{
          fontFamily: theme.fonts.serif,
          fontSize: "1.3em",
          width: "90%",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          lineHeight: "1.5em",
          width: "90%",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default IconDescription;

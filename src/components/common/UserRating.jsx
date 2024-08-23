import React from "react";
import { FaStar } from "react-icons/fa6";
import theme from "../../utils/theme";

const Stars = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1em",
        margin: "auto",
      }}
    >
      {[1, 2, 3, 4, 5].map((_, idx) => {
        return (
          <FaStar
            key={idx}
            style={{
              color: theme.colors.gold,
              width: "2em",
              height: "auto",
            }}
          />
        );
      })}
    </div>
  );
};

const UserRating = (props) => {
  const { ratingQuote, userName } = props;

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        margin: "4em 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Stars />
      <p
        style={{
          margin: "2em, 0",
          fontFamily: theme.fonts.serif,
          fontSize: "1.3em",
        }}
      >
        {ratingQuote}
      </p>
      <p>
        {"-"}
        {userName}
      </p>
    </div>
  );
};

export default UserRating;

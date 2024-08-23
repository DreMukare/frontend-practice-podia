import theme from "../../utils/theme";

const SectionHeader = (props) => {
  const { sectionSubtitle, sectionTitle } = props;

  return (
    <div
      style={{
        textAlign: "center",
        color: theme.colors.darkGrey,
        width: "80%",
        margin: "auto",
      }}
    >
      <h1
        style={{
          lineHeight: "1.2em",
          fontFamily: theme.fonts.serif,
        }}
      >
        {sectionTitle}
      </h1>
      <p
        style={{
          margin: "1em 0",
          fontSize: "1.2em",
          lineHeight: "1.5em",
        }}
      >
        {sectionSubtitle}
      </p>
    </div>
  );
};

export default SectionHeader;

import theme from "../../utils/theme";

const Logo = () => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "2em",
        marginRight: "1em",
        color: theme.colors.purple,
        fontWeight: "bold",
      }}
    >
      podia
    </button>
  );
};

export default Logo;

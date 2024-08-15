import theme from "../../utils/theme";

const Button = (props) => {
  const { text, handleClick } = props;

  return (
    <button
      style={{
        border: "none",
        backgroundColor: theme.colors.purple,
        padding: "1em 2em",
        fontSize: "0.8em",
        color: theme.colors.eggShell,
        borderRadius: "25px",
        cursor: "pointer",
      }}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;

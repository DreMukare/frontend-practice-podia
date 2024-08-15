import { useNavigate } from "react-router-dom";
import theme from "../../utils/theme";

const Logo = () => {
  const navigate = useNavigate();

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
      onClick={() => navigate("/")}
    >
      podia
    </button>
  );
};

export default Logo;

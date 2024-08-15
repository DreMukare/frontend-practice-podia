import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const PageLayout = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Outlet />
    </div>
  );
};

export default PageLayout;

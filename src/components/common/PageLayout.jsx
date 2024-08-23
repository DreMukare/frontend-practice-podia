import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const PageLayout = () => {
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <Nav />
      <Outlet />
    </div>
  );
};

export default PageLayout;

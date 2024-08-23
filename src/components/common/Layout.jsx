const Layout = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        padding: "0 8em",
        margin: "auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

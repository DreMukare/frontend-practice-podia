const Layout = (props) => {
  const { children } = props;

  return (
    <div
      style={{
        padding: "0 16em",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;

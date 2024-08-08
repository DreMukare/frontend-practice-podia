const PageLayout = (props) => {
  const { children } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
};

export default PageLayout;

import Header from "./_common/Header";

const PageHeader = ({ children, ...props }) => {
  return (
    <Header
      style={{ fontFamily: "sans-serif", fontSize: "3rem", color: "red" }}
      {...props}
    >
      {children}
    </Header>
  );
};

export default PageHeader;

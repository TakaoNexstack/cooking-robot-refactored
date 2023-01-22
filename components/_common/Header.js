const Header = ({ align = "center", className = "", children, ...props }) => {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <h2 className={alignments[align] + " " + className} {...props}>
      {children}
    </h2>
  );
};

export default Header;

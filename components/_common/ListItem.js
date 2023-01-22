const ListItem = ({ className, children, ...props }) => {
  return (
    <li className={className} {...props}>
      {children}
    </li>
  );
};

export default ListItem;

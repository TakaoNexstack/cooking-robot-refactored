import ListItem from "./ListItem";

const List = ({
  data = [],
  columns = [],
  className = "",
  children,
  ...props
}) => {
  return (
    <ul className={className} {...props}>
      {data.length
        ? data?.map((item) => (
            <ListItem key={item.id} className={"itemListItem"}>
              {columns?.map((col, i) => (
                <span key={i}>
                  {col.formatter
                    ? col.formatter(item[col.dataField])
                    : item[col.dataField]}
                </span>
              ))}
            </ListItem>
          ))
        : "No data"}
    </ul>
  );
};

export default List;

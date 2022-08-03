const TableHead = ({ item }: { item: string[] }) => {
  return (
    <tr className="text-left bg-primary/20 text-gray-600">
      {item.map((row, i) => {
        return (
          <th
            key={i}
            className="border-b border-primary/60 px-6 py-2 font-bold tracking-wider uppercase text-xs"
          >
            {row}
          </th>
        );
      })}
    </tr>
  );
};
export default TableHead;

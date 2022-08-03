import TableHead from "@UI/Table/TableHead";
import TableRow from "@UI/Table/TableRow";

const TableUI = ({ collection }: { collection: object[] }) => {
  const columns = Object.keys(collection[0]);
  const rows = collection?.map((row) => {
    return Object.values(row);
  });
  return (
    <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped">
      <thead>
        <TableHead item={columns} />
      </thead>
      {rows?.length !== 0 ? (
        <tbody>
          {rows?.map((row) => {
            return <TableRow key={`${row[0]}`} item={row as []} />;
          })}
        </tbody>
      ) : (
        "No hay elementos"
      )}
    </table>
  );
};

export default TableUI;

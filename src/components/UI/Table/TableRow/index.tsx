import Link from 'next/link';
import { useRouter } from 'next/router';

const TableRow = ({ item }: { item: string[] }) => {
  const { pathname } = useRouter();
  return (
    <tr className="text-gray-500 hover:bg-primary/10 transition-all duration-300">
      {item.map((rowData, i) => {
        return (
          <td key={i} className="border-dashed border-t border-primary/60">
            <Link href={`${pathname}/${item[0]}`}>
              <a className="cursor-pointer">
                <span className="px-6 py-3 flex items-center">{rowData}</span>
              </a>
            </Link>
          </td>
        );
      })}
    </tr>
  );
};
export default TableRow;

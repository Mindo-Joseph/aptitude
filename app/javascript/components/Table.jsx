export const Table = ({ columns, data, className }) => (
  <table className={`min-w-full divide-y divide-gray-200 ${className}`}>
    <thead className="bg-gray-50">
      <tr>
        {columns.map((col) => (
          <th
            key={col}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            {col}
          </th>
        ))}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map((row) => (
        <tr key={row.id}>
          {columns.map((col, i) => (
            <td
              key={i}
              className={`px-6 py-4 whitespace-nowrap text-sm text-gray-500`}
            >
              {row[col]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;

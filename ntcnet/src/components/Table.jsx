import React from 'react';
import { CardHeading } from '../exports';

const Table = ({ data = [], title, subHeading }) => {
  const headers = data[0]?.map((item) => item.label) || [];

  return (
    <div className="px-2 py-5 rounded-2xl w-full shadow-[0_6px_30px_rgba(0,0,0,0.7)]  border border-[#2a2f3a]">
      <CardHeading title={title} subHeading={subHeading} />

      {/* Scrollable Container */}
      <div className="mt-5 w-full max-h-[70vh] min-h-52 rounded-xl border border-[#2d2f36] overflow-auto relative">
        <table className="w-full table-fixed text-sm text-left border-separate border-spacing-0">
          {/* Sticky Table Header */}
          <thead className="sticky top-0 z-10 bg-[#1c1f26]">
            <tr>
              {headers.map((label, idx) => (
                <th
                  key={idx}
                  className="px-3 py-3 text-xs sm:text-sm font-semibold text-[#f5c679] border-b border-[#333] text-center"
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
         <tbody className="h-full">
  {data.length === 0 ? (
    <tr>
      <td
        colSpan={headers.length}
        className="py-20 text-center text-gray-400"
      >
        <div className="flex items-center justify-center h-full">
          No data available
        </div>
      </td>
    </tr>
  ) : (
    data.map((row, rowIndex) => (
      <tr key={rowIndex} className="text-gray-200 text-center">
        {row.map((col, colIndex) => (
          <td
            key={colIndex}
            className="px-3 py-4 text-xs sm:text-sm break-words whitespace-pre-wrap border-b border-[#2a2a2a] max-w-[140px]"
          >
            {col.value}
          </td>
        ))}
      </tr>
    ))
  )}
</tbody>

        </table>
      </div>
    </div>
  );
};

export default Table;

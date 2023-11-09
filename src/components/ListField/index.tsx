import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ListField.css";
interface TableRow {
  [key: string]: any;
}

interface TableProps {
  fields: string[];
  rows: string[];
  tableData: TableRow[];
  onDelete?: (id: number) => void;
  onViewDetail?: (rowData: TableRow) => void;
  title: string;
  addAction?: () => void;
}

const TableList: React.FC<TableProps> = ({
  fields,
  tableData,
  onDelete,
  onViewDetail,
  title,
  rows,
  addAction,
}) => {
  const [data, setData] = useState<TableRow[]>(tableData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [id, setId] = useState(-1);
  const titleCase = (text: string) => {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toLowerCase() + word.slice(1))
      .join("");
  };
  useEffect(() => {
    setData(tableData);
    setCurrentPage(1);
  }, [tableData]);

  const popup = () => {
    return (
      <div className="popup-container">
        <div className="popup-content">
          <div className="flex pb-3 items-center">
            <div className="-ml-1 text-gray-600 dark:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" icon-tabler icon-tabler-trash"
                width={32}
                height={32}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={4} y1={7} x2={20} y2={7} />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg>
            </div>
            <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pl-2">
              Are you sure to delete?
            </p>
          </div>
          <div className="button-container">
            <button
              className="focus:outline-none bg-red-400 transition duration-150 ease-in-out hover:bg-red-500 rounded text-white px-3 py-2 text-xs"
              onClick={onFinish}
            >
              Delete Account
            </button>
            <button
              className="focus:outline-none bg-green-400 transition duration-150 ease-in-out hover:bg-green-500 rounded text-white px-3 py-2 text-xs"
              onClick={() => setShowPopup(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  const searchByKeyword = (keyword: string) => {
    const filteredData = tableData.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(keyword.toLowerCase()),
      ),
    );
    setData(filteredData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleDelete = (id: number) => {
    setShowPopup(true);
    setId(id);
  };
  const onFinish = () => {
    setShowPopup(false);
    onDelete && onDelete(id);
  };

  return (
    <Card title={title}>
      <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
        <div className="action">
          <div className="relative w-full max-w-md mr-2 mb-4">
            <input
              type="text"
              className="w-full pr-10 pl-4 py-2 border rounded-lg"
              placeholder="Search..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => searchByKeyword(searchKeyword)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" icon-tabler icon-tabler-search"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
            </button>
          </div>
          <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
            <button>
              <svg
                onClick={addAction}
                xmlns="http://www.w3.org/2000/svg"
                className=" icon-tabler icon-tabler-plus"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1={12} y1={5} x2={12} y2={19} />
                <line x1={5} y1={12} x2={19} y2={12} />
              </svg>
            </button>
          </div>
        </div>

        <table className="custom-table">
          <thead>
            <tr className="table-header">
              {fields.map((field, index) => (
                <th key={index}>{field}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {rows.map((rowKey, index) => (
                  <td key={index}>{row[rowKey]}</td>
                ))}
                <td>
                  {onDelete && (
                    <button
                      className="action-button"
                      onClick={() => handleDelete(row.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-trash"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </button>
                  )}
                  <Link to={`${row.id}`}>
                    <button className="action-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon-search"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                      </svg>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-center mt-4">
          <button
            className="mr-2 px-3 py-1 border rounded"
            onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          <span className="px-2">
            Page {currentPage} / {Math.ceil(data.length / itemsPerPage)}
          </span>
          <button
            className="ml-2 px-3 py-1 border rounded"
            onClick={() =>
              currentPage < Math.ceil(data.length / itemsPerPage) &&
              onPageChange(currentPage + 1)
            }
            disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
          >
            Next Page
          </button>
        </div>
      </div>
      {showPopup && popup()}
    </Card>
  );
};

export default TableList;

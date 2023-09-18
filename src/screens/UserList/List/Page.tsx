import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface TableRow {
  id: number;
  phone: string;
  client: string;
  companyContact: string;
  appointment: string;
  createAt: string;
  isChecked: boolean;
}

const Index = () => {
  const [tableData, setTableData] = useState<TableRow[]>([
    {
      id: 1,
      phone: '10023',
      client: 'Nguyễn Văn A',
      companyContact: 'Carrie Anthony',
      appointment: '2',
      createAt: '02.03.20',
      isChecked: false,
    },
    {
      id: 2,
      phone: '10024',
      client: 'Trần Thị B',
      companyContact: 'John Smith',
      appointment: '3',
      createAt: '02.04.20',
      isChecked: false,
    },
    // Add more data if needed
  ]);

  const [data, setData] = useState(tableData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const checkAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    const updatedData = tableData.map((row) => ({
      ...row,
      isChecked,
    }));
    setData(updatedData);
  };

  const tableInteract = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const isChecked = event.target.checked;
    const updatedData = tableData.map((row) =>
      row.id === id ? { ...row, isChecked } : row
    );
    setData(updatedData);
  };

  const searchByClient = (keyword: string) => {
    const filteredData = tableData.filter((row) =>
      row.client.toLowerCase().includes(keyword.toLowerCase())
    );
    setData(filteredData);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="py-20">
      <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
        <div className="flex flex-col lg:flex-row p-4 lg:p-8 justify-between items-start lg:items-stretch w-full">
          <div className="w-full lg:w-1/3 flex flex-col lg:flex-row items-start lg:items-center">
            <div className="flex items-center">
              <a
                className="text-red-500 p-2 border-transparent border bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-200 cursor-pointer rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray"
                href="javascript: void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon cursor-pointer icon-tabler icon-tabler-trash"
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
                  <line x1={4} y1={7} x2={20} y2={7} />
                  <line x1={10} y1={11} x2={10} y2={17} />
                  <line x1={14} y1={11} x2={14} y2={17} />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-start lg:items-center justify-end">
            <div className="lg:ml-6 flex items-center">
              <div className="text-white ml-4 cursor-pointer focus:outline-none border border-transparent focus:border-gray-800 focus:shadow-outline-gray bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 w-8 h-8 rounded flex items-center justify-center">
              <Link to="admin/customer/add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus"
                  width={28}
                  height={28}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
          <div className="w-full flex items-center justify-between mb-4">
            <div className="relative w-full max-w-md mr-2">
              <input
                type="text"
                className="w-full pr-10 pl-4 py-2 border rounded-lg"
                placeholder="Tìm kiếm theo client..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => searchByClient(searchKeyword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
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
            
          </div>
          <table className="min-w-full bg-white dark:bg-gray-800">
            <thead>
              <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  <input
                    type="checkbox"
                    className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                    onChange={checkAll}
                  />
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Phone
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Client
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Appointment
                </th>
                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                  Create At
                </th>
                <td className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">
                  More
                </td>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row) => (
                <tr
                  key={row.id}
                  className="h-24 border-gray-300 dark:border-gray-200 border-b"
                >
                  <td className="pl-8 pr-6 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    <input
                      type="checkbox"
                      className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 outline-none"
                      onChange={(event) => tableInteract(event, row.id)}
                      checked={row.isChecked}
                    />
                  </td>

                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {row.phone}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {row.client}
                  </td>

                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {row.appointment}
                  </td>
                  <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                    {row.createAt}
                  </td>

                  <td className="pr-8 relative">
                    <div className="flex">
                      <button className="text-red-500 rounded cursor-pointer border border-transparent focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-x dropbtn"
                          width={28}
                          height={28}
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />
                          <line x1={18} y1={6} x2={6} y2={18} />
                          <line x1={6} y1={6} x2={18} y2={18} />
                        </svg>
                      </button>
                      <Link to={`${row.id}`}>

                      <button className="text-gray-500 rounded cursor-pointer border border-transparent focus:outline-none ml-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-search dropbtn"
                          width={28}
                          height={28}
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
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="mr-2 px-3 py-1 border rounded"
            onClick={() =>
              currentPage > 1 && onPageChange(currentPage - 1)
            }
            disabled={currentPage === 1}
          >
            Trang trước
          </button>
          <span className="px-2">
            Trang {currentPage} /{' '}
            {Math.ceil(data.length / itemsPerPage)}
          </span>
          <button
            className="ml-2 px-3 py-1 border rounded"
            onClick={() =>
              currentPage < Math.ceil(data.length / itemsPerPage) &&
              onPageChange(currentPage + 1)
            }
            disabled={
              currentPage >=
              Math.ceil(data.length / itemsPerPage)
            }
          >
            Trang tiếp theo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

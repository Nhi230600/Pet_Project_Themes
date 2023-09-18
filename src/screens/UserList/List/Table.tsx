import React, { useState } from 'react';

// Define the interface for table row data
interface TableRow {
    id: number;
    phone: string;
    client: string;
    companyContact: string;
    appointment: string;
    createAt: string;
    isChecked: boolean;
}

function Table() {
    const tableData: TableRow[] = [
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
    ];

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

    const [data, setData] = useState(tableData);

    return (
        <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
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
                    {data.map((row) => (
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
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

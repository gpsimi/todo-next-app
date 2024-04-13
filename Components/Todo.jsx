import React from 'react'

const Todo = () => {
    return (
        <tr className="bg-white border-b ">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-00 whitespace-nowrap "
            >
                1
            </th>
            <td className="px-6 py-4">Study</td>
            <td className="px-6 py-4">Learn Next JS</td>
            <td className="px-6 py-4">Pending</td>
            <td className="px-6 py-4 flex gap-1">
                <button className="py-2 px-4 text-white bg-red-500">
                    Delete
                </button>
                <button className="py-2 px-4 text-white bg-green-500">
                    Done
                </button>
            </td>


        </tr>
    )
}

export default Todo
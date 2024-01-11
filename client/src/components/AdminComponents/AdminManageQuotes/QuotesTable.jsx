import { MaterialReactTable, } from 'material-react-table';
import { FaRegTrashAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import axiosInstance from '../../../axios-config/axios.config';
import Swal from 'sweetalert2';

const QuotesTable = ({ allQuotes, refetch, setRefetch }) => {


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosInstance.delete(`/api/quotes/delete/${id}`)
                    .then((res) => {
                        console.log("delete res", res);
                        if (res.status === 200) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Quote has been deleted.",
                                icon: "success"
                            });
                            setRefetch(!refetch)
                        }
                    })
                    .then((error) => {
                        console.error(error);
                    })
            }
        });

    }



    const columns = [
        {
            header: "Service name",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.serviceName}
                </p>
            ),
            size: 20
        },
        {
            header: "Service date",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.serviceDate}
                </p>
            ),
            size: 20
        },
        {
            header: "Service time",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.timeSlot}
                </p>
            ),
            size: 20
        },
        {
            header: "Requested by",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.requestBy}
                </p>
            ),
            size: 20
        },
        {
            header: "Phone",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.phone}
                </p>
            ),
            size: 20
        },
        {
            header: "Email",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.email}
                </p>
            ),
            size: 20
        },
        {
            header: "Message",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.message}
                </p>
            ),
            size: 20
        },
        {
            header: "Submitted on",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row.original.createdAt}
                </p>
            ),
            size: 20
        },

        {
            header: "Action",
            Cell: ({ row }) => (
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <button
                        onClick={(row.original._id)}
                        className='bg-green-700 px-2 py-1 text-white rounded-lg hover:opacity-90 cursor-pointer '>Approve
                    </button>
                    <button
                        onClick={() => handleDelete(row.original._id)}
                        className='bg-red-500 text-xl text-center px-6 py-1 text-white rounded-lg hover:opacity-90 cursor-pointer '><FaRegTrashAlt />
                    </button>
                </div>
            ),
            size: 20
        },

    ]

    return (

        allQuotes.length > 0 ? (
            <MaterialReactTable
                rowNumberMode="original"
                columns={columns}
                data={allQuotes}
            />
        ) : (
            <p className='text-center mt-10'>No services available </p>
        )

    )

};

export default QuotesTable;



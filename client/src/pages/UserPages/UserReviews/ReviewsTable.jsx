import { MaterialReactTable, } from 'material-react-table';
import { FaRegTrashAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useSelector } from 'react-redux';

const ReviewsTable = ({ handleDelete,userReview }) => {

    const columns = [
        {
            header: "Review title",
            Cell: ({ row }) => (
                <p className='break-words max-w-[150px]'>
                    {row.original.reviewTitle}
                </p>
            ),
            size: 100
        },
      
        {
            header: "Review Message",
            Cell: ({ row }) => (
                <p className='break-words max-w-[200px]'>
                    {row.original.reviewMsg}
                </p>
            ),
            size: 100
        },

        {
            header: "Review rating",
            Cell: ({ row }) => (
                <Rating
                    initialRating={row.original.reviewRating}
                    readonly
                    emptySymbol={<FaStar className="text-gray-400 text-2xl" />}
                    fullSymbol={<FaStar className="text-[#F63E7B] text-2xl" />}
                />
            ),
            size: 100
        },
        {
            header: "Action",
            Cell: ({ row }) => (
                <button
                    onClick={() => handleDelete(row.original._id)}
                    className='bg-red-500 text-xl px-2 py-1 text-white rounded-lg hover:opacity-90 cursor-pointer '><FaRegTrashAlt />
                </button>
            ),
            size: 100
        },
    ]

    return (

        <MaterialReactTable
            rowNumberMode="original"
            columns={columns && columns}
            data={userReview}
        />

    )

};

export default ReviewsTable;



import { MaterialReactTable, } from 'material-react-table';
import DeleteEditButton from '../../DeleteEditButton/DeleteEditButton';
import { useSelector } from 'react-redux';
import ServiceStatusToggle from '../../ServiceStatusToggle/ServiceStatusToggle';

const ServicesTable = ({services, handleEditService, handleDelete, refetch, setRefetch }) => {

    console.log("services", services);


    const columns = [
        {
            header: "Service title",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.serviceTitle}
                </p>
            ),
            size: 100
        },
        {
            header: "Service Desc",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.serviceDesc}
                </p>
            ),
            size: 100
        },
        {
            header: "Service Price",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.servicePrice}
                </p>
            ),
            size: 100
        },
        {
            header: "Service Image",
            Cell: ({ row }) => (
                <img
                    className='h-16'
                    src={row?.original?.serviceImage}
                    alt='service-img'
                ></img>
            ),
            size: 100
        },
        {
            header: "Status",
            Cell: ({ row }) => (
                <ServiceStatusToggle
                    row={row}
                    refetch={refetch}
                    setRefetch={setRefetch}
                >
                </ServiceStatusToggle>
            ),
            size: 100
        },
        {
            header: "Action",
            Cell: ({ row }) => (
                <DeleteEditButton
                    handleEdit={() => handleEditService(row?.original?._id)}
                    handleDelete={() => handleDelete(row?.original?._id)}
                ></DeleteEditButton>
            ),
            size: 100
        },
    ]

    return (
        services ? (
            <MaterialReactTable
                rowNumberMode="original"
                columns={columns}
                data={services}
            />
        ) : (<p className='text-center mt-10'>No services available </p>)

    )

};

export default ServicesTable;



import { MaterialReactTable, } from 'material-react-table';
import { useSelector } from 'react-redux';
import ConfirmDoneButton from '../../ConfirmDoneButton/ConfirmDoneButton';

const AppointmentsTable = ({ allAppointments,refetch, setRefetch }) => {

    console.log("allAppointments", allAppointments);

    const columns = [
        {
            header: "Service name",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.serviceDetails?.serviceTitle}
                </p>
            ),
            size: 50
        },
        {
            header: "Service date",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.serviceDate}
                </p>
            ),
            size: 50
        },
        {
            header: "Service time",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.timeSlot}
                </p>
            ),
            size: 50
        },
        {
            header: "Requested by",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.fullName}
                </p>
            ),
            size: 50
        },
        {
            header: "Email",
            Cell: ({ row }) => (
                <p className='break-words max-w-[120px]'>
                    {row?.original?.email}
                </p>
            ),
            size: 50
        },
        {
            header: "Action",
            Cell: ({ row }) => (
                <ConfirmDoneButton
                    row={row}
                    refetch={refetch}
                    setRefetch={setRefetch}
                ></ConfirmDoneButton>
            ),
            size: 50
        },
    ]

    return (
        !allAppointments ? (
            <p className='text-center mt-10'>No appointments available </p>
        ) : (
            <MaterialReactTable
                rowNumberMode="original"
                columns={columns}
                data={allAppointments}
            />
        )
    )

};

export default AppointmentsTable;



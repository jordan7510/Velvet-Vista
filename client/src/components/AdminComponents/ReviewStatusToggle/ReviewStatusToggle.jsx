import axiosInstance from '../../../axios-config/axios.config';
import Switch from "@mui/material/Switch";

const ReviewStatusToggle = ({ row, setRefetch, refetch }) => {

    const handleChange = (event) => {
        const checkValue = event.target.checked

        axiosInstance.patch(`/api/reviews/edit-review/${row?.original?._id}`, { status: checkValue })
            .then((res) => {
                if (res.data._id) {
                    setRefetch(!refetch)
                }
                console.log("update result", res.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    return (
        <Switch
            checked={row.original.reviewStatus}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />

    );
};

export default ReviewStatusToggle;
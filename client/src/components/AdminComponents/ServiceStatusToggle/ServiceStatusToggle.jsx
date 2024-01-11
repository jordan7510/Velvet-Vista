import React from 'react';
import Switch from "@mui/material/Switch";
import axiosInstance from '../../../axios-config/axios.config';

const ServiceStatusToggle = ({ row, refetch, setRefetch }) => {

    console.log("row data", row);

    const handleChange = (e) => {
        const checkValue = e.target.checked;
        axiosInstance.put(`/api/services/edit-service/${row?.original?._id}`, { serviceStatus: checkValue })
            .then((res) => {
                if (res.status === 200) {
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
            checked={row?.original?.serviceStatus}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default ServiceStatusToggle;
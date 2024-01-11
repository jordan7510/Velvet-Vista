import React, { useEffect, useState } from 'react';
import QuotesTable from './QuotesTable';
import axiosInstance from '../../../axios-config/axios.config';

const AdminManageQuotes = () => {

    const [allQuotes, setAllQuotes] = useState([])
    const [refetch, setRefetch] = useState(false)


    useEffect(() => {
        axiosInstance.get("/api/quotes")
            .then((res) => {
                console.log(res);
                setAllQuotes(res.data)
            })
            .catch((error) => {
                console.error(error);
                setAllQuotes([])
            })
    }, [refetch])



    console.log("allQuotes", allQuotes);



    return (
        <div className='h-[89vh] overflow-y-scroll bg-white p-5'>
            <div className='flex  items-center justify-between p-4 bg-gray-300 rounded-t-lg'>
                <p className='text-xl font-bold'>Manage Quotes</p>

            </div>

            <div className='md:max-w-[77vw]'>
                <QuotesTable
                    refetch={refetch}
                    setRefetch={setRefetch}
                    allQuotes={allQuotes}
                ></QuotesTable>
            </div>

        </div>
    );
};

export default AdminManageQuotes;
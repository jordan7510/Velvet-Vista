import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";


const DeleteEditButton = ({ handleEdit, handleDelete }) => {

    return (
        <div className='flex flex-col items-center justify-center gap-2'>

            <button
                onClick={handleEdit}
                className='bg-slate-600 text-xl px-5 py-1 text-white rounded-lg hover:opacity-90 cursor-pointer '><FaEdit />
            </button>

            <button
                onClick={handleDelete}
                className='bg-red-500 text-xl px-5 py-1 text-white rounded-lg hover:opacity-90 cursor-pointer '><FaRegTrashAlt />
            </button>
            
        </div>
    );
};

export default DeleteEditButton;
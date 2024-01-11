import React, { useEffect, useRef, useState } from 'react';
import ServicesTable from './ServicesTable/ServicesTable';
import { FaXmark } from "react-icons/fa6";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../../firebase';
import axiosInstance from '../../../axios-config/axios.config';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../../../redux/service/serviceSlice';

const ManageServices = () => {
    const [ismodalshow, setIsModalshow] = useState(true)
    const [image, setImage] = useState(undefined)
    const filePickerRef = useRef(null)
    const [imagePercent, setImagePercent] = useState(0)
    const [imageError, setImageError] = useState(false)
    const [formData, setFormdata] = useState({})
    const [services, setServices] = useState([])

    // const { allServices: services } = useSelector((state) => state.services)
    const [isEdit, setIsEdit] = useState(false)
    const [isAdd, setIsAdd] = useState(false)
    const [editServiceId, setEditServiceId] = useState(null)
    const [editServiceDetails, setEditServiceDetails] = useState({})
    const [refetch, setRefetch] = useState(false)

    useEffect(() => {
        axiosInstance.get("/api/services")
            .then((res) => {
                // console.log(res.data.result);
                if (res.status === 200) {
                    setServices(res.data.result)
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }, [refetch])


    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (image) {
            handleImageUpload(image)
        }
    }, [image])

    const handleImageUpload = async (image) => {
        const storage = getStorage(app)
        const imageName = new Date().getTime() + image.name
        const storageRef = ref(storage, imageName)
        const uploadTask = uploadBytesResumable(storageRef, image)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log(`Upload is ${progress} % done.`);
            setImagePercent(Math.floor(progress))
        },
            (error) => {
                setImageError(true)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadUrl) => setFormdata({ ...formData, serviceImage: downloadUrl }))
            }
        )
    }

    const handleAddServiceButton = () => {
        setIsModalshow(!ismodalshow)
        setIsEdit(false)
        setIsAdd(true)
    }

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        setFormdata({...formData, serviceStatus: "true"})
        console.log("formData",formData);
        axiosInstance.post("/api/services/add-service", formData)
            .then((res) => {
                console.log("Add service response", res);
                if (res.status === 200) {
                    form.reset();
                    setIsModalshow(!ismodalshow)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "New service has been added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setFormdata({})
                    setRefetch(!refetch)
                }
            })
            .catch((error) => {
                console.error(error);
            })

    }

    const handleEditService = (id) => {
        const editServiceDetails = services.filter(item => item._id === id)
        setEditServiceDetails(editServiceDetails[0])
        setEditServiceId(id)
        setIsEdit(true)
        if (editServiceDetails && editServiceDetails) {
            setIsModalshow(!ismodalshow)
        }
    }

    const handleEditSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        axiosInstance.put(`/api/services/edit-service/${editServiceId}`, formData)
            .then((res) => {
                console.log("Edit response", res);
                if (res.status === 200) {
                    form.reset();
                    setIsModalshow(!ismodalshow)
                    Swal.fire({
                        title: "Updated!",
                        text: "Service has been updated.",
                        icon: "success"
                    });
                    setRefetch(!refetch)

                }
            })
            .catch((error) => {
                console.error(error);
            })
    }


    const handleDelete = (id) => {
        console.log("delete id", id);

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
                axiosInstance.delete(`/api/services/delete-service/${id}`)
                    .then((res) => {
                        console.log("delete response", res);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Service has been deleted.",
                            icon: "success"
                        });
                        setRefetch(!refetch)
                    })
                    .catch((error) => {
                        console.error(error);
                    })
            }
        });
    }

    return (
        <div className='h-[87vh] overflow-y-scroll bg-white p-5'>
            <div className='flex  items-center justify-between p-4 bg-gray-300 rounded-t-lg'>
                <p className='text-xl font-bold text-black'>Manage services</p>
                {/* Add Service Modal */}
                <div>
                    <button onClick={handleAddServiceButton} type="button" className="px-5 py-2  font-semibold rounded-full bg-[#F63E7B] hover:cursor-pointer hover:opacity-80 dark:text-white">Add Services</button>

                    <div className={`max-w-2xl absolute z-20 left-1/2  transition-all duration-300 ease-in-out transform -translate-x-1/2 ${ismodalshow ? 'top-[-495px]' : ""}${!ismodalshow ? 'top-[100px]' : ""}`}>
                        <div className="relative flex flex-col items-center md:min-w-[350px] max-w-lg gap-4 rounded-md shadow-md sm:p-8 bg-slate-600 dark:text-gray-100">
                            <div>
                                {/* Close button */}
                                <button
                                    onClick={() => setIsModalshow(!ismodalshow)}
                                    className="absolute top-2 right-2 text-2xl ">
                                    <FaXmark></FaXmark>
                                </button>
                            </div>

                            <div className='w-[100%]'>
                                <form onSubmit={isEdit && isEdit ? handleEditSubmit : handleAddService} className='text-black'>
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 mb-2">
                                        <div>
                                            <input
                                                className="w-full rounded-md border-2 outline-none p-3 text-sm"
                                                placeholder="Service Heading"
                                                type="text"
                                                name='serviceTitle'
                                                onChange={handleChange}
                                                required
                                                defaultValue={isEdit ? editServiceDetails.serviceTitle : null}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 mb-2">
                                        <div>
                                            <textarea
                                                className="w-full rounded-md border-2 outline-none p-3 text-sm"
                                                placeholder="Service Details"
                                                name='serviceDesc'
                                                rows="5"
                                                cols="1"
                                                onChange={handleChange}
                                                required
                                                defaultValue={isEdit ? editServiceDetails.serviceDesc : ""}
                                            >
                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-1">
                                        <div>
                                            <input
                                                className="w-full rounded-md border-2 outline-none p-3 text-sm"
                                                placeholder="Service Price"
                                                type="text"
                                                name='servicePrice'
                                                onChange={handleChange}
                                                required
                                                defaultValue={isEdit ? editServiceDetails.servicePrice : null}
                                            />
                                        </div>
                                        <div className='flex flex-col items-center self-center justify-center py-2'>
                                            {/* <div className='flex border items-center self-center justify-center h-[50px] w-[50px] rounded-full'>
                                                
                                                <img className='rounded-full self-center cursor-pointer object-cover' src={isEdit ? editServiceDetails.serviceImage : isAdd ? formData.serviceImage : null} alt="service-img" />
                                                
                                            </div> */}
                                            <p className='self-center text-sm'>
                                                {
                                                    imageError ? (<span className='text-red-600'>Error Uploading image (File must be an image and size must be under 2MB) </span>) :
                                                        imagePercent > 0 && imagePercent < 100 ? (<span>{`Uploading ${imagePercent}%`}</span>) :
                                                            imagePercent === 100 ? (<span className='text-green-500'>Image Uploaded successfully.</span>) : ""
                                                }
                                            </p>

                                            <button
                                                onClick={() => filePickerRef.current.click()}
                                                className="inline-block  bg-[#62c05d] py-1 font-medium text-white sm:w-[50%] rounded-md"
                                                type='button'>Choose Image</button>
                                            <input
                                                className="w-full appearance-none rounded-md outline-none p-3 text-sm focus:outline-none"
                                                name='serviceImg'
                                                type="file"
                                                ref={filePickerRef}
                                                hidden
                                                onChange={(e) => setImage(e.target.files[0])}
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <button
                                            type="submit"
                                            className="inline-block   w-[50%] bg-[#F63E7B]  py-2 font-medium text-white sm:w-[50%] rounded-md"
                                        >
                                            {
                                                isEdit ? "Save changes" : "Add Service"
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add Service modal end */}
            </div>
            <ServicesTable
                services={services}
                handleEditService={handleEditService}
                handleDelete={handleDelete}
                refetch={refetch}
                setRefetch={setRefetch}
            ></ServicesTable>
        </div>
    );
};

export default ManageServices;
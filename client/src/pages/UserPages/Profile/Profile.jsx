import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app } from '../../../firebase';
import axiosInstance from '../../../axios-config/axios.config';
import { useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from '../../../redux/user/userSlice';
import { ImSpinner3 } from 'react-icons/im';
import Spinner from '../../../components/Spinner/Spinner';
import Swal from 'sweetalert2';

const Profile = () => {
    const { loading } = useSelector((state) => state.user)
    const { currentUser } = useSelector((state) => state.user)
    const filePickerRef = useRef(null)
    const [image, setImage] = useState(undefined)
    const [imagePercent, setImagePercent] = useState(0)
    const [imageError, setImageError] = useState(false)
    const [formData, setFormdata] = useState({})
    const dispatch = useDispatch()

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
                    .then((downloadUrl) => setFormdata({ ...formData, profilePicture: downloadUrl }))
            }
        )
    }

    const handleChange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(updateUserStart())
        axiosInstance.post(`api/user/update/${currentUser._id}`, formData, {
            withCredentials: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                console.log("update response", res);
                if (res.status === 200) {
                    dispatch(updateUserSuccess(res.data))
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Profile updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch((error) => {
                console.error("Error updating profile.", error);
                dispatch(updateUserFailure(error))
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again later.",
                });
            })

        // try {
        //     const res = await fetch(`/api/user/update/${currentUser._id}`, {
        //         method: "POST",
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         credentials: 'include',
        //         body: JSON.stringify(formData)
        //     });
        //     console.log("fetch result", res);
        //     const data = await res.json();
        // } catch (error) {
        //     console.error(error);
        // }
    }

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete profile!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosInstance.delete(`/api/user/delete/${currentUser._id}`)
                    .then((res) => {
                        console.log("delete response", res);
                        if (res.status === 200) {
                            dispatch(deleteUserSuccess())
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your profile has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch((error) => {
                        dispatch(deleteUserFailure(error))
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Something went wrong. Please try again later.",
                        });
                        console.error(error);
                    })
            }
        });
    }

    console.log("formData", formData);

    return (
        <div className='bg-slate-200 w-full h-[90vh] overflow-y-auto'>
            <div className='p-3 max-w-lg mx-auto'>
                <h2 className='font-semibold text-2xl text-center'>Profile</h2>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

                    <input type='file' ref={filePickerRef} hidden accept='image/*'
                        onChange={(e) => setImage(e.target.files[0])}
                    ></input>

                    <div className='flex items-center self-center justify-center h-[150px] w-[150px] rounded-full'>
                        <img src={formData.profilePicture || currentUser.profilePicture}
                            className='rounded-full self-center cursor-pointer object-cover '
                            alt="profile-img"
                            onClick={() => filePickerRef.current.click()}
                        />
                    </div>
                    <p className='self-center text-sm'>
                        {
                            imageError ? (<span className='text-red-600'>Error Uploading image (File must be an image and size must be under 2MB) </span>) :
                                imagePercent > 0 && imagePercent < 100 ? (<span>{`Uploading ${imagePercent}%`}</span>) :
                                    imagePercent === 100 ? (<span className='text-green-500'>Image Uploaded successfully.</span>) : ""
                        }
                    </p>

                    <input onChange={handleChange} type="text" name='name' placeholder='Full name' className='bg-slate-100 p-3 rounded-lg'
                        defaultValue={currentUser.name}
                    />
                    <input onChange={handleChange} type="email" name='email' placeholder='Email ID' className='bg-slate-100 p-3 rounded-lg'
                        defaultValue={currentUser.email}
                    />

                    <input onChange={handleChange} type="password" name='password' placeholder='Password' className='bg-slate-100 p-3 rounded-lg' />


                    <button className='bg-slate-800 text-white p-3 flex items-center justify-center rounded-lg hover:opacity-90 disabled:opacity-80' >
                        {
                            loading ? (<Spinner />) : "UPDATE"
                        }
                    </button>
                </form>
                <div className='mt-5'>
                    <span onClick={handleDelete} className='text-red-700 cursor-pointer '>Delete account</span>
                </div>
            </div>

        </div>
    );
};

export default Profile;
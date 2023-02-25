import React, { useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { API } from "./../constant/constant"
import View_All from './View_All'

const Teacher_mngmnt = () => {

    const [studentList, setStudentList] = React.useState([])
    const [reviewedPaper, setReviewedPaper] = React.useState([])
    const [toBeReviewedPaper, setToBeReviewedPaper] = React.useState([])
    const [changeStatus, setChangeStatus] = React.useState(false)


    const [count, setCount] = useState(0);

    const getuser = () => {

        axios.get(`${API}/student-list`)
            .then(function (response) {
                // handle success
                // console.log(response.data)
                const sliced = response.data.slice(0, 4);
                setStudentList(sliced);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    React.useEffect(() => {
        getuser();
    }, [])

    const getReviewedPaper = () => {

        axios.get(`${API}/image_upload/getall`, {
            headers: {
                'content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        })
            .then(function (response) {
                // handle success
                console.log(response.data)
                const sliced = response.data.slice(0, 4);
                setReviewedPaper(sliced);
               
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    React.useEffect(() => {
        getReviewedPaper();
    }, [])

    const getToBeReviewedPaper = () => {
        axios.get(`${API}/image_upload/getallreviewed`, {
            headers: {
                'content-type': 'application/json',
                'token': localStorage.getItem('token')
            }
        }).then(function (response) {
            //handle success
            // console.log(response.data)
            const sliced = response.data.slice(0, 4);
            setToBeReviewedPaper(sliced)
         
        }).catch(function (error) {
            //handle error
            console.log(error)
        })
    }
    React.useEffect(() => {
        getToBeReviewedPaper();
    }, [])

    const changeStatusHandler = (_id) => {
        console.log(_id)
        axios.put(`${API}/image_upload/updatestatus/${_id}`, {
            status: 'reviewed'
        }, {
            headers: {
                'content-type': 'application/json',
                'token': localStorage.getItem('token')
            }

        }).then(function (response) {
            //handle success
            // console.log(response.data)
            setChangeStatus(true)
        }).catch(function (error) {
            //handle error
            console.log(error)
        })
    }




    return (
        <div>
            <section>
                <div className='flex  justify-between border'>
                    <div className=' p-2 w-[200px] ml-2 border'>
                        <button>STUDENT LIST</button>
                    </div>
                    <div className='bg-[#19BC95] text-white cursor-pointer p-2 w-[200px]'>
                        <Link to="/view-all">
                            <button >View All</button>
                        </Link>
                    </div>

                </div>
                <div className='px-3'>

                    <div className='flex flex-wrap'>
                        {studentList.length == 0 && (
                             <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7  bg-[#19BC95] rounded-lg shadow-md text-white flex flex-col justify-center items-center' >
                                 <div>Empty Name</div>
                                 <div>Empty Email</div>
                                 <div></div>
                             </div>
                        )}
                        { studentList.length > 0 && studentList.map((item, index) => (

                            <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7  bg-[#19BC95] rounded-lg shadow-md text-white flex flex-col justify-center items-center' key={index
                            }>
                                <div>{item.firstName}</div>
                                <div>{item.email}</div>
                                <div>{item.contactNumber}</div>
                            </div>
                        )
                        )}

                        {/* <div className='w-[250px] h-[150px] bg-[#19BC95] rounded-lg shadow-md text-white flex flex-col justify-center items-center'>
                            <div>Neeraj chaudhary</div>
                            <div>neeraj@gmail.com</div>
                            <div>5874457844</div>
                        </div>
                        */}
                    </div>
                </div>
                {/* =====Reviewed papaer======== */}
                <div className='flex justify-between  border'>

                    <div className='p-2 w-[200px] ml-2 border'>
                        <button> TO BE REVIEWED PAPER</button>
                    </div>
                    <div className='bg-[#19BC95] cursor-pointer text-white p-2 w-[200px] '>
                        <Link to="/reviewed-list">
                            <button >View All</button>
                        </Link>
                    </div>

                </div>
                <div className='px-3'>
                    <div className=' flex  flex-wrap'>
                        {
                            reviewedPaper.length ==0 &&(
                                <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7 bg-[#ffc001] rounded-lg shadow-md text-black flex flex-col justify-center items-center'>
                                <div>Empty Name</div>
                                <div>Empty File Name</div>
                                
                                <a target='_blank'
                                    className='bg-white mt-2 w-[100px] h-[30px] rounded-md text-black px-2'>
                                    view
                                </a>
                            </div>
                            )
                        }

                        {reviewedPaper.length > 0 && reviewedPaper.map((item, index) => (
                            <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7   bg-[#ffc001] rounded-lg shadow-md text-black flex flex-col justify-center items-center' key={index}>
                                <div>{item.user.firstName}</div>
                                <div>{item.file_name}</div>
                                <div>{item.contactNumber}</div>
                                <a
                                    href={item.avatar}
                                    target='_blank'
                                    onClick={() => changeStatusHandler(item._id)}
                                    className='bg-white mt-2 w-[100px] h-[30px] rounded-md text-black px-2'>
                                    view

                                </a>
                                
                            </div>
                        ))}

                    </div>

                </div>

                {/* ==========to be reviewed paper========= */}
                <div className='flex justify-between border'>

                    <div className='p-2 w-[200px] ml-2 border'>
                        <button>REVIEWED PAPER</button>
                    </div>
                    <div className='bg-[#19BC95] text-white cursor-pointer p-2 w-[200px] '>
                        <Link to="/to-be-reviewed-list">
                            <button >View All</button>
                        </Link>
                    </div>

                </div>
                <div className='px-3'>
                    <div className=' flex flex-wrap'>
                        {toBeReviewedPaper.length === 0 && (
                        <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7  bg-indigo-600 rounded-lg shadow-md text-white flex flex-col justify-center items-center' >
                        <div>Empty Name</div>
                        <div>Empty File Name</div>
                        <a 
                            target='_blank'
                            className='bg-white mt-2 w-[100px] cursor pointer h-[30px] rounded-md text-indigo-600  px-2'>
                            View
                        </a>
                    </div>
                        )}
                        {toBeReviewedPaper.length > 0 &&
                            toBeReviewedPaper.map((item, index) => (
                                <div className='w-full sm:w-[270px] xl:w-[20%] h-[150px] xl:h-[200px] m-7  bg-indigo-600 rounded-lg shadow-md text-white flex flex-col justify-center items-center' key={index}>
                                    <div>{item.user.firstName}</div>
                                    <div>{item.file_name}</div>
                                    <a href={item.avatar}
                                        target='_blank'
                                        onClick={() => changeStatusHandler(item._id)}
                                        className='bg-white mt-2 w-[100px] h-[30px] rounded-md text-indigo-600  px-2'>
                                        View
                                    </a>
                                </div>
                            ))}
                        {/*
                         <div className='w-[250px] h-[150px] bg-indigo-600 rounded-lg shadow-md text-white flex flex-col justify-center items-center'>
                            <div>Neeraj chaudhary</div>
                            <div>neeraj@gmail.com</div>
                            <div>5874457844</div>
                        </div>
                        */}
                    </div>

                </div>


                {/* <div className='flex justify-between p-4'>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Student list</div>
                        {studentList.map((item, index) => (
                            <div className='text-left  p-2 font-semibold' key={index}>
                                {item.firstName}
                            </div>
                        ))}
                        
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                     
                    </div>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Reviewed paper</div>
                        {reviewedPaper.map((item, index) => (

                            <div className='flex justify-between p-2' key={index}>
                                <div className='text-left font-semibold'>
                                    {item.file_name}
                                </div>
                                <div >
                                    <button type='button' onClick={() => changeStatusHandler(item._id)} className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                                </div>
                            </div>

                        ))}

                    </div>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Paper to be reviewed</div>
                        {
                            toBeReviewedPaper.map((item, index) => (
                                <div className='flex justify-between p-2'>

                                    <div className='text-left font-semibold' key={index}>
                                        {item.file_name}
                                    </div>
                                    <div>
                                        <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                                    </div>
                                </div>

                            ))
                        }

                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                       
                    </div>
                </div> */}
                {/* <View_All /> */}
            </section>
        </div>
    )
}

export default Teacher_mngmnt
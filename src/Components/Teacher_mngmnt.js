import React from 'react'
import axios from 'axios'
import { API } from "./../constant/constant"
const Teacher_mngmnt = () => {

    const [studentList, setStudentList] = React.useState([])

    const getuser = () => {

        axios.get(`${API}/student-list`)
            .then(function (response) {
                // handle success
                console.log(response.data.students[0].firstName);
                setStudentList(response.data.students[0].firstName);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    React.useEffect(() => {
        getuser();
    }, [])

    return (
        <div>
            <section>
                <div className='flex justify-between p-4'>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Student list</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                        <div className='text-left  p-2 font-semibold'>Student 1</div>
                    </div>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Reviewed paper</div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-green-600 w-[50px] rounded-md text-white px-2'>view</button>
                        </div>
                    </div>
                    <div className='border w-full h-[80vh]'>
                        <div className='font-bold text-lg border p-3'>Paper to be reviewed</div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                        <div className='flex justify-between p-2'>
                            <div className='text-left font-semibold'>Student 1</div>
                            <button type='button' className='bg-indigo-600 text-white rounded-md w-[50px] px-2'>view</button>
                        </div>
                    </div>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Student Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{studentList}</td>
                            </tr>
                        </tbody>



                    </table>
                </div>
            </section>
        </div>
    )
}

export default Teacher_mngmnt
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API } from './../constant/constant'

const View_All = () => {
  const [studentList, setStudentList] = React.useState([])
  const getuser = () => {

    axios.get(`${API}/student-list`)
      .then(function (response) {
        // handle success
        // console.log(response.data)

        setStudentList(response.data);
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
      <div className='px-2'>
        <div className='flex justify-end '>
          <Link to="/teacher-management">
            <button className='p-3 bg-[#19BC95] w-[200px] text-white'>Close</button>
          </Link>
        </div>

        <div className='overflow-x-scroll'>
          <table className='w-full min-w-[600px]'>
            <thead >
              <tr className='border shadow-md'>
                <th className='p-2'>First Name</th>
                <th className='p-2'>Last Name</th>
                <th className='p-2'>Email</th>
              </tr>
            </thead> {studentList.map((item, index) => {
              return (
                <tr className='border' key={index}>
                  <td className='p-2' >{item.firstName}</td>
                  <td className='p-2'>{item.lastName}</td>
                  <td className='p-2'>{item.email}</td>


                </tr>)
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default View_All
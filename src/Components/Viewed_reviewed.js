import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { API } from './../constant/constant'

const Viewed_reviewed = () => {
  const [reviewedPaper, setReviewedPaper] = React.useState([])

  const getReviewedPaper = () => {

    axios.get(`${API}/image_upload/getall`, {
      headers: {
        'content-type': 'application/json',
        'token': localStorage.getItem('token')
      }
    })
      .then(function (response) {
        // handle success
        // console.log(response.data)
        setReviewedPaper(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }
  React.useEffect(() => {
    getReviewedPaper();
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
          <table className='w-full min-w-[800px]'>
            <thead >
              <tr className='border shadow-md'>
                <th className='p-2'>User id</th>
                <th className='p-2'>Name</th>
                <th className='p-2'>File name</th>
              </tr>
            </thead> {reviewedPaper.map((item, index) => {
              return (
                <tr className='border' key={index}>

                  <td className='p-2' >{item.user._id}</td>
                  <td className='p-2' >{item.user.firstName}</td>
                  <td className='p-2'>{item.file_name}</td>
                  <td className='p-2'>
                    <a href={item.avatar}
                      target="_blank"
                      className='px-2 bg-[#ffc001] w-[100px] h-[35px] rounded-md text-black text-center'
                    >View</a>
                  </td>

                </tr>)
            })}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Viewed_reviewed
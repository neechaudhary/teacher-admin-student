import React, { useState } from 'react'
import axios from 'axios'
import { API } from '../constant/constant'

const Student_upload = () => {
  const [file, setFile] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', file)
    axios
      .post(`${API}/image_upload/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'token': localStorage.getItem('token')
        }
        
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* upload button */}
      <div className='flex justify-center items-center w-full h-[100vh]'>
        <div className='flex flex-col'>
          <div>
            <div><input type="file" onChange={(e) => setFile(e.target.files[0])} /><span><button className='bg-indigo-600 p-2 text-white rounded-md' onClick={handleSubmit}>Submit</button></span></div>
          </div>
          <div className='text-2xl font-bold text-left'>Upload your file</div>
        </div>
      </div>
    </div>
  )
}

export default Student_upload
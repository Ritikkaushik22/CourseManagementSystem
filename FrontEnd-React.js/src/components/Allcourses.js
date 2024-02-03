import React from 'react'
import { useState,useEffect } from 'react'
import Course from "./Course"
import base_url from '../api/bootapi'
import axios from 'axios'
import { toast } from 'react-toastify'

function Allcourses() {
  
  useEffect(() => {

    getAllCoursesFromServer()

  }, [])



  //function to load function

  const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/courses`).then(
      
      (response)=>{
        //success
        console.log(response)
        console.log(response.data)
        toast.success("courses has been loaded",
        {position:'bottom-center'})
        setCourses(response.data)

      },
      (error)=>{
        console.log(error)
        toast.error("something went wrong")
      }
      
      )
  }
  

    const [courses, setCourses] = useState([
        // {title:"Java Course",description:"This is demo course"},
        // {title:"Django Course",description:"This is demo course"},
        // {title:"React.Js Course",description:"This is demo course"},
        // {title:"Angular.Js Course",description:"This is demo course"}
    ])


    const updateCourses=(id)=>{
      setCourses(courses.filter((c)=>c.id!==id))

    }




  return (
    <div>
        <h1>All Courses</h1>
        <p>List of courses are as follows</p>

        {

          courses.length>0? courses.map((item)=>(

            <Course key={item.id} course={item} update={updateCourses}/>
          )) : "No courses"

        }
      
    </div>
  )
}

export default Allcourses

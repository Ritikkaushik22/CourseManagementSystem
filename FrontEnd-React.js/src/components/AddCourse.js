import axios from 'axios';
import React, { useState } from 'react'
import { Button, Container, Form, FormGroup, Input } from 'reactstrap'
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

function AddCourse() {

    // useEffect(() => {
      
    // }, [])
    
    const[course,setCourse]=useState({});

    //form handler function

    const handleForm=(e)=>{
        
        console.log(course)
        postDatatoServer(course);
        e.preventDefault();
    }

    //creating func to post data

    const postDatatoServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response)
                console.log("success")
                toast.success("course added successfully")
                setCourse({id:"",title:"",description:""})

            },

            (error)=>{
                console.log(error)
                console.log("error")
                toast.error("Error ! Something went wrong")

            }
        )
    }
  return (
    <div>
        <h1 className='text-center my-3'>Fill Course Detail</h1>

        <Form onSubmit={handleForm}>
            <FormGroup>
                <label htmlFor='userId'>Course Id</label>
                <Input type='text' placeholder='Enter here' name='userId' id='userId' onChange={(e)=>{
                    setCourse({...course,id:e.target.value})
                }}></Input>
            </FormGroup>

            <FormGroup>
                <label htmlFor='title'>Course Title</label>
                <Input type='text' placeholder='Enter title here' name='userId' id='title' onChange={(e)=>{
                    setCourse({...course,title:e.target.value})
                }}></Input>
            </FormGroup>

            <FormGroup>
                <label htmlFor='description'>Course Description</label>
                <Input type='textarea' placeholder='Enter description here' name='description' id='description'  style={{
                    height:150
                }} onChange={(e)=>{
                    setCourse({...course,description:e.target.value})
                }} ></Input>
            </FormGroup>

            <Container className='text-center'>
                <Button type='submit' color='success'>Add Course</Button>
                <Button color='warning ms-2' type='reset'>Clear</Button>
            </Container>

        </Form>
      
    </div>
  )
}

export default AddCourse

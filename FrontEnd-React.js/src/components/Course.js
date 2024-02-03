import React from 'react'
import{

    Card,
    CardBody,
    // CardTitle,
    CardSubtitle,
    CardText,
    // CardFooter,
    Button,
    Container,

} from "reactstrap";
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import Update from './components/Update';


function Course({course, update}) {

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (respone)=>{
                toast.success("course deleted")
                update(id)

            },

            (error)=>{
                toast.error("course not deleted")

            }
        )

    }

    // const updateCourse=()=>{
    //     <Router>
    //         <Routes>
    //             <Route exact path='/update-course' element={<Update/>} ></Route>
    //         </Routes>
    //     </Router>
    // }
  return (
    <div>
        <Card className='text-center'>
            <CardBody>
                <CardSubtitle className="fw-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className='text-center'>
                    <Button color='danger' onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color='warning ms-3'>Update</Button>

                </Container>
            </CardBody>
        </Card>
      
    </div>
  )
}

export default Course

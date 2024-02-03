// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Header from './components/Header';
// import Course from './components/Course';
import Allcourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  // const notify=()=>
  // {
  //   toast.success("wow so easy",
  //   {position:'top-center'
    
  //   });

  // }
  return (
    <>
    <Router>
    {/* <h1>This is My React js application</h1>
    <Button color='warning' outline onClick={notify}>Notify</Button> */}
    <ToastContainer/>
    {/* <Home/> */}
    {/* <Course course={{title:"Django Course", description:"this is just testing"}}/> */}
    {/* <Allcourses/> */}
    {/* <AddCourse/> */}

    <Container>
      <Header/>
      <Row>
        <Col md={4}>
          <Menu/>
        
        </Col>

        <Col md={8}>
          {/* <Home/> */}
          <Routes>
          
          <Route exact path='/' element={<Home/>} ></Route>
          <Route exact path='/add-courses' element={<AddCourse/>}></Route>
          <Route exact path='/view-courses' element={<Allcourses/>} ></Route>
          <Route exact path='/update-course' element={<Update/>} ></Route>
          {/* <Route path='/' component={Home} exact></Route>
          <Route path='/' component={Home} exact></Route> */}
          </Routes>
        
        
        </Col>
      </Row>

    </Container>
    </Router>
    </>
  );
}

export default App;

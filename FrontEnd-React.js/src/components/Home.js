import React from 'react'
import {Container,Button } from "reactstrap"; 

function Home() {
  return (
    <div>
        <div className="text-center" style={{background:'lightgrey',
    height:'40vh',
    width:'57vw',
    paddingTop:'80px'}}>
        <h1>Welcome to Course Portal</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit recusandae optio et fugiat pariatur quae sit dignissimos consequatur odio officiis itaque voluptate, explicabo dolores suscipit illo, eos totam. Officia?
            </p>
            <hr></hr>
            <Container>
            <Button color='primary' outline>Start Using</Button>
        </Container>

        </div>
        

        {/* <Jumbotron>
            <h1>Learncode with Durgesh</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugit recusandae optio et fugiat pariatur quae sit dignissimos consequatur odio officiis itaque voluptate, explicabo dolores suscipit illo, eos totam. Officia?
            </p>
        </Jumbotron> */}
       
      
    </div>
  )
}

export default Home

import React from 'react'
import { Link} from 'react-router-dom'
import { ListGroup } from 'reactstrap'

function Menu() {
  return (
    <div>

        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='/'>Home</Link>
        </ListGroup>
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='/add-courses'>Add Courses</Link>
        </ListGroup>
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='/view-courses'>View Courses</Link>
        </ListGroup>
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='#!'>About</Link>
        </ListGroup>
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='#!'>Contact</Link>
        </ListGroup>
        <ListGroup>
            <Link className="list-group-item list-group-item-action"tag="a" to='/update-course'>Update</Link>
        </ListGroup>
      
    </div>
  )
}

export default Menu

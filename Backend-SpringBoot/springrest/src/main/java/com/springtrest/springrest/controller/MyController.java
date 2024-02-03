package com.springtrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springtrest.springrest.entities.Course;
import com.springtrest.springrest.services.CourseService;


@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/home")
public String home() {
	return "Welcome to courses application";
}

//get the courses
@GetMapping("/courses")
public List<Course> getCourses(){
	
	return this.courseService.getCourses();
	
}

//get course
	@GetMapping("/courses/{courseId}")
		public Course getCourse(@PathVariable String courseId){
			
			return this.courseService.getCourse(Long.parseLong(courseId));
			
		}
	
	
	//add courses
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/courses")
	public Course addCourse(@RequestBody Course course) {
		
		return this.courseService.addCourse(course);
		
	}
	
	//update courses
	@CrossOrigin(origins = "http://localhost:3000")
		@PutMapping("/courses")
		public Course updateCourse(@RequestBody Course course) {
			
			return this.courseService.updateCourse(course);
			
		}
		
		
	//delete the course
	@CrossOrigin(origins = "http://localhost:3000")
		@DeleteMapping("/courses/{courseId}")
		public ResponseEntity<HttpStatus> deleteCourse(@PathVariable String courseId){
			
			try {
				this.courseService.deleteCourse(Long.parseLong(courseId));
				return new ResponseEntity<>(HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
			
		}
	

}

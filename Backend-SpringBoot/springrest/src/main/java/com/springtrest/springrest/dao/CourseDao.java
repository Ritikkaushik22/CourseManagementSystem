package com.springtrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springtrest.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long>{
	

}

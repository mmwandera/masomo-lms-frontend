import React, { useState } from 'react';
import './courseView.css';
// Import the dummy data
import dummyData from './dummy-data/course-view-data.json';
// Import the CourseModule component
import CourseModule from './reusable-components/CourseModule';
// Import the ModuleDetails component
import ModuleDetails from './reusable-components/ModuleDetails';

export default function CourseView() {
  // Initialize state to store the course data
  const [courseData, setCourseData] = useState(dummyData[0]);

  return (
    <div className="course-view">
      <div className="course-title">
        {/* Display the course title */}
        <h1>{courseData.courseTitle}</h1>
      </div>
      <div className="course-content">
        <div className="course-modules">
          {/* Render module titles */}
          <h2>Modules</h2>
          {courseData.modules.map((module, index) => (
            <CourseModule key={index} title={module.title} />
          ))}
        </div>
        <div className="course-media">
          <h2>Notes</h2>
          {/* Render media and notes */}
          {courseData.modules.map((module, index) => (
            <ModuleDetails key={index} media={module.media} notes={module.notes} />
          ))}
        </div>
      </div>
    </div>
  );
}

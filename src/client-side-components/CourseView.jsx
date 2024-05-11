import './courseView.css';
// import dummyData from './dummy-data/course-view-data.json';
// import { useEffect, useState } from 'react';
// import CourseModule from './reusable-components/CourseModule'
// import ModuleDetails from './reusable-components/ModuleDetails'

export default function CourseView() {
  const [courseView, setcourseView] = useState([]);

  

  return (
    <div className="course-view">
      <div className="course-title">
        <h1>Course Title</h1>
      </div>
      <div className="course-content">
        <div className="course-modules">
          <h2>Modules</h2>
          {}
        </div>
        <div className="course-media">
          <h2>Notes</h2>
          {/* Render media and notes here */}
        </div>
      </div>
    </div>
  );
}


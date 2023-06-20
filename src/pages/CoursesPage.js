import React from 'react';
import { Helmet } from 'react-helmet';

function CoursesPage() {
  return (
    <div>
      <Helmet>
        <title>Courses | GradeSage</title>
      </Helmet>

      <h1>Courses</h1>
      <p>This is the courses page content.</p>
    </div>
  );
}

export default CoursesPage;
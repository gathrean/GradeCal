import React from 'react';
import { Helmet } from 'react-helmet';

function ProfilePage() {
  return (
    <div>
      <Helmet>
        <title>Profile | GradeSage</title>
      </Helmet>

      <h1>Profile</h1>
      <p>This is the profile page content.</p>
    </div>
  );
}

export default ProfilePage;

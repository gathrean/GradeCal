import React from 'react';
import { Helmet } from 'react-helmet';

function SettingsPage() {
  return (
    <div>
      <Helmet>
        <title>Settings | GradeSage</title>
      </Helmet>

      <h1>Settings</h1>
      <p>This is the settings page content.</p>
    </div>
  );
}

export default SettingsPage;

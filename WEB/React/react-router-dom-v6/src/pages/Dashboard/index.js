import React from 'react';
import { useRoutes, Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import Profile from '../Profile';
import Project from '../Project';
import NotFound from '../NotFound';

const Dashboard = () => {
  let customRoute = useRoutes([
    { path: '/', element: <Profile /> },
    { path: 'project', element: <Project /> },
    { path: '*', element: <NotFound /> },
    //add path and element/component here
  ]);

  return (
    <div>
      <ul>
        <li>
          <Link to="">Profile</Link>
        </li>
        <li>
          <Link to="project">Project</Link>
        </li>
      </ul>
      {customRoute}
    </div>
  );
};

export default Dashboard;

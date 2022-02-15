import React from 'react';
import Card from '../../components/Card';

const sampleProjects = [
  {
    name: 'AXA mobile app',
    description: 'teleconsultation',
    link: '',
  },
  {
    name: 'Metrobank mobile app',
    description: 'send money',
    link: '',
  },
  {
    name: 'Titan Network',
    description: 'inhouse social media',
    link: '',
  },
  {
    name: 'Panagani',
    description: 'Farm to table ecommerce app',
    link: '',
  },
  {
    name: 'Savorite',
    description: 'Restaurant reservation app',
    link: '',
  },
];

const Project = () => {
  return (
    <div className="centered">
      {sampleProjects.map((project, index) => (
        <Card key={index} project={project} />
      ))}
    </div>
  );
};

export default Project;

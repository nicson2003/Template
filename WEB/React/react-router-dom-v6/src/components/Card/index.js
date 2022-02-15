import React from 'react';
import { Card, CardBody, CardLink, CardTitle } from 'reactstrap';

const cardComponent = (props) => {
  const { name, description, link } = props.project;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <img
            width="50%"
            src="https://via.placeholder.com/150/FFFF00/000000?Text=WebsiteBuilders.com"
            alt="Card image cap"
          />

          {description && <p>{description}</p>}
        </CardBody>
        {link && (
          <CardBody>
            <CardLink href={link}>To knbow more about us...</CardLink>
          </CardBody>
        )}
      </Card>
    </div>
  );
};

export default cardComponent;

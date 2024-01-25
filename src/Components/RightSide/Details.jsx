import React from 'react';
import About from './About';
import Skills from './Skills';
import Posts from './Posts';
import Spaces from './Spaces';

const Details = ({ componentName }) => {
  let componentToRender;

  switch (componentName) {
    case 'about':
      componentToRender = <About />;
      break;
    case 'skills':
      componentToRender = <Skills />;
      break;
    case 'posts':
      componentToRender = <Posts />;
      break;
    case 'spaces':
      componentToRender = <Spaces />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div>
      {componentToRender}
    </div>
  );
};

export default Details;

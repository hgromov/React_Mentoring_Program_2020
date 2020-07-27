import { createElement } from 'react';

const First = () => (
  createElement(
    'div',
    { className: 'first' },
    'Hello from React.CreateElement component!'
  )
);

export default First;

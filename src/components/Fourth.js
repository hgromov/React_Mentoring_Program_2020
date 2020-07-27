import React, { useState } from 'react';

function Fourth() {
  const [name] = useState('Functional component')

  return <div className="fourth">Hello from {name}</div>;
}

export default Fourth;
import React, { useState } from 'react';

const Loading = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  return <div>Loading</div>;
};

export default Loading;

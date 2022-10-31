import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [data, setData] = useState([]);

  const fetching = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  const removeTour = (id) => {
    const tours = data.filter((data) => {
      return data.id !== id;
    });
    setData(tours);
  };

  useEffect(() => {
    fetching();
    console.log(data);
  }, [url]);

  return (
    <div>
      <h2>Tours Project Setup</h2>;
      <Tours data={data} removeTour={removeTour} />
    </div>
  );
}

export default App;

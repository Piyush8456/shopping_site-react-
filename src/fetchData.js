import React, { useEffect, useState } from 'react';

const FetchData = (props) => {
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(json => setAllData(json))
      .catch(error => console.log(error));
  }, []);

  const handleButtonClick = () => {
    // Call the callback function from the parent with the data
    props.sendDataToParent(allData);
  };

  return (
    <div>
<button onClick={handleButtonClick}>send Data</button>
    </div>
  );
};


export default FetchData;  // Exporting allData separately

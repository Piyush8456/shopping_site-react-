import React, { useEffect, useState } from 'react';
import './App.css';
import FetchData from './fetchData';

const App = () => {
  const [dataFromChild, setDataFromChild] = useState([]);

  const filterItem = (category) => {
    const updatedList = dataFromChild.filter((currentItem) => {
      return currentItem.category === category;
    });
    setDataFromChild(updatedList);
  };

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='btn-group'>
          <button className='btn-group__item' onClick={() => filterItem('electronics')}>electronics</button>
          <button className='btn-group__item' onClick={() => filterItem('jewelery')}>jewelery</button>
          <button className='btn-group__item' onClick={() => filterItem("men's clothing")}>men's clothing</button>
          <button className='btn-group__item' onClick={() => filterItem("women's clothing")}>women's clothing</button>
        </div>
      </nav>

      <div className="card-container">
        {dataFromChild.length > 0 ? (
          <div className="cards">
            {dataFromChild.map((product, index) => (
              <div key={index} className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={product.image} alt={`Product ${index}`} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">{product.price}</a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          dataFromChild.length === 0 && 'Loading...'
        )}
      </div>

      <FetchData sendDataToParent={handleDataFromChild} />
    </>
  );
};

export default App;

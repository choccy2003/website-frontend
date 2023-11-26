import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import '../styles/navcss.css';
import { BsSearch } from 'react-icons/bs';

const Filtergrid = (props) => {
  const [filterbtn, updatefilterbtn] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort By');

  const sortBypricelow = () => {
    const sortedArray = [...props.best_array].sort((a, b) => a.price - b.price);
    props.setarray(sortedArray);
    setSelectedOption('Price (low)');
  };

  const sortBypricehigh = () => {
    const sortedArray = [...props.best_array].sort((a, b) => b.price - a.price);
    props.setarray(sortedArray);
    setSelectedOption('Price (High)');
  };

  const sortBybestreviews = () => {
    const sortedArray = [...props.best_array].sort((a, b) => b.rating - a.rating);
    props.setarray(sortedArray);
    setSelectedOption('Best reviews');
  };

  const sortBymostreviews = () => {
    const sortedArray = [...props.best_array].sort((a, b) => b.review - a.review);
    props.setarray(sortedArray);
    setSelectedOption('Most reviews');
  };

  const sortBydefault = () => {
    props.fetchData();
    setSelectedOption('Relevance');
  };
 

  return (
    <div style={{ display: "flex", height: "50px", gap: "20px" }}>
      <div className='filter-search' style={{ fontSize: "18px", fontWeight: "500", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "8px", userSelect: "none", backgroundColor: "#f5f5f5", padding: "8px", paddingTop: "6px", marginLeft: "auto", marginTop: "90px", height: "23px", width: "160px", display: "flex" }}>
        <div>
          <input placeholder='Search...' type='text' style={{ height: "18px", fontSize: "18px", width: "120px", backgroundColor: "#f5f5f5", border: "none" }} ></input>
        </div>
        <div style={{ marginLeft: "auto", marginTop: "1px", fontSize: "20px" }}>
          <BsSearch opacity={0.6} />
        </div>

      </div>
      <div className='filter-sort' style={{ marginTop: "90px", marginRight: "65px" }}>
        <div>
          <div onClick={() => { filterbtn ? updatefilterbtn(false) : updatefilterbtn(true) }}>
            <div style={{  fontWeight: "500", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "8px", userSelect: "none", backgroundColor: "#f5f5f5", padding: "8px", paddingTop: "6px", position: "relative", zIndex: "1" }}>
              {selectedOption}
              <FiChevronDown style={{ strokeWidth: "3px", position: "relative", top: "4px" }} />
            </div>
          </div>
        </div>

        {filterbtn && (
          <div style={{ backgroundColor: "#f5f5f5", fontSize: "16px", fontWeight: "500", zIndex: "100", position: "relative", bottom: "5px", border: "2px solid rgba(0, 0, 0, 0.2)", borderRadius: "0px 0 5px 5px", userSelect: "none" }} >
            <ol>
              <li style={{ paddingTop: "5px", paddingLeft: "3px" }} className='li' onClick={sortBypricelow}>
                Price (low)
              </li>
              <li style={{ paddingTop: "5px", paddingLeft: "3px" }} className='li' onClick={sortBypricehigh}>
                Price (High)
              </li>
              <li style={{ paddingTop: "5px", paddingLeft: "3px" }} className='li' onClick={sortBybestreviews}>
                Best reviews
              </li>
              <li style={{ paddingTop: "5px", paddingLeft: "3px" }} className='li' onClick={sortBymostreviews}>
                Most reviews
              </li>
              <li style={{ paddingTop: "5px", paddingBottom: "5px", paddingLeft: "3px" }} className='li' onClick={sortBydefault}>
                Relevance
              </li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filtergrid;

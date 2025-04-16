import React from 'react';
import CardComponent from './CardComponent';

function Body() {
  return (
    <>
    <div className="body flex justify-center items-center">
        <input type="text" placeholder="Search For Recipe i.e: Rice" className="m-3 border-gray-400 border rounded-3xl w-100 placeholder:pl-2"/>
    </div>
    <div className="flex flex-wrap justify-center">
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      </div>
      </>
  );
}

export default Body;
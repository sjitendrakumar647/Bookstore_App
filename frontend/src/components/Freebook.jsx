import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Freebook() {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:4001/book');
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const filterData = books.filter((item) => item.category === 'Free');
  // const filterData = books.filter((item) => item.category != 'Free');

  console.log(filterData);
  const data = filterData.map((item) => {
    return (
      <div key={item.id} className="p-5 gap-5">
        <div className="flex card bg-base-100 w-auto shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
          <figure>
            <img
              src={item.image}
              alt={item.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}
              <span className="badge badge-secondary">{item.category}</span>

            </h2>
            <p>{item.name}</p>
            <div className="card-actions justify-between">
              <button type="button" className='border-3 rounded-2xl p-1 pl-3 pr-3'>$ {item.price}</button>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {data}
    </div>
  )
}

export default Freebook

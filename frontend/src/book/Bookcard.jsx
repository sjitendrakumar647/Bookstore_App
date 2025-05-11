import React from 'react'

function Bookcard({item}) {
    console.log(item);
  return (
    <div>
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
    </div>
  )
}

export default Bookcard

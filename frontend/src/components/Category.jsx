import React from 'react';

function Category() {
  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <div className="dropdown dropdown-center">
      <div tabIndex={0} role="button" className="btn m-1">Category ⬇️</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box text-left z-1 w-42 p-2 shadow-sm">
        <li>
          <button
            type="button"
            className="btn btn-sm w-full text-left"
            onClick={() => handleClick('Free')}
          >
            Free
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-sm w-full text-left"
            onClick={() => handleClick('Paid')}
          >
            Paid
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Category;

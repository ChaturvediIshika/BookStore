import React from 'react'

function Card(item) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
          <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
            <img
            src={item.item.image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">
            {item.item.name}
            <div className="badge badge-secondary">{item.item.category}</div>
            </h2>
            <p>{item.item.title}</p>
            <div className="card-actions justify-between p-2">
            <div className="badge badge-outline">${item.item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy Now</div>
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default Card

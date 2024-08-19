import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
            <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab fugiat, at, veritatis distinctio quasi 
            enim illo illum, molestiae deleniti totam similique perferendis ullam soluta! Magni, eligendi, qui veniam itaque 
            illum quam velit placeat doloribus rerum numquam sint deserunt voluptatibus possimus accusamus enim ipsam ab, 
            quisquam officia minima totam nostrum quaerat. Magni in rem unde. Vitae deleniti dolore quae tempora dignissimos 
            recusandae mollitia quod, suscipit perspiciatis, sequi quaerat rerum similique iure pariatur cum aut numquam quis dolorum 
            asperiores temporibus saepe. Reprehenderit atque possimus incidunt cumque magni sit obcaecati voluptatibus sint numquam 
            ab fugit exercitationem explicabo, perspiciatis et sapiente velit consequatur cupiditate!
          </p>
          <Link to='/'>
          <button className='mt-6 bg-pink-500 text-white hover:bg-pink-700 duration-300 rounded-md px-4 py-2'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item)=>(
              <Card item={item} key={item.id}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course

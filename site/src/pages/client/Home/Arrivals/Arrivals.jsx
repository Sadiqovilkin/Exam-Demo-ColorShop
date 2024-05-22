import React, { useRef, useState } from 'react'
import './Arrivals.scss'
import { CiHeart } from "react-icons/ci";
import { useDataContext } from '../../../../context/Context';
// import Isotope from 'isotope';
const Arrivals = () => {
  const { data, addToCart } = useDataContext()
  const isotope = useRef()
  const [filterKey, setFilterKey] = useState('*')
  React.useEffect(() => {
    isotope.current = new Isotope('.filter-container', {
      itemSelector: '.filter-item',
      layoutMode: 'fitRows',
    })
    // cleanup
    return () => isotope.current.destroy()
  }, [])
  React.useEffect(() => {
    filterKey === '*'
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${filterKey}` })
  }, [filterKey])

  const handleFilterKeyChange = key => () => setFilterKey(key)

  return (
    <section id='arrivals'>
      <div className="container">
        <div className="row justify-content-center  py-5">
          <div className="col-lg-6">
            <div className="section_header">
              <h2>New Arrivals</h2>
              <div className="bg_orange"></div>

              <div className="btns">
                <button onClick={handleFilterKeyChange('*')} className='btn btn-light'>All</button>
                <button onClick={handleFilterKeyChange('women')} className='btn btn-light'>Women's</button>
                <button onClick={handleFilterKeyChange('acces')} className='btn btn-light'>Accessories</button>
                <button onClick={handleFilterKeyChange('men ')} className='btn btn-light'>Mens's</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row filter-container ">
          {data && data.map((el, idx) =>
            <div key={idx} className={`col-lg-3 g-4 col-md-6  filter-item ${el.categorys} `}>
              <div className="cart">
                <div className="card_img">
                  <img src={el.imgSrc} alt="" />
                  <div className="heart">
                    <CiHeart />
                  </div>
                  {el.discount > 0 ? <div className="discount">
                    {el.discount}%
                  </div> : null}
                </div>
                <div className="card_desc">
                  <h4>{el.title}</h4>
                  <p>
                    {el.discount > 0 ? <><span>{el.price - (el.price * el.discount / 100)}</span> <del>{el.price}</del></> : <span>{el.price}</span>}
                  </p>
                </div>
                <div className="card_btns">
                  <button onClick={() => {
                    addToCart(el)
                  }} className='btn '> Add To Cart</button>
                  <button className='btn'>Detail</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Arrivals
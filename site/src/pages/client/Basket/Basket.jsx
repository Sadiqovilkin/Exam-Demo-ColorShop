import React from 'react'
import { useDataContext } from '../../../context/Context'

const Basket = () => {
  const {basket,deleteCart,increase,decrease} =useDataContext() 
  console.log(basket);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
        <table className='table table-bordered '>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>count</th>
                  <th>Total price</th>
                  <th>Img</th>
                  <th>Description</th>
                  <th>Delete</th>
                  <th>Increase</th>
                  <th>Decrease</th>
                </tr>
              </thead>
              <tbody>
              
                {basket && basket.map((el,idx)=>{
                  return(
          
                      <tr key={idx}>
                  <td>{idx}</td>
                  <td>{el.products.title}</td>
                  <td>{el.count}</td>
                  <td>{el.totalPrice}</td>
                  <td><img style={{width:'150px',height:'150px'}} src={el.products.imgSrc} alt="" /></td>
                  <td style={{wordBreak:"break-all"}} >{el.products.categorys} </td>
                  <td> <button onClick={()=>{
                        deleteCart(el)
                  }} className='btn btn-danger '>
                    Delete</button> </td>
                    <td>
                      <button  onClick={()=>{
                      increase(el)
                    }} className='btn btn-success '>+</button>
                    </td>
                    <td >
                      <button className='btn btn-warning' onClick={()=>{decrease(el)}} > -</button>
                    </td>
                </tr>
       
                  )
                })}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default Basket
import React from 'react'
import { useDataContext } from '../../../../context/Context'
import Swal from 'sweetalert2';
import { useFormik } from 'formik'
import productSchema from '../../../../validations/product.validations';
const AddPage = () => {
  const { data, postData, deleteData,deleteBasket } = useDataContext()
  const formik = useFormik({
    initialValues: {
      title: "",
      discount: "",
      imgSrc: '',
      price:'',
      categorys:""
    }, 
    validationSchema: productSchema,

    onSubmit: (values) => {
      console.log(values);
      postData(values)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data Added",
        showConfirmButton: false,
        timer: 1500
      });
    }
  })

  return (
    <section >
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <form onSubmit={formik.handleSubmit}>
            <input onChange={formik.handleChange} type="text" name='title' placeholder='Title' className='form-control my-2 py-3 px-2' />
            {formik.touched.title && formik.errors.title ? (
              <div style={{ color: 'red' }}>{formik.errors.title}</div>
            ) : null}
            <input onChange={formik.handleChange} type="text" name='imgSrc' placeholder='Image Source' className='form-control my-2 py-3 px-2' />
            {formik.touched.imgSrc && formik.errors.imgSrc ? (
              <div style={{ color: 'red' }}>{formik.errors.imgSrc}</div>
            ) : null}
            <input onChange={formik.handleChange} type="number" name='discount' placeholder='discount' className='form-control my-2 py-3 px-2' />
            {formik.touched.discount && formik.errors.discount ? (
              <div style={{ color: 'red' }}>{formik.errors.discount}</div>
            ) : null}
            <input onChange={formik.handleChange} type="number" name='price' placeholder='price' className='form-control my-2 py-3 px-2' />
            {formik.touched.price && formik.errors.price ? (
              <div style={{ color: 'red' }}>{formik.errors.price}</div>
            ) : null}
            <input onChange={formik.handleChange} type="text" name='categorys' placeholder='categorys' className='form-control my-2 py-3 px-2' />
            {formik.touched.categorys && formik.errors.categorys ? (
              <div style={{ color: 'red' }}>{formik.errors.categorys}</div>
            ) : null}
            <button className='btn btn-dark ' type="submit">Submit</button>
          </form>
        </div>
        <div className="col-lg-8">
          <table className='table table-bordered '>
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Img</th>
                <th>Discount</th>
                <th>Categoyrs</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            
              {data && data.map((el,idx)=>{
                return(
        
                    <tr key={idx}>
                <td>{idx}</td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td><img style={{width:'150px',height:'150px'}} src={el.imgSrc} alt="" /></td>
                <td style={{wordBreak:"break-all"}} >{el.discount} </td>
                <td style={{wordBreak:"break-all"}} >{el.categorys} </td>
                <td> <button onClick={()=>{
                  deleteData(el._id)
                  deleteBasket(el)
                }} className='btn btn-danger '>
                  Delete</button> </td>
              </tr>
     
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AddPage

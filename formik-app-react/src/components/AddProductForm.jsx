import React from 'react'
import { CContainer, CRow, CCol, CForm, CFormSelect, CFormInput,CFormCheck,CButton  } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import { useFormik } from 'formik'
import { Field } from 'formik'
import { addProduct } from '../services/products_request'
import { addProductSchema } from '../validation/addProductValidation'
const AddProductForm = () => {
  
  const formik = useFormik({
    initialValues:{
      'category':'1',
      'name':'',
      'unitPrice':'',
      'unitsInStock':'',
      'isDiscounted':'false',
      'quantityPerUnit':''
    },
    onSubmit: async(values,actions)=>{
      let discontinuedBool = null;
      if(values.isDiscounted === 'false'){
        discontinuedBool = false;
      } else{
        discontinuedBool = true;
      }
      let product = {
        categoryId: values.category,
        name: values.name,
        unitPrice: values.unitPrice,
        unitsInStock: values.unitsInStock,
        discontinued: discontinuedBool,
        quantityPerUnit: values.quantityPerUnit
      }
      await addProduct(product);
      actions.resetForm();
    },
    validationSchema: addProductSchema
  })
  return (
    <CContainer>
      <CRow className='d-flex justify-content-center'>
        <CCol xs={8}>

        <CRow className='d-flex justify-content-center  my-3 '>
        <CCol xs={4}>
          <h2>Product Add Form</h2>
        </CCol>
      </CRow>
      <CForm onSubmit={formik.handleSubmit}>
        <CRow className='d-flex justify-content-center  my-3'>
          <CCol xs={8}>
            <CFormSelect onChange={formik.handleChange} name='category'  value={formik.values.category}
              aria-label="Default select example"
              options={[
                { label: 'Meat/Poultry', value: '1' },
                { label: 'Condiments', value: '2' },
                { label: 'Beverages', value: '3' },
                { label: 'Confections', value: '4' },
                { label: 'Dairy products', value: '5' },
                { label: 'Grains/Cereals', value: '6' },
                { label: 'Produce', value: '7' },
                { label: 'Seafood', value: '8' }
              ]}
            />
          </CCol>
        </CRow>
        <CRow className='d-flex justify-content-between  my-3'>
          <CCol xs={3}>
            <CFormInput onChange={formik.handleChange} name='name' value={formik.values.name} placeholder='Name' />
            {(formik.errors.name)?<div className='text-danger'>{formik.errors.name}</div>:<></>}
            
          </CCol>
          <CCol xs={3}>
            <CFormInput onChange={formik.handleChange} name='unitPrice' value={formik.values.unitPrice} placeholder='Unit Price' />
            {(formik.errors.unitPrice)?<div className='text-danger'>{formik.errors.unitPrice}</div>:<></>}
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-between  my-3'>
          <CCol xs={3}>
            <CFormInput onChange={formik.handleChange} name='unitsInStock' value={formik.values.unitsInStock} placeholder='Units in stock' />
            {(formik.errors.unitsInStock)?<div className='text-danger'>{formik.errors.unitsInStock}</div>:<></>}
          </CCol>
          <CCol xs={3}>
          
          <input className='me-2' type='checkbox' onChange={()=>{ 
            let a = formik.values.isDiscounted; 
            if(a == 'false'){
              formik.setFieldValue('isDiscounted','true')
            }else{
              formik.setFieldValue('isDiscounted','false')
            }
            
            }}  value={formik.values.isDiscounted} name='isDiscounted'   label="isDiscounted"/>
            <span>isDiscounted</span>
          
          
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-center  my-3'>
        <CCol xs={4}>
            <CFormInput onChange={formik.handleChange} name='quantityPerUnit' value={formik.values.quantityPerUnit} placeholder='Quantity per  Unit' />
            {(formik.errors.quantityPerUnit)?<div className='text-danger'>{formik.errors.quantityPerUnit}</div>:<></>}
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-center  my-4'>
        <CCol xs={4}>
            <CButton type='submit' className='btn btn-success text-white w-100'>ADD PRODUCT TO API</CButton>
          </CCol>

        </CRow>
      </CForm>

        </CCol>
      </CRow>
      

    </CContainer>
  )
}

export default AddProductForm
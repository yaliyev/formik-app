import React from 'react'
import { CContainer, CRow, CCol, CForm, CFormSelect, CFormInput,CFormCheck,CButton  } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
const AddProductForm = () => {
  return (
    <CContainer>
      <CRow className='d-flex justify-content-center'>
        <CCol xs={8}>

        <CRow className='d-flex justify-content-center  my-3 '>
        <CCol xs={4}>
          <h2>Product Add Form</h2>
        </CCol>
      </CRow>
      <CForm>
        <CRow className='d-flex justify-content-center  my-3'>
          <CCol xs={8}>
            <CFormSelect
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
            <CFormInput placeholder='Name' />
          </CCol>
          <CCol xs={3}>
            <CFormInput placeholder='Unit Price' />
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-between  my-3'>
          <CCol xs={3}>
            <CFormInput placeholder='Units in stock' />
          </CCol>
          <CCol xs={3}>
          <CFormCheck  label="isDiscounted"/>
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-center  my-3'>
        <CCol xs={4}>
            <CFormInput placeholder='Quantity per  Unit' />
          </CCol>

        </CRow>
        <CRow className='d-flex justify-content-center  my-4'>
        <CCol xs={4}>
            <CButton className='btn btn-success text-white w-100'>ADD PRODUCT TO API</CButton>
          </CCol>

        </CRow>
      </CForm>

        </CCol>
      </CRow>
      

    </CContainer>
  )
}

export default AddProductForm
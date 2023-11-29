import * as Yup from 'yup'

export const addProductSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    unitPrice: Yup.number().required("Required"),
    unitsInStock: Yup.number().required("Required"),
    quantityPerUnit: Yup.number().required("Required")
});
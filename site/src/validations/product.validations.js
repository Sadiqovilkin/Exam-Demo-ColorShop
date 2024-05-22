import * as yup from 'yup';

const productSchema = yup.object().shape({
    title: yup.string().required(' Ad Vacibdir'),
    price: yup.number().required('price deyeri Vacibdir'),
    categorys: yup.string().required('price deyeri Vacibdir'),
    discount:yup.number().required("It is Important").min(0).max(100),
  imgSrc: yup.string().url('Duzgun bir URL giriniz').required('ProductImg Vacibdir'),
});

export default productSchema;
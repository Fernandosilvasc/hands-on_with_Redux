import { all, takeLatest } from 'redux-saga/effects';

function checkProductStock() {
  console.log('Product has added with success!');
}

export default all([takeLatest('ADD_PRODUCT_TO_CART', checkProductStock)]);

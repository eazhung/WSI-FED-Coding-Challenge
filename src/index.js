// const url = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
/**
 *
 * This is ths entry of the application
 * Main business logical
 * @module Main
 *
 */

import productServices from './service/productList.service.js';
import { mapProduct } from './utils/utils.js';
import ProductList from './products/product-list.model.js';

class Main {
  constructor(resolve, reject, ps) {
    this.resolve = resolve;
    this.reject = reject;
    this.productServices = ps;

    productServices
      .then(products => {
        this.productList = new ProductList(mapProduct(products))
        console.log( this.productList.render())
        document.querySelector('[data-id="body"]').innerHTML = this.productList.render()

        this.resolve(this);
      })
      .catch(err => {
        console.log(err);
        this.reject(this);
      });
  }

  render() {
    this.productList.render();
  }
}

window.onload = function() {
  const body = document.querySelector('[data-id="body"]');

  new Promise((resolve, reject) => {
    new Main(resolve, reject, productServices);
  })
    .then(res => {
      // console.log(res)
      // body.innerHTML = res.render()
    })
    .catch(err => err);
};

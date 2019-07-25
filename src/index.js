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
import ProductList from './products/product-list.component.js';

class Main {
  constructor(resolve, reject, ps) {
    this.resolve = resolve;
    this.reject = reject;
    this.productServices = ps;

    productServices
      .then(products => {
        this.productList = new ProductList(mapProduct(products));
        // document.querySelector('[data-id="body"]').innerHTML = this.productList.render()
        this.resolve(this);
      })
      .catch(err => {
        console.log(err);
        this.reject(this);
      });
  }

  render() {
    return this.productList.render();
  }
}

window.onload = async function() {
  const body = document.querySelector('[data-id="body"]');
  const modal = document.getElementById('modal');
  modal.onclick = () => {
    modal.classList.remove('active')
    modal.innerHTML = "";
  }

  await new Promise((resolve, reject) => {
    new Main(resolve, reject, productServices);
  })
    .then(res => {
      // console.log(res.render());
      body.innerHTML = '';
      for(let node of res.render())
        body.appendChild(node);
      return body
    })
    .catch(err => err);
};

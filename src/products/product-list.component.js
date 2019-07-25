/**
 * The class for productModel
 * @module ProductListModel
 */

import { chunk } from '../utils/utils.js';

export default class ProductList {
  /**
   *
   * @param {Array<Product>} Products
   */
  constructor(Products) {
    this.productList = Products || [];
    this.state = {
      view: 4
    };
  }

  render() {
    const productChunk = chunk(this.productList, this.state.view);
    return productChunk.map(prods => {
      const container = document.createElement('div');
      container.classList.add('row');
      prods.map(prod => {
        container.appendChild(prod.render());
      });
      return container;
    });
  }
}

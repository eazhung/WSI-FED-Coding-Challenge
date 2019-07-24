/**
 * The class for productModel
 * @module ProductListModel
 */

import {chunk} from '../utils/utils.js'

export default class ProductList {
  /**
   * 
   * @param {Array<Product>} Products 
   */
  constructor(Products) {
    this.productList = Products || []
    this.state = {
      view: 4
    }
  }

  render() {
    const productChunk = chunk(this.productList, this.state.view)

    return productChunk.map(prods => 
      `<div class='row'>
        ${prods.map(prod => prod.render()).join('')}
      </div>`
    ).join('')
  }
}
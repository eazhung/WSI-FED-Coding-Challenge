/**
 * The class for productModel
 * @module ProductModel
 */
import {stringPipe} from '../../utils/utils.js';

export default class Product {
  /**
   * @param {string} id
   * @param {string} name
   * @param {string} maxPrice
   * @param {string} minPrice
   * @param {string} hero
   * @param {Array<string>} images
   */
  constructor(id, name, high, low, hero, images) {
    this.id = id;
    this.name = name || '';
    this.maxPrice = high || '0.00';
    this.minPrice = low || '0.00';
    this.hero = hero || 'https://via.placeholder.com/363';
    this.images = images || [];
    
    this.maxLength = 75
  }

  render() {
    return `
    <div class='column column-25'>
      <div class='product'> 
        <div title='${this.name}' class='title'>
          ${stringPipe(this.name, this.maxLength)}
        </div>
        <div>
          <img src='${this.hero}'></img>
          <span class='price'>
            $${this.minPrice} - ${this.maxPrice} 
          </span>
        </div>
      </div>
    </div>
    `;
  }
}

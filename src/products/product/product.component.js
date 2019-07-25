/**
 * The class for productModel
 * @module ProductModel
 */
import {
  stringPipe
} from '../../utils/utils.js';
import Slider from '../../slider/slider.component.js';

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

    this.maxLength = 75;
  }

  openSlider(images) {
    document.getElementById('modal').classList.add('active');
    document.getElementById('modal').appendChild(new Slider(images).render())
  }

  render() {
    const productContainer = document.createElement('div');
    productContainer.classList.add('column');
    productContainer.classList.add('column-25');

    const productBlock = document.createElement('div');
    productBlock.classList.add('product');
    productBlock.onclick = () => this.openSlider(this.images);
    
    productContainer.appendChild(productBlock);
    productBlock.innerHTML =
    `<div title='${this.name}' class='title'>
        ${stringPipe(this.name, this.maxLength)}
          </div>
        <div>
        <img id='IMG_${this.hero}' src='${this.hero}'></img>
        <span class='price'>
          $${this.minPrice} - ${this.maxPrice} 
        </span>
      </div>`;
    return productContainer;
  }
}
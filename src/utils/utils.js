/**
 * this is for util functions.
 */
import Product from '../products/product/product.model.js';

/**
 * 
 * @param {Array<string>} images 
 * @returns {Array<string>}
 */
const mapImages = images => images.map(img => img.href);

/**
 * 
 * @param {Array<Obejct>} products 
 * @returns {Array<Product>}
 */
export const mapProduct = products => {
  return products.map(({ id, name, priceRange, thumbnail, images }) => {
    return new Product(
      id,
      name,
      priceRange.selling.high,
      priceRange.selling.low,
      thumbnail.href,
      mapImages(images)
    );
  });
};

/**
 * chunk the array to 2d array.
 * @param {Array<any>} array 
 * @param {number} size 
 * @returns {Array<Array<any>>} 
 */
export const chunk = (array, size) => {
  if (!array) return [];
  const firstChunk = array.slice(0, size); // create the first chunk of the given array
  if (!firstChunk.length) {
    return array; // this is the base case to terminal the recursive
  }
  return [firstChunk].concat(chunk(array.slice(size, array.length), size));
};

/**
 * 
 * @param {string} str 
 * @param {number} size 
 * @returns {string}
 */
export const stringPipe = (str, size) => {
  return str.length > size ? str.substring(0, size) + '...' : str;
};

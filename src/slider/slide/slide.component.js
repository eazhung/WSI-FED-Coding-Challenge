/**
 * Try to be the functional component like react
 * @param {*} image 
 * @return {DomElment}
 */
export default function Slide(image) {
  const slide = document.createElement('div');
  slide.classList.add('slider-item');
  slide.innerHTML = `<img src="${image}" alt="" class="img-fluid">`;
  return slide;
}
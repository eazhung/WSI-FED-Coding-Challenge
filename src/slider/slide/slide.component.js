export default class Slide{
  constructor(image) {
    this.imageUrl = image
  }
  render() {
    const slide = document.createElement('div');
    slide.classList.add('slider-item');
    slide.innerHTML = `<img src="${this.imageUrl}" alt="" class="img-fluid">`
    return slide
  }
}
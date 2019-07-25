import component from '../core/component.js';
import Slide from './slide/slide.component.js';

export default class slider extends component {
  constructor(images, curr = 0) {
    super();
    this.images = images
    this.state = {
      slides: null,
      dots: null,
      current: curr,
      previous: 0
    };
  }

  slideChange() {
    const currState = this.state;
    currState.slides[currState.current].classList.add('active');
    currState.dots[currState.current].classList.add('active');
    // if prev === curr, means it's first time to be here. no need to remove.
    if (currState.current === currState.previous) return;
    currState.slides[currState.previous].classList.remove('active');
    currState.dots[currState.previous].classList.remove('active');
  }

  next() {
    const currState = this.state;
    if (this.images.length <= 1) return; // if there is no image or one image
    this.setState({
      previous: currState.current,
      current:
        currState.current >= this.images.length - 1
          ? 0
          : currState.current + 1
    });

    this.slideChange();
  }

  runSlider(index) {
    const currState = this.state;
    if (currState.current === index) return;
    this.setState({
      previous: currState.current,
      current: index
    });
    this.slideChange();
  }

  render() {
    //slider elm
    const slider = document.createElement('div');
    slider.classList.add('slider');

    //dots elm
    const dots = document.createElement('div');
    dots.classList.add('list-inline');
    dots.classList.add('dots');

    this.images.forEach((img, index) => {
      //dot elm
      const dotLi = document.createElement('li');
      dotLi.classList.add('list-inline-item');
      dotLi.setAttribute('id', index);
      //stop Propagation to the modal, click dot to the index one
      dotLi.onclick = e => {
        this.runSlider(index);
        e.stopPropagation();
      };

      dots.append(dotLi);

      // slide elm
      const slide = new Slide(img);
      //stop Propagation to the modal, click slide to next one
      slide.onclick = e => {
        this.next();
        e.stopPropagation();
      };
      slider.appendChild(slide);
    });

    this.setState({
      slides: slider.childNodes,
      dots: dots.childNodes
    });
    this.slideChange();
    slider.appendChild(dots);
    return slider;
  }
}

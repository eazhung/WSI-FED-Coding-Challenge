import component from '../core/component.js';
import Slide from './slide/slide.component.js';

export default class slider extends component {
  constructor(images, curr = 0) {
    super();
    // state to store current and prev slide
    this.state = {
      images,
      slides: null,
      dots: null,
      current: curr,
      previous: 0
    };
  }

  reRender() {
    const currState = this.state;
    currState.slides[this.state.current].classList.add('active');
    currState.dots[this.state.current].classList.add('active');
    currState.slides[this.state.previous].classList.remove('active');
    currState.dots[this.state.previous].classList.remove('active');
  }

  next() {
    const currState = this.state;
    if (currState.images.length <= 1) return; // if there is no image or one image
    this.setState({
      previous: currState.current,
      current:
        currState.current >= currState.images.length - 1
          ? 0
          : currState.current + 1
    });

    this.reRender();
  }

  runSlider(index) {
    const currState = this.state;
    if (currState.current === index) return;
    this.setState({
      previous: currState.current,
      current: index
    });
    this.reRender();
  }

  render() {
    //slider elm
    const slider = document.createElement('div');
    slider.classList.add('slider');

    //dots elm
    const dots = document.createElement('div');
    dots.classList.add('list-inline');
    dots.classList.add('dots');

    this.state.images.forEach((img, index) => {
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
      const slide = new Slide(img).render();
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

    slider.childNodes[this.state.current].classList.add('active');
    dots.childNodes[this.state.current].classList.add('active');
    slider.appendChild(dots);
    return slider;
    // slider.append(`<ul id="dots" class="list-inline dots"></ul>
  }
}

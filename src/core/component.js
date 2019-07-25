export default class component {
  constructor() {
    this.prevState = {};
    this.state = {};
    this.setState = newState => {
      if (newState === this.state || !Object.keys(newState).length) return;
      this.prevState = { ...this.state };
      Object.assign(this.state, newState);
    };
  }
}

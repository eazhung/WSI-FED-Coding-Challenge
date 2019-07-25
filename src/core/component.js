/**
 * This core compnent to provide state update and so on
 */
export default class component {
  constructor() {
    this.state = {};
    this.setState = newState => {
      if (newState === this.state || !Object.keys(newState).length) return;
      this.prevState = { ...this.state };
      Object.assign(this.state, newState);
      
    };
  }
  update(fn) {
    return fn(this.state)
  }
}

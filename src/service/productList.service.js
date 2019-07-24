export default fetch('./service/product.json')
  .then(response => response.json())
  .then(res => res.groups)
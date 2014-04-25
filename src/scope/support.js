try {
  document.createElement('i').querySelector(':scoped *');
  module.exports = true;
} catch (e) {
  module.exports = false;
}

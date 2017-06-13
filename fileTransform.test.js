const fileTransform = require('./fileTransform');

test('simple happy path', () => {
  expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
    .toBe('app/design/frontend/Regatta/default-desktop/Magento_Wishlist/web/js/wtf.js');
});
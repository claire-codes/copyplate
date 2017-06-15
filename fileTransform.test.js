const fileTransform = require('./fileTransform');

test('Global JS in app/design', () => {
  expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
    .toBe('app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js');

expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml', 'phtml'))
    .toBe('app/design/frontend/Regatta/default/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');

expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml'))
    .toBe('app/design/frontend/Regatta/default/Magento_Checkout/layout/checkout_cart_index.xml');
});
const fileTransform = require('../src/fileTransform');

test('Global JS in app/design', () => {
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js')).toBe('app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js');
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js', 'VendorName')).toBe('app/design/frontend/VendorName/default/Magento_Wishlist/web/js/wtf.js');

    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml')).toBe('app/design/frontend/Regatta/default/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml', 'VendorName')).toBe('app/design/frontend/VendorName/default/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');

    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html')).toBe('app/design/frontend/Regatta/default/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html', 'VendorName')).toBe('app/design/frontend/VendorName/default/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');

    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml')).toBe('app/design/frontend/Regatta/default/Magento_Checkout/layout/checkout_cart_index.xml');
    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml', 'VendorName')).toBe('app/design/frontend/VendorName/default/Magento_Checkout/layout/checkout_cart_index.xml');
});

test('Non-Magento file', () => {
    expect(fileTransform('foo.txt')).toBe(false);
});
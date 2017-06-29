const fileTransform = require('../src/fileTransform');

test('Global JS in app/design', () => {
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js')).toBe('app/design/frontend/Vendor/default/Magento_Wishlist/web/js/wtf.js');
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js', 'CustomVendor')).toBe('app/design/frontend/CustomVendor/default/Magento_Wishlist/web/js/wtf.js');
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js', undefined, 'customTheme')).toBe('app/design/frontend/Vendor/customTheme/Magento_Wishlist/web/js/wtf.js');
    expect(fileTransform('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js', 'CustomVendor', 'customTheme')).toBe('app/design/frontend/CustomVendor/customTheme/Magento_Wishlist/web/js/wtf.js');

    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml')).toBe('app/design/frontend/Vendor/default/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml', 'CustomVendor')).toBe('app/design/frontend/CustomVendor/default/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml', undefined, 'customTheme')).toBe('app/design/frontend/Vendor/customTheme/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml', 'CustomVendor', 'customTheme')).toBe('app/design/frontend/CustomVendor/customTheme/Magento_CustomerCustomAttributes/templates/customer/address/edit.phtml');

    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html')).toBe('app/design/frontend/Vendor/default/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html', 'CustomVendor')).toBe('app/design/frontend/CustomVendor/default/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html', undefined, 'customTheme')).toBe('app/design/frontend/Vendor/customTheme/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');
    expect(fileTransform('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html', 'CustomVendor', 'customTheme')).toBe('app/design/frontend/CustomVendor/customTheme/Magento_CustomerCustomAttributes/web/template/knock-me-out.html');

    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml')).toBe('app/design/frontend/Vendor/default/Magento_Checkout/layout/checkout_cart_index.xml');
    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml', 'CustomVendor')).toBe('app/design/frontend/CustomVendor/default/Magento_Checkout/layout/checkout_cart_index.xml');
    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml', undefined, 'customTheme')).toBe('app/design/frontend/Vendor/customTheme/Magento_Checkout/layout/checkout_cart_index.xml');
    expect(fileTransform('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml', 'CustomVendor', 'customTheme')).toBe('app/design/frontend/CustomVendor/customTheme/Magento_Checkout/layout/checkout_cart_index.xml');
});

test('Non-Magento file', () => {
    expect(fileTransform('foo.txt')).toBe(false);
});
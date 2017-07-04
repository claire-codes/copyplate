import {getFileSpecificPath, getModuleName, transformModuleName, getFileExtension, getFileTypePath} from "../src/helpers";

// TODO: More tests for bad input

test('getFileSpecificPath', () => {
    expect(getFileSpecificPath('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js')).toBe('wtf.js');
    expect(getFileSpecificPath('vendor/magento/module-wishlist/view/frontend/web/js/cart/wtf.js')).toBe('cart/wtf.js');
    expect(getFileSpecificPath('vendor/magento/module-tax/view/frontend/web/js/view/checkout/summary/tax.js')).toBe('view/checkout/summary/tax.js');
    expect(getFileSpecificPath('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml')).toBe('customer/address/edit.phtml');
    expect(getFileSpecificPath('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml')).toBe('checkout_cart_index.xml');
    expect(getFileSpecificPath('vendor/magento/module-checkout/view/frontend/layout/sub/checkout_cart_index.xml')).toBe('sub/checkout_cart_index.xml');
    expect(getFileSpecificPath('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/knock-me-out.html')).toBe('knock-me-out.html');
    expect(getFileSpecificPath('vendor/magento/module-customer-custom-attributes/view/frontend/web/template/here/knock-me-out.html')).toBe('here/knock-me-out.html');
});

test('getModuleName', () => {
    expect(getModuleName('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js')).toBe('Magento_Wishlist');
    expect(getModuleName('vendor/magento/module-customer-custom-attributes/view/frontend/web/js/wtf.js')).toBe('Magento_CustomerCustomAttributes');
    expect(getModuleName('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml')).toBe('Magento_Checkout');
    expect(getModuleName('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml')).toBe('Magento_CustomerCustomAttributes');
});

test('transformModuleName', () => {
    expect(transformModuleName('module-wishlist')).toBe('Magento_Wishlist');
    expect(transformModuleName('module-catalog-rule')).toBe('Magento_CatalogRule');
    expect(transformModuleName('module-customer-custom-attributes')).toBe('Magento_CustomerCustomAttributes');
    expect(transformModuleName('module-bundle-import-export')).toBe('Magento_BundleImportExport');
});

test('getFileExtension', () => {
    expect(getFileExtension('hello.js')).toBe('js');
    expect(getFileExtension('hello.phtml')).toBe('phtml');
    expect(getFileExtension('hello.html')).toBe('html');
    expect(getFileExtension('hello.xml')).toBe('xml');
    expect(getFileExtension('abc/hello.js')).toBe('js');
    expect(getFileExtension('/abc/hello.phtml')).toBe('phtml');
    expect(getFileExtension('hello_hello.html')).toBe('html');
    expect(getFileExtension('abc/hello_hello.xml')).toBe('xml');
    expect(getFileExtension('abc.xyz')).toBe('xyz');
});

test('getFileTypePath', () => {
    expect(getFileTypePath('.js')).toBe("web/js");
    expect(getFileTypePath('.phtml')).toBe("templates");
    expect(getFileTypePath('.xml')).toBe("layout");
    expect(getFileTypePath('.html')).toBe("web/template");
    expect(getFileTypePath('.foo')).toBe("");
})
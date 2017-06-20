import { getFileFromPath, getModuleName, transformModuleName, getFileExtension } from "../src/helpers";

// TODO: Few more tests please

test('simple happy path', () => {
    expect(getFileFromPath('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
        .toBe('wtf.js');

    expect(getFileFromPath('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml'))
        .toBe('customer/address/edit.phtml');

    expect(getFileFromPath('vendor/magento/module-checkout/view/frontend/layout/checkout_cart_index.xml'))
        .toBe('checkout_cart_index.xml');

    expect(getModuleName('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
        .toBe('Magento_Wishlist');

    expect(transformModuleName('module-wishlist'))
        .toBe('Magento_Wishlist');

    expect(transformModuleName('module-customer-custom-attributes'))
        .toBe('Magento_CustomerCustomAttributes');
});

test('getFileExtension', ()=> {
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
import { getFileFromPath, getModuleName, transformModuleName } from "./helpers";

// TODO: Few more tests please

test('simple happy path', () => {
    expect(getFileFromPath('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
        .toBe('wtf.js');

    expect(getFileFromPath('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml'))
        .toBe('customer/address/edit.phtml');

    expect(getFileFromPath('vendor/magento/module-customer-custom-attributes/view/frontend/templates/customer/address/edit.phtml'))
        .toBe('customer/address/edit.phtml');

    expect(getModuleName('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
        .toBe('Magento_Wishlist');

    expect(transformModuleName('module-wishlist'))
        .toBe('Magento_Wishlist');

    expect(transformModuleName('module-customer-custom-attributes'))
        .toBe('Magento_CustomerCustomAttributes');
});
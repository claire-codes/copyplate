import { getFileFromPath, getModuleName, transformModuleName } from "./helpers";

// TODO: Few more tests please

test('simple happy path', () => {
  expect(getFileFromPath('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
    .toBe('wtf.js');

    expect(getFileFromPath('/abc/def.html'))
        .toBe('def.html');

    expect(getModuleName('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
        .toBe('Magento_Wishlist');

    expect(transformModuleName('module-wishlist'))
        .toBe('Magento_Wishlist');
});
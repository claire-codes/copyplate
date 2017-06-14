import { getFileFromPath } from "./helpers";

test('simple happy path', () => {
  expect(getFileFromPath('vendor/magento/module-wishlist/view/frontend/web/js/wtf.js'))
    .toBe('wtf.js');

    expect(getFileFromPath('/abc/def.html'))
        .toBe('def.html');
});
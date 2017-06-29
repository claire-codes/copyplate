# copyplate

For when you get fed up of working out the `app/design` location of a vendor file in Magento.

When given a valid path to a module file in the `vendor` directory, it will create the correct override file in `app/design`. See the `test/` directory for examples.

## Using locally

Clone the repo and from the room run `npm i -g` - now you can run this from anywhere on your machine!

Vendor is currently `Vendor` and theme is `default`, so override these as command line arguments - vendor name first and theme name second, e.g.

```bash
copyplate vendor/magento/module-wishlist/view/frontend/web/js/wtf.js MyVendor myTheme
# creates app/design/frontend/MyVendor/myTheme/Magento_Wishlist/web/js/wtf.js
```

### Testing locally

```bash
npm run babel
mkdir -p vendor/magento/module-wishlist/view/frontend/web/js
echo FU >> vendor/magento/module-wishlist/view/frontend/web/js/wtf.js
# If installed globally with npm i -g:
copyplate vendor/magento/module-wishlist/view/frontend/web/js/wtf.js
# Otherwise
node dist/copyplate.js vendor/magento/module-wishlist/view/frontend/web/js/wtf.js MyVendor myTheme
less app/design/frontend/MyVendor/myTheme/Magento_Wishlist/web/js/wtf.js
```

## Developing

Compile with `babel src/ -d dist/`.

Run tests with `npm t`.

Run as shell script with the hashbang at the top `#!/usr/bin/env node`, make sure the file is executable (`chmod u+x myscript.js`) and then run with `.dist/copyplate.js`.

## Improvements

- [x] ~~Make vendor name customisable~~
- [ ] Make theme name customisable (write tests)
- [ ] More tests for bad input
- [ ] Be able to copy to `app/code`: only does `app/design` for now
- [ ] Copy module-specific JS: only does theme JS for now
- [ ] Handle absolute paths: only handles `vendor/...` for now

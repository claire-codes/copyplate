# copyplate

For when you get fed up of working out the `app/design` location of a vendor file in Magento.

When given a valid path to a module file in the `vendor` directory, it will create the correct override file in `app/design`. See the `test/` directory for examples.

## Using locally

Clone the repo and from the room run `npm i -g` - now you can run this from anywhere on your machine!

Vendor is currently `Regatta` and theme is `default` - they will need changing in `src/fileTransform.js` and then `npm run babel` before installing globally.

### Testing locally

```bash
mkdir -p vendor/magento/module-wishlist/view/frontend/web/js
echo FU >> vendor/magento/module-wishlist/view/frontend/web/js/wtf.js
copyplate vendor/magento/module-wishlist/view/frontend/web/js/wtf.js
less app/design/frontend/Regatta/default/Magento_Wishlist/web/js/wtf.js
```

## Developing

Compile with `babel src/ -d dist/`.

Run tests with `npm t`.

Run as shell script with the hashbang at the top `#!/usr/bin/env node`, make sure the file is executable (`chmod u+x myscript.js`) and then run with `.dist/copyplate.js`.

## Improvements

- [ ] Make theme and vendor name customisable
- [ ] More tests for bad input
- [ ] Be able to copy to `app/code`: only does `app/design` for now
- [ ] Copy module-specific JS: only does theme JS for now
- [ ] Handle absolute paths: only handles `vendor/...` for now

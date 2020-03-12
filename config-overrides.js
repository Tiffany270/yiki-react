const {override, 
    addBabelPlugins,
    useBabelRc,
    addDecoratorsLegacy, 
    disableEsLint} = require('customize-cra');
function myOverrides(config) {
    // do stuff to config
    return config
}

module.exports = override(
    myOverrides,
    addDecoratorsLegacy(),
    disableEsLint(),
  
    addBabelPlugins(
        ['@babel/syntax-dynamic-import', { legacy: true }],
      ), useBabelRc(),
    
);
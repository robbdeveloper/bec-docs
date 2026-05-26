import lunr from "/Users/robertoenasoaie/Documents/projects/bec-docs/node_modules/lunr/lunr.js";
require("/Users/robertoenasoaie/Documents/projects/bec-docs/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/Users/robertoenasoaie/Documents/projects/bec-docs/node_modules/lunr-languages/lunr.it.js")(lunr);
require("/Users/robertoenasoaie/Documents/projects/bec-docs/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","it"];
export const searchIndexUrl = "search-index{dir}.json?_=f16eb4cb";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;
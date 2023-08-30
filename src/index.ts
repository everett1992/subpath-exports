console.log(await Promise.allSettled([
 import('./sub.js'),
 import('#sub'),
 import('subpath-exports/sub'),
]))

export function es5(cb) {
  setTimeout(function() {
    cb(null, 10)
  }, 1)
}

export function es6() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(10), 1
    });
  })
}

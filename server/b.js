const a = 123;
function fn() {
  return 123;
}

const c = 'fff';
// module.exports = {
//   a: a,
//   fb: fn,
// };

// exports.a = a;
// exports.fn = fn;

exports.a = a;

exports.fn = fn;

module.exports = {
  c: c,
};

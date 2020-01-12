function resMsg() {
  // const { success, msg, data } = arguments;

  // console.log('===>', success, msg, data);
  let res = {
    success: Boolean(arguments[0] ? arguments[0] : 0),
    msg: '',
    data: {},
  };
  if (arguments.length > 1) {
    if (typeof arguments[1] != 'string') {
      res.data = arguments[1];
    } else {
      res.msg = arguments[1];
      res.data = arguments[2];
    }
  }

  return res;
}

module.exports = {
  resMsg: resMsg,
};

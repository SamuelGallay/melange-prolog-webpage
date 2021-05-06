(() => {
  var __defProp = Object.defineProperty;
  var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };

  // node_modules/bs-platform/lib/js/caml_array.js
  var require_caml_array = __commonJS((exports) => {
    "use strict";
    function caml_array_sub(x, offset, len2) {
      var result = new Array(len2);
      var j = 0;
      var i = offset;
      while (j < len2) {
        result[j] = x[i];
        j = j + 1 | 0;
        i = i + 1 | 0;
      }
      ;
      return result;
    }
    function len(_acc, _l) {
      while (true) {
        var l = _l;
        var acc = _acc;
        if (!l) {
          return acc;
        }
        _l = l.tl;
        _acc = l.hd.length + acc | 0;
        continue;
      }
      ;
    }
    function fill(arr, _i, _l) {
      while (true) {
        var l = _l;
        var i = _i;
        if (!l) {
          return;
        }
        var x = l.hd;
        var l$1 = x.length;
        var k = i;
        var j = 0;
        while (j < l$1) {
          arr[k] = x[j];
          k = k + 1 | 0;
          j = j + 1 | 0;
        }
        ;
        _l = l.tl;
        _i = k;
        continue;
      }
      ;
    }
    function caml_array_concat(l) {
      var v = len(0, l);
      var result = new Array(v);
      fill(result, 0, l);
      return result;
    }
    function set(xs, index, newval) {
      if (index < 0 || index >= xs.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      xs[index] = newval;
    }
    function get(xs, index) {
      if (index < 0 || index >= xs.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      return xs[index];
    }
    function caml_make_vect(len2, init) {
      var b = new Array(len2);
      for (var i = 0; i < len2; ++i) {
        b[i] = init;
      }
      return b;
    }
    function caml_make_float_vect(len2) {
      var b = new Array(len2);
      for (var i = 0; i < len2; ++i) {
        b[i] = 0;
      }
      return b;
    }
    function caml_array_blit(a1, i1, a2, i2, len2) {
      if (i2 <= i1) {
        for (var j = 0; j < len2; ++j) {
          a2[j + i2 | 0] = a1[j + i1 | 0];
        }
        return;
      }
      for (var j$1 = len2 - 1 | 0; j$1 >= 0; --j$1) {
        a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
      }
    }
    function caml_array_dup(prim) {
      return prim.slice(0);
    }
    exports.caml_array_dup = caml_array_dup;
    exports.caml_array_sub = caml_array_sub;
    exports.caml_array_concat = caml_array_concat;
    exports.caml_make_vect = caml_make_vect;
    exports.caml_make_float_vect = caml_make_float_vect;
    exports.caml_array_blit = caml_array_blit;
    exports.get = get;
    exports.set = set;
  });

  // node_modules/bs-platform/lib/js/curry.js
  var require_curry = __commonJS((exports) => {
    "use strict";
    var Caml_array = require_caml_array();
    function app(_f, _args) {
      while (true) {
        var args = _args;
        var f = _f;
        var init_arity = f.length;
        var arity = init_arity === 0 ? 1 : init_arity;
        var len = args.length;
        var d = arity - len | 0;
        if (d === 0) {
          return f.apply(null, args);
        }
        if (d >= 0) {
          return function(f2, args2) {
            return function(x) {
              return app(f2, args2.concat([x]));
            };
          }(f, args);
        }
        _args = Caml_array.caml_array_sub(args, arity, -d | 0);
        _f = f.apply(null, Caml_array.caml_array_sub(args, 0, arity));
        continue;
      }
      ;
    }
    function _1(o, a0) {
      var arity = o.length;
      if (arity === 1) {
        return o(a0);
      } else {
        switch (arity) {
          case 1:
            return o(a0);
          case 2:
            return function(param) {
              return o(a0, param);
            };
          case 3:
            return function(param, param$1) {
              return o(a0, param, param$1);
            };
          case 4:
            return function(param, param$1, param$2) {
              return o(a0, param, param$1, param$2);
            };
          case 5:
            return function(param, param$1, param$2, param$3) {
              return o(a0, param, param$1, param$2, param$3);
            };
          case 6:
            return function(param, param$1, param$2, param$3, param$4) {
              return o(a0, param, param$1, param$2, param$3, param$4);
            };
          case 7:
            return function(param, param$1, param$2, param$3, param$4, param$5) {
              return o(a0, param, param$1, param$2, param$3, param$4, param$5);
            };
          default:
            return app(o, [a0]);
        }
      }
    }
    function __1(o) {
      var arity = o.length;
      if (arity === 1) {
        return o;
      } else {
        return function(a0) {
          return _1(o, a0);
        };
      }
    }
    function _2(o, a0, a1) {
      var arity = o.length;
      if (arity === 2) {
        return o(a0, a1);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [a1]);
          case 2:
            return o(a0, a1);
          case 3:
            return function(param) {
              return o(a0, a1, param);
            };
          case 4:
            return function(param, param$1) {
              return o(a0, a1, param, param$1);
            };
          case 5:
            return function(param, param$1, param$2) {
              return o(a0, a1, param, param$1, param$2);
            };
          case 6:
            return function(param, param$1, param$2, param$3) {
              return o(a0, a1, param, param$1, param$2, param$3);
            };
          case 7:
            return function(param, param$1, param$2, param$3, param$4) {
              return o(a0, a1, param, param$1, param$2, param$3, param$4);
            };
          default:
            return app(o, [
              a0,
              a1
            ]);
        }
      }
    }
    function __2(o) {
      var arity = o.length;
      if (arity === 2) {
        return o;
      } else {
        return function(a0, a1) {
          return _2(o, a0, a1);
        };
      }
    }
    function _3(o, a0, a1, a2) {
      var arity = o.length;
      if (arity === 3) {
        return o(a0, a1, a2);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2
            ]);
          case 2:
            return app(o(a0, a1), [a2]);
          case 3:
            return o(a0, a1, a2);
          case 4:
            return function(param) {
              return o(a0, a1, a2, param);
            };
          case 5:
            return function(param, param$1) {
              return o(a0, a1, a2, param, param$1);
            };
          case 6:
            return function(param, param$1, param$2) {
              return o(a0, a1, a2, param, param$1, param$2);
            };
          case 7:
            return function(param, param$1, param$2, param$3) {
              return o(a0, a1, a2, param, param$1, param$2, param$3);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2
            ]);
        }
      }
    }
    function __3(o) {
      var arity = o.length;
      if (arity === 3) {
        return o;
      } else {
        return function(a0, a1, a2) {
          return _3(o, a0, a1, a2);
        };
      }
    }
    function _4(o, a0, a1, a2, a3) {
      var arity = o.length;
      if (arity === 4) {
        return o(a0, a1, a2, a3);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3
            ]);
          case 3:
            return app(o(a0, a1, a2), [a3]);
          case 4:
            return o(a0, a1, a2, a3);
          case 5:
            return function(param) {
              return o(a0, a1, a2, a3, param);
            };
          case 6:
            return function(param, param$1) {
              return o(a0, a1, a2, a3, param, param$1);
            };
          case 7:
            return function(param, param$1, param$2) {
              return o(a0, a1, a2, a3, param, param$1, param$2);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3
            ]);
        }
      }
    }
    function __4(o) {
      var arity = o.length;
      if (arity === 4) {
        return o;
      } else {
        return function(a0, a1, a2, a3) {
          return _4(o, a0, a1, a2, a3);
        };
      }
    }
    function _5(o, a0, a1, a2, a3, a4) {
      var arity = o.length;
      if (arity === 5) {
        return o(a0, a1, a2, a3, a4);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [a4]);
          case 5:
            return o(a0, a1, a2, a3, a4);
          case 6:
            return function(param) {
              return o(a0, a1, a2, a3, a4, param);
            };
          case 7:
            return function(param, param$1) {
              return o(a0, a1, a2, a3, a4, param, param$1);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4
            ]);
        }
      }
    }
    function __5(o) {
      var arity = o.length;
      if (arity === 5) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4) {
          return _5(o, a0, a1, a2, a3, a4);
        };
      }
    }
    function _6(o, a0, a1, a2, a3, a4, a5) {
      var arity = o.length;
      if (arity === 6) {
        return o(a0, a1, a2, a3, a4, a5);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [a5]);
          case 6:
            return o(a0, a1, a2, a3, a4, a5);
          case 7:
            return function(param) {
              return o(a0, a1, a2, a3, a4, a5, param);
            };
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5
            ]);
        }
      }
    }
    function __6(o) {
      var arity = o.length;
      if (arity === 6) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5) {
          return _6(o, a0, a1, a2, a3, a4, a5);
        };
      }
    }
    function _7(o, a0, a1, a2, a3, a4, a5, a6) {
      var arity = o.length;
      if (arity === 7) {
        return o(a0, a1, a2, a3, a4, a5, a6);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5,
              a6
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5,
              a6
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [
              a5,
              a6
            ]);
          case 6:
            return app(o(a0, a1, a2, a3, a4, a5), [a6]);
          case 7:
            return o(a0, a1, a2, a3, a4, a5, a6);
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5,
              a6
            ]);
        }
      }
    }
    function __7(o) {
      var arity = o.length;
      if (arity === 7) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return _7(o, a0, a1, a2, a3, a4, a5, a6);
        };
      }
    }
    function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
      var arity = o.length;
      if (arity === 8) {
        return o(a0, a1, a2, a3, a4, a5, a6, a7);
      } else {
        switch (arity) {
          case 1:
            return app(o(a0), [
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 2:
            return app(o(a0, a1), [
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 3:
            return app(o(a0, a1, a2), [
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
          case 4:
            return app(o(a0, a1, a2, a3), [
              a4,
              a5,
              a6,
              a7
            ]);
          case 5:
            return app(o(a0, a1, a2, a3, a4), [
              a5,
              a6,
              a7
            ]);
          case 6:
            return app(o(a0, a1, a2, a3, a4, a5), [
              a6,
              a7
            ]);
          case 7:
            return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
          default:
            return app(o, [
              a0,
              a1,
              a2,
              a3,
              a4,
              a5,
              a6,
              a7
            ]);
        }
      }
    }
    function __8(o) {
      var arity = o.length;
      if (arity === 8) {
        return o;
      } else {
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
        };
      }
    }
    exports.app = app;
    exports._1 = _1;
    exports.__1 = __1;
    exports._2 = _2;
    exports.__2 = __2;
    exports._3 = _3;
    exports.__3 = __3;
    exports._4 = _4;
    exports.__4 = __4;
    exports._5 = _5;
    exports.__5 = __5;
    exports._6 = _6;
    exports.__6 = __6;
    exports._7 = _7;
    exports.__7 = __7;
    exports._8 = _8;
    exports.__8 = __8;
  });

  // node_modules/bs-platform/lib/js/caml_option.js
  var require_caml_option = __commonJS((exports) => {
    "use strict";
    function isNested(x) {
      return x.BS_PRIVATE_NESTED_SOME_NONE !== void 0;
    }
    function some(x) {
      if (x === void 0) {
        return {
          BS_PRIVATE_NESTED_SOME_NONE: 0
        };
      } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
        return {
          BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
        };
      } else {
        return x;
      }
    }
    function nullable_to_opt(x) {
      if (x == null) {
        return;
      } else {
        return some(x);
      }
    }
    function undefined_to_opt(x) {
      if (x === void 0) {
        return;
      } else {
        return some(x);
      }
    }
    function null_to_opt(x) {
      if (x === null) {
        return;
      } else {
        return some(x);
      }
    }
    function valFromOption(x) {
      if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) {
        return x;
      }
      var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
      if (depth === 0) {
        return;
      } else {
        return {
          BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
        };
      }
    }
    function option_get(x) {
      if (x === void 0) {
        return;
      } else {
        return valFromOption(x);
      }
    }
    function option_unwrap(x) {
      if (x !== void 0) {
        return x.VAL;
      } else {
        return x;
      }
    }
    exports.nullable_to_opt = nullable_to_opt;
    exports.undefined_to_opt = undefined_to_opt;
    exports.null_to_opt = null_to_opt;
    exports.valFromOption = valFromOption;
    exports.some = some;
    exports.isNested = isNested;
    exports.option_get = option_get;
    exports.option_unwrap = option_unwrap;
  });

  // node_modules/bs-platform/lib/js/caml_exceptions.js
  var require_caml_exceptions = __commonJS((exports) => {
    "use strict";
    var id = {
      contents: 0
    };
    function create(str) {
      id.contents = id.contents + 1 | 0;
      return str + ("/" + id.contents);
    }
    function caml_is_extension(e) {
      if (e == null) {
        return false;
      } else {
        return typeof e.RE_EXN_ID === "string";
      }
    }
    function caml_exn_slot_name(x) {
      return x.RE_EXN_ID;
    }
    exports.id = id;
    exports.create = create;
    exports.caml_is_extension = caml_is_extension;
    exports.caml_exn_slot_name = caml_exn_slot_name;
  });

  // node_modules/bs-platform/lib/js/caml_js_exceptions.js
  var require_caml_js_exceptions = __commonJS((exports) => {
    "use strict";
    var Caml_option = require_caml_option();
    var Caml_exceptions = require_caml_exceptions();
    var $$Error = /* @__PURE__ */ Caml_exceptions.create("Caml_js_exceptions.Error");
    function internalToOCamlException(e) {
      if (Caml_exceptions.caml_is_extension(e)) {
        return e;
      } else {
        return {
          RE_EXN_ID: $$Error,
          _1: e
        };
      }
    }
    function caml_as_js_exn(exn) {
      if (exn.RE_EXN_ID === $$Error) {
        return Caml_option.some(exn._1);
      }
    }
    exports.$$Error = $$Error;
    exports.internalToOCamlException = internalToOCamlException;
    exports.caml_as_js_exn = caml_as_js_exn;
  });

  // node_modules/bs-platform/lib/js/js_exn.js
  var require_js_exn = __commonJS((exports) => {
    "use strict";
    var Caml_js_exceptions = require_caml_js_exceptions();
    var anyToExnInternal = Caml_js_exceptions.internalToOCamlException;
    function raiseError(str) {
      throw new Error(str);
    }
    function raiseEvalError(str) {
      throw new EvalError(str);
    }
    function raiseRangeError(str) {
      throw new RangeError(str);
    }
    function raiseReferenceError(str) {
      throw new ReferenceError(str);
    }
    function raiseSyntaxError(str) {
      throw new SyntaxError(str);
    }
    function raiseTypeError(str) {
      throw new TypeError(str);
    }
    function raiseUriError(str) {
      throw new URIError(str);
    }
    var $$Error$1 = Caml_js_exceptions.$$Error;
    exports.$$Error = $$Error$1;
    exports.anyToExnInternal = anyToExnInternal;
    exports.raiseError = raiseError;
    exports.raiseEvalError = raiseEvalError;
    exports.raiseRangeError = raiseRangeError;
    exports.raiseReferenceError = raiseReferenceError;
    exports.raiseSyntaxError = raiseSyntaxError;
    exports.raiseTypeError = raiseTypeError;
    exports.raiseUriError = raiseUriError;
  });

  // node_modules/bs-platform/lib/js/caml_bytes.js
  var require_caml_bytes = __commonJS((exports) => {
    "use strict";
    function set(s, i, ch) {
      if (i < 0 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      s[i] = ch;
    }
    function get(s, i) {
      if (i < 0 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      return s[i];
    }
    function caml_fill_bytes(s, i, l, c) {
      if (l <= 0) {
        return;
      }
      for (var k = i, k_finish = l + i | 0; k < k_finish; ++k) {
        s[k] = c;
      }
    }
    function caml_create_bytes(len) {
      if (len < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.create",
          Error: new Error()
        };
      }
      var result = new Array(len);
      for (var i = 0; i < len; ++i) {
        result[i] = 0;
      }
      return result;
    }
    function caml_blit_bytes(s1, i1, s2, i2, len) {
      if (len <= 0) {
        return;
      }
      if (s1 === s2) {
        if (i1 < i2) {
          var range_a = (s1.length - i2 | 0) - 1 | 0;
          var range_b = len - 1 | 0;
          var range = range_a > range_b ? range_b : range_a;
          for (var j = range; j >= 0; --j) {
            s1[i2 + j | 0] = s1[i1 + j | 0];
          }
          return;
        }
        if (i1 <= i2) {
          return;
        }
        var range_a$1 = (s1.length - i1 | 0) - 1 | 0;
        var range_b$1 = len - 1 | 0;
        var range$1 = range_a$1 > range_b$1 ? range_b$1 : range_a$1;
        for (var k = 0; k <= range$1; ++k) {
          s1[i2 + k | 0] = s1[i1 + k | 0];
        }
        return;
      }
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for (var i = 0; i < len; ++i) {
          s2[i2 + i | 0] = s1[i1 + i | 0];
        }
        return;
      }
      for (var i$1 = 0; i$1 < off1; ++i$1) {
        s2[i2 + i$1 | 0] = s1[i1 + i$1 | 0];
      }
      for (var i$2 = off1; i$2 < len; ++i$2) {
        s2[i2 + i$2 | 0] = 0;
      }
    }
    function bytes_to_string(a) {
      var i = 0;
      var len = a.length;
      var s = "";
      var s_len = len;
      if (i === 0 && len <= 4096 && len === a.length) {
        return String.fromCharCode.apply(null, a);
      }
      var offset = 0;
      while (s_len > 0) {
        var next = s_len < 1024 ? s_len : 1024;
        var tmp_bytes = new Array(next);
        for (var k = 0; k < next; ++k) {
          tmp_bytes[k] = a[k + offset | 0];
        }
        s = s + String.fromCharCode.apply(null, tmp_bytes);
        s_len = s_len - next | 0;
        offset = offset + next | 0;
      }
      ;
      return s;
    }
    function caml_blit_string(s1, i1, s2, i2, len) {
      if (len <= 0) {
        return;
      }
      var off1 = s1.length - i1 | 0;
      if (len <= off1) {
        for (var i = 0; i < len; ++i) {
          s2[i2 + i | 0] = s1.charCodeAt(i1 + i | 0);
        }
        return;
      }
      for (var i$1 = 0; i$1 < off1; ++i$1) {
        s2[i2 + i$1 | 0] = s1.charCodeAt(i1 + i$1 | 0);
      }
      for (var i$2 = off1; i$2 < len; ++i$2) {
        s2[i2 + i$2 | 0] = 0;
      }
    }
    function bytes_of_string(s) {
      var len = s.length;
      var res = new Array(len);
      for (var i = 0; i < len; ++i) {
        res[i] = s.charCodeAt(i);
      }
      return res;
    }
    function caml_bytes_compare_aux(s1, s2, _off, len, def) {
      while (true) {
        var off = _off;
        if (off >= len) {
          return def;
        }
        var a = s1[off];
        var b = s2[off];
        if (a > b) {
          return 1;
        }
        if (a < b) {
          return -1;
        }
        _off = off + 1 | 0;
        continue;
      }
      ;
    }
    function caml_bytes_compare(s1, s2) {
      var len1 = s1.length;
      var len2 = s2.length;
      if (len1 === len2) {
        return caml_bytes_compare_aux(s1, s2, 0, len1, 0);
      } else if (len1 < len2) {
        return caml_bytes_compare_aux(s1, s2, 0, len1, -1);
      } else {
        return caml_bytes_compare_aux(s1, s2, 0, len2, 1);
      }
    }
    function caml_bytes_equal(s1, s2) {
      var len1 = s1.length;
      var len2 = s2.length;
      if (len1 === len2) {
        var _off = 0;
        while (true) {
          var off = _off;
          if (off === len1) {
            return true;
          }
          var a = s1[off];
          var b = s2[off];
          if (a !== b) {
            return false;
          }
          _off = off + 1 | 0;
          continue;
        }
        ;
      } else {
        return false;
      }
    }
    function caml_bytes_greaterthan(s1, s2) {
      return caml_bytes_compare(s1, s2) > 0;
    }
    function caml_bytes_greaterequal(s1, s2) {
      return caml_bytes_compare(s1, s2) >= 0;
    }
    function caml_bytes_lessthan(s1, s2) {
      return caml_bytes_compare(s1, s2) < 0;
    }
    function caml_bytes_lessequal(s1, s2) {
      return caml_bytes_compare(s1, s2) <= 0;
    }
    exports.caml_create_bytes = caml_create_bytes;
    exports.caml_fill_bytes = caml_fill_bytes;
    exports.get = get;
    exports.set = set;
    exports.bytes_to_string = bytes_to_string;
    exports.caml_blit_bytes = caml_blit_bytes;
    exports.caml_blit_string = caml_blit_string;
    exports.bytes_of_string = bytes_of_string;
    exports.caml_bytes_compare = caml_bytes_compare;
    exports.caml_bytes_greaterthan = caml_bytes_greaterthan;
    exports.caml_bytes_greaterequal = caml_bytes_greaterequal;
    exports.caml_bytes_lessthan = caml_bytes_lessthan;
    exports.caml_bytes_lessequal = caml_bytes_lessequal;
    exports.caml_bytes_equal = caml_bytes_equal;
  });

  // node_modules/bs-platform/lib/js/char.js
  var require_char = __commonJS((exports) => {
    "use strict";
    var Caml_bytes = require_caml_bytes();
    function chr(n) {
      if (n < 0 || n > 255) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Char.chr",
          Error: new Error()
        };
      }
      return n;
    }
    function escaped(c) {
      var exit = 0;
      if (c >= 40) {
        if (c === 92) {
          return "\\\\";
        }
        exit = c >= 127 ? 1 : 2;
      } else if (c >= 32) {
        if (c >= 39) {
          return "\\'";
        }
        exit = 2;
      } else if (c >= 14) {
        exit = 1;
      } else {
        switch (c) {
          case 8:
            return "\\b";
          case 9:
            return "\\t";
          case 10:
            return "\\n";
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 11:
          case 12:
            exit = 1;
            break;
          case 13:
            return "\\r";
        }
      }
      switch (exit) {
        case 1:
          var s = [
            0,
            0,
            0,
            0
          ];
          s[0] = 92;
          s[1] = 48 + (c / 100 | 0) | 0;
          s[2] = 48 + (c / 10 | 0) % 10 | 0;
          s[3] = 48 + c % 10 | 0;
          return Caml_bytes.bytes_to_string(s);
        case 2:
          var s$1 = [0];
          s$1[0] = c;
          return Caml_bytes.bytes_to_string(s$1);
      }
    }
    function lowercase(c) {
      if (c >= 65 && c <= 90 || c >= 192 && c <= 214 || c >= 216 && c <= 222) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    function uppercase(c) {
      if (c >= 97 && c <= 122 || c >= 224 && c <= 246 || c >= 248 && c <= 254) {
        return c - 32 | 0;
      } else {
        return c;
      }
    }
    function lowercase_ascii(c) {
      if (c >= 65 && c <= 90) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    function uppercase_ascii(c) {
      if (c >= 97 && c <= 122) {
        return c - 32 | 0;
      } else {
        return c;
      }
    }
    function compare(c1, c2) {
      return c1 - c2 | 0;
    }
    function equal(c1, c2) {
      return (c1 - c2 | 0) === 0;
    }
    exports.chr = chr;
    exports.escaped = escaped;
    exports.lowercase = lowercase;
    exports.uppercase = uppercase;
    exports.lowercase_ascii = lowercase_ascii;
    exports.uppercase_ascii = uppercase_ascii;
    exports.compare = compare;
    exports.equal = equal;
  });

  // node_modules/bs-platform/lib/js/caml_primitive.js
  var require_caml_primitive = __commonJS((exports) => {
    "use strict";
    function caml_int_compare(x, y) {
      if (x < y) {
        return -1;
      } else if (x === y) {
        return 0;
      } else {
        return 1;
      }
    }
    function caml_bool_compare(x, y) {
      if (x) {
        if (y) {
          return 0;
        } else {
          return 1;
        }
      } else if (y) {
        return -1;
      } else {
        return 0;
      }
    }
    function caml_float_compare(x, y) {
      if (x === y) {
        return 0;
      } else if (x < y) {
        return -1;
      } else if (x > y || x === x) {
        return 1;
      } else if (y === y) {
        return -1;
      } else {
        return 0;
      }
    }
    function caml_string_compare(s1, s2) {
      if (s1 === s2) {
        return 0;
      } else if (s1 < s2) {
        return -1;
      } else {
        return 1;
      }
    }
    function caml_bool_min(x, y) {
      if (x) {
        return y;
      } else {
        return x;
      }
    }
    function caml_int_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_float_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_string_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_int32_min(x, y) {
      if (x < y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_bool_max(x, y) {
      if (x) {
        return x;
      } else {
        return y;
      }
    }
    function caml_int_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_float_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_string_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    function caml_int32_max(x, y) {
      if (x > y) {
        return x;
      } else {
        return y;
      }
    }
    var caml_int32_compare = caml_int_compare;
    exports.caml_int_compare = caml_int_compare;
    exports.caml_bool_compare = caml_bool_compare;
    exports.caml_float_compare = caml_float_compare;
    exports.caml_string_compare = caml_string_compare;
    exports.caml_int32_compare = caml_int32_compare;
    exports.caml_bool_min = caml_bool_min;
    exports.caml_int_min = caml_int_min;
    exports.caml_float_min = caml_float_min;
    exports.caml_string_min = caml_string_min;
    exports.caml_int32_min = caml_int32_min;
    exports.caml_bool_max = caml_bool_max;
    exports.caml_int_max = caml_int_max;
    exports.caml_float_max = caml_float_max;
    exports.caml_string_max = caml_string_max;
    exports.caml_int32_max = caml_int32_max;
  });

  // node_modules/bs-platform/lib/js/bytes.js
  var require_bytes = __commonJS((exports) => {
    "use strict";
    var Char = require_char();
    var Curry = require_curry();
    var Caml_bytes = require_caml_bytes();
    var Caml_primitive = require_caml_primitive();
    var Caml_js_exceptions = require_caml_js_exceptions();
    function make(n, c) {
      var s = Caml_bytes.caml_create_bytes(n);
      Caml_bytes.caml_fill_bytes(s, 0, n, c);
      return s;
    }
    function init(n, f) {
      var s = Caml_bytes.caml_create_bytes(n);
      for (var i = 0; i < n; ++i) {
        s[i] = Curry._1(f, i);
      }
      return s;
    }
    var empty = [];
    function copy(s) {
      var len = s.length;
      var r = Caml_bytes.caml_create_bytes(len);
      Caml_bytes.caml_blit_bytes(s, 0, r, 0, len);
      return r;
    }
    function to_string(b) {
      return Caml_bytes.bytes_to_string(copy(b));
    }
    function of_string(s) {
      return copy(Caml_bytes.bytes_of_string(s));
    }
    function sub(s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.sub / Bytes.sub",
          Error: new Error()
        };
      }
      var r = Caml_bytes.caml_create_bytes(len);
      Caml_bytes.caml_blit_bytes(s, ofs, r, 0, len);
      return r;
    }
    function sub_string(b, ofs, len) {
      return Caml_bytes.bytes_to_string(sub(b, ofs, len));
    }
    function $plus$plus(a, b) {
      var c = a + b | 0;
      var match = a < 0;
      var match$1 = b < 0;
      var match$2 = c < 0;
      if (match) {
        if (!match$1) {
          return c;
        }
        if (match$2) {
          return c;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error()
        };
      }
      if (match$1) {
        return c;
      }
      if (match$2) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.extend",
          Error: new Error()
        };
      }
      return c;
    }
    function extend(s, left, right) {
      var len = $plus$plus($plus$plus(s.length, left), right);
      var r = Caml_bytes.caml_create_bytes(len);
      var match = left < 0 ? [
        -left | 0,
        0
      ] : [
        0,
        left
      ];
      var dstoff = match[1];
      var srcoff = match[0];
      var cpylen = Caml_primitive.caml_int_min(s.length - srcoff | 0, len - dstoff | 0);
      if (cpylen > 0) {
        Caml_bytes.caml_blit_bytes(s, srcoff, r, dstoff, cpylen);
      }
      return r;
    }
    function fill(s, ofs, len, c) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.fill / Bytes.fill",
          Error: new Error()
        };
      }
      return Caml_bytes.caml_fill_bytes(s, ofs, len, c);
    }
    function blit(s1, ofs1, s2, ofs2, len) {
      if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "Bytes.blit",
          Error: new Error()
        };
      }
      return Caml_bytes.caml_blit_bytes(s1, ofs1, s2, ofs2, len);
    }
    function blit_string(s1, ofs1, s2, ofs2, len) {
      if (len < 0 || ofs1 < 0 || ofs1 > (s1.length - len | 0) || ofs2 < 0 || ofs2 > (s2.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.blit / Bytes.blit_string",
          Error: new Error()
        };
      }
      return Caml_bytes.caml_blit_string(s1, ofs1, s2, ofs2, len);
    }
    function iter(f, a) {
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        Curry._1(f, a[i]);
      }
    }
    function iteri(f, a) {
      for (var i = 0, i_finish = a.length; i < i_finish; ++i) {
        Curry._2(f, i, a[i]);
      }
    }
    function ensure_ge(x, y) {
      if (x >= y) {
        return x;
      }
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "Bytes.concat",
        Error: new Error()
      };
    }
    function sum_lengths(_acc, seplen, _param) {
      while (true) {
        var param = _param;
        var acc = _acc;
        if (!param) {
          return acc;
        }
        var tl = param.tl;
        var hd = param.hd;
        if (!tl) {
          return hd.length + acc | 0;
        }
        _param = tl;
        _acc = ensure_ge((hd.length + seplen | 0) + acc | 0, acc);
        continue;
      }
      ;
    }
    function concat(sep, l) {
      if (!l) {
        return empty;
      }
      var seplen = sep.length;
      var dst = Caml_bytes.caml_create_bytes(sum_lengths(0, seplen, l));
      var _pos = 0;
      var _param = l;
      while (true) {
        var param = _param;
        var pos = _pos;
        if (!param) {
          return dst;
        }
        var tl = param.tl;
        var hd = param.hd;
        if (tl) {
          Caml_bytes.caml_blit_bytes(hd, 0, dst, pos, hd.length);
          Caml_bytes.caml_blit_bytes(sep, 0, dst, pos + hd.length | 0, seplen);
          _param = tl;
          _pos = (pos + hd.length | 0) + seplen | 0;
          continue;
        }
        Caml_bytes.caml_blit_bytes(hd, 0, dst, pos, hd.length);
        return dst;
      }
      ;
    }
    function cat(s1, s2) {
      var l1 = s1.length;
      var l2 = s2.length;
      var r = Caml_bytes.caml_create_bytes(l1 + l2 | 0);
      Caml_bytes.caml_blit_bytes(s1, 0, r, 0, l1);
      Caml_bytes.caml_blit_bytes(s2, 0, r, l1, l2);
      return r;
    }
    function is_space(param) {
      if (param > 13 || param < 9) {
        return param === 32;
      } else {
        return param !== 11;
      }
    }
    function trim(s) {
      var len = s.length;
      var i = 0;
      while (i < len && is_space(s[i])) {
        i = i + 1 | 0;
      }
      ;
      var j = len - 1 | 0;
      while (j >= i && is_space(s[j])) {
        j = j - 1 | 0;
      }
      ;
      if (j >= i) {
        return sub(s, i, (j - i | 0) + 1 | 0);
      } else {
        return empty;
      }
    }
    function escaped(s) {
      var n = 0;
      for (var i = 0, i_finish = s.length; i < i_finish; ++i) {
        var match = s[i];
        n = n + (match >= 32 ? match > 92 || match < 34 ? match >= 127 ? 4 : 1 : match > 91 || match < 35 ? 2 : 1 : match >= 11 ? match !== 13 ? 4 : 2 : match >= 8 ? 2 : 4) | 0;
      }
      if (n === s.length) {
        return copy(s);
      }
      var s$prime = Caml_bytes.caml_create_bytes(n);
      n = 0;
      for (var i$1 = 0, i_finish$1 = s.length; i$1 < i_finish$1; ++i$1) {
        var c = s[i$1];
        var exit = 0;
        if (c >= 35) {
          if (c !== 92) {
            if (c >= 127) {
              exit = 1;
            } else {
              s$prime[n] = c;
            }
          } else {
            exit = 2;
          }
        } else if (c >= 32) {
          if (c >= 34) {
            exit = 2;
          } else {
            s$prime[n] = c;
          }
        } else if (c >= 14) {
          exit = 1;
        } else {
          switch (c) {
            case 8:
              s$prime[n] = 92;
              n = n + 1 | 0;
              s$prime[n] = 98;
              break;
            case 9:
              s$prime[n] = 92;
              n = n + 1 | 0;
              s$prime[n] = 116;
              break;
            case 10:
              s$prime[n] = 92;
              n = n + 1 | 0;
              s$prime[n] = 110;
              break;
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
              exit = 1;
              break;
            case 13:
              s$prime[n] = 92;
              n = n + 1 | 0;
              s$prime[n] = 114;
              break;
          }
        }
        switch (exit) {
          case 1:
            s$prime[n] = 92;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 100 | 0) | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + (c / 10 | 0) % 10 | 0;
            n = n + 1 | 0;
            s$prime[n] = 48 + c % 10 | 0;
            break;
          case 2:
            s$prime[n] = 92;
            n = n + 1 | 0;
            s$prime[n] = c;
            break;
        }
        n = n + 1 | 0;
      }
      return s$prime;
    }
    function map(f, s) {
      var l = s.length;
      if (l === 0) {
        return s;
      }
      var r = Caml_bytes.caml_create_bytes(l);
      for (var i = 0; i < l; ++i) {
        r[i] = Curry._1(f, s[i]);
      }
      return r;
    }
    function mapi(f, s) {
      var l = s.length;
      if (l === 0) {
        return s;
      }
      var r = Caml_bytes.caml_create_bytes(l);
      for (var i = 0; i < l; ++i) {
        r[i] = Curry._2(f, i, s[i]);
      }
      return r;
    }
    function uppercase_ascii(s) {
      return map(Char.uppercase_ascii, s);
    }
    function lowercase_ascii(s) {
      return map(Char.lowercase_ascii, s);
    }
    function apply1(f, s) {
      if (s.length === 0) {
        return s;
      }
      var r = copy(s);
      r[0] = Curry._1(f, s[0]);
      return r;
    }
    function capitalize_ascii(s) {
      return apply1(Char.uppercase_ascii, s);
    }
    function uncapitalize_ascii(s) {
      return apply1(Char.lowercase_ascii, s);
    }
    function index_rec(s, lim, _i, c) {
      while (true) {
        var i = _i;
        if (i >= lim) {
          throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
        }
        if (s[i] === c) {
          return i;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function index(s, c) {
      return index_rec(s, s.length, 0, c);
    }
    function index_rec_opt(s, lim, _i, c) {
      while (true) {
        var i = _i;
        if (i >= lim) {
          return;
        }
        if (s[i] === c) {
          return i;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function index_opt(s, c) {
      return index_rec_opt(s, s.length, 0, c);
    }
    function index_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error()
        };
      }
      return index_rec(s, l, i, c);
    }
    function index_from_opt(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error()
        };
      }
      return index_rec_opt(s, l, i, c);
    }
    function rindex_rec(s, _i, c) {
      while (true) {
        var i = _i;
        if (i < 0) {
          throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
        }
        if (s[i] === c) {
          return i;
        }
        _i = i - 1 | 0;
        continue;
      }
      ;
    }
    function rindex(s, c) {
      return rindex_rec(s, s.length - 1 | 0, c);
    }
    function rindex_from(s, i, c) {
      if (i < -1 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error()
        };
      }
      return rindex_rec(s, i, c);
    }
    function rindex_rec_opt(s, _i, c) {
      while (true) {
        var i = _i;
        if (i < 0) {
          return;
        }
        if (s[i] === c) {
          return i;
        }
        _i = i - 1 | 0;
        continue;
      }
      ;
    }
    function rindex_opt(s, c) {
      return rindex_rec_opt(s, s.length - 1 | 0, c);
    }
    function rindex_from_opt(s, i, c) {
      if (i < -1 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error()
        };
      }
      return rindex_rec_opt(s, i, c);
    }
    function contains_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error()
        };
      }
      try {
        index_rec(s, l, i, c);
        return true;
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Not_found") {
          return false;
        }
        throw exn;
      }
    }
    function contains(s, c) {
      return contains_from(s, 0, c);
    }
    function rcontains_from(s, i, c) {
      if (i < 0 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error()
        };
      }
      try {
        rindex_rec(s, i, c);
        return true;
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Not_found") {
          return false;
        }
        throw exn;
      }
    }
    var compare = Caml_bytes.caml_bytes_compare;
    function uppercase(s) {
      return map(Char.uppercase, s);
    }
    function lowercase(s) {
      return map(Char.lowercase, s);
    }
    function capitalize(s) {
      return apply1(Char.uppercase, s);
    }
    function uncapitalize(s) {
      return apply1(Char.lowercase, s);
    }
    var equal = Caml_bytes.caml_bytes_equal;
    var unsafe_to_string = Caml_bytes.bytes_to_string;
    var unsafe_of_string = Caml_bytes.bytes_of_string;
    exports.make = make;
    exports.init = init;
    exports.empty = empty;
    exports.copy = copy;
    exports.of_string = of_string;
    exports.to_string = to_string;
    exports.sub = sub;
    exports.sub_string = sub_string;
    exports.extend = extend;
    exports.fill = fill;
    exports.blit = blit;
    exports.blit_string = blit_string;
    exports.concat = concat;
    exports.cat = cat;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi;
    exports.trim = trim;
    exports.escaped = escaped;
    exports.index = index;
    exports.index_opt = index_opt;
    exports.rindex = rindex;
    exports.rindex_opt = rindex_opt;
    exports.index_from = index_from;
    exports.index_from_opt = index_from_opt;
    exports.rindex_from = rindex_from;
    exports.rindex_from_opt = rindex_from_opt;
    exports.contains = contains;
    exports.contains_from = contains_from;
    exports.rcontains_from = rcontains_from;
    exports.uppercase = uppercase;
    exports.lowercase = lowercase;
    exports.capitalize = capitalize;
    exports.uncapitalize = uncapitalize;
    exports.uppercase_ascii = uppercase_ascii;
    exports.lowercase_ascii = lowercase_ascii;
    exports.capitalize_ascii = capitalize_ascii;
    exports.uncapitalize_ascii = uncapitalize_ascii;
    exports.compare = compare;
    exports.equal = equal;
    exports.unsafe_to_string = unsafe_to_string;
    exports.unsafe_of_string = unsafe_of_string;
  });

  // node_modules/bs-platform/lib/js/caml_string.js
  var require_caml_string = __commonJS((exports) => {
    "use strict";
    function get(s, i) {
      if (i >= s.length || i < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
      }
      return s.charCodeAt(i);
    }
    function make(n, ch) {
      return String.fromCharCode(ch).repeat(n);
    }
    exports.get = get;
    exports.make = make;
  });

  // node_modules/bs-platform/lib/js/string.js
  var require_string = __commonJS((exports) => {
    "use strict";
    var Bytes = require_bytes();
    var Curry = require_curry();
    var Caml_bytes = require_caml_bytes();
    var Caml_string = require_caml_string();
    var Caml_primitive = require_caml_primitive();
    var Caml_js_exceptions = require_caml_js_exceptions();
    function init(n, f) {
      return Caml_bytes.bytes_to_string(Bytes.init(n, f));
    }
    function copy(s) {
      return Caml_bytes.bytes_to_string(Bytes.copy(Caml_bytes.bytes_of_string(s)));
    }
    function sub(s, ofs, len) {
      return Caml_bytes.bytes_to_string(Bytes.sub(Caml_bytes.bytes_of_string(s), ofs, len));
    }
    function ensure_ge(x, y) {
      if (x >= y) {
        return x;
      }
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "String.concat",
        Error: new Error()
      };
    }
    function sum_lengths(_acc, seplen, _param) {
      while (true) {
        var param = _param;
        var acc = _acc;
        if (!param) {
          return acc;
        }
        var tl = param.tl;
        var hd = param.hd;
        if (!tl) {
          return hd.length + acc | 0;
        }
        _param = tl;
        _acc = ensure_ge((hd.length + seplen | 0) + acc | 0, acc);
        continue;
      }
      ;
    }
    function unsafe_blits(dst, _pos, sep, seplen, _param) {
      while (true) {
        var param = _param;
        var pos = _pos;
        if (!param) {
          return dst;
        }
        var tl = param.tl;
        var hd = param.hd;
        if (tl) {
          Caml_bytes.caml_blit_string(hd, 0, dst, pos, hd.length);
          Caml_bytes.caml_blit_string(sep, 0, dst, pos + hd.length | 0, seplen);
          _param = tl;
          _pos = (pos + hd.length | 0) + seplen | 0;
          continue;
        }
        Caml_bytes.caml_blit_string(hd, 0, dst, pos, hd.length);
        return dst;
      }
      ;
    }
    function concat(sep, l) {
      if (!l) {
        return "";
      }
      var seplen = sep.length;
      return Caml_bytes.bytes_to_string(unsafe_blits(Caml_bytes.caml_create_bytes(sum_lengths(0, seplen, l)), 0, sep, seplen, l));
    }
    function iter(f, s) {
      for (var i = 0, i_finish = s.length; i < i_finish; ++i) {
        Curry._1(f, s.charCodeAt(i));
      }
    }
    function iteri(f, s) {
      for (var i = 0, i_finish = s.length; i < i_finish; ++i) {
        Curry._2(f, i, s.charCodeAt(i));
      }
    }
    function map(f, s) {
      return Caml_bytes.bytes_to_string(Bytes.map(f, Caml_bytes.bytes_of_string(s)));
    }
    function mapi(f, s) {
      return Caml_bytes.bytes_to_string(Bytes.mapi(f, Caml_bytes.bytes_of_string(s)));
    }
    function is_space(param) {
      if (param > 13 || param < 9) {
        return param === 32;
      } else {
        return param !== 11;
      }
    }
    function trim(s) {
      if (s === "" || !(is_space(s.charCodeAt(0)) || is_space(s.charCodeAt(s.length - 1 | 0)))) {
        return s;
      } else {
        return Caml_bytes.bytes_to_string(Bytes.trim(Caml_bytes.bytes_of_string(s)));
      }
    }
    function escaped(s) {
      var needs_escape = function(_i) {
        while (true) {
          var i = _i;
          if (i >= s.length) {
            return false;
          }
          var match = s.charCodeAt(i);
          if (match < 32) {
            return true;
          }
          if (match > 92 || match < 34) {
            if (match >= 127) {
              return true;
            }
            _i = i + 1 | 0;
            continue;
          }
          if (match > 91 || match < 35) {
            return true;
          }
          _i = i + 1 | 0;
          continue;
        }
        ;
      };
      if (needs_escape(0)) {
        return Caml_bytes.bytes_to_string(Bytes.escaped(Caml_bytes.bytes_of_string(s)));
      } else {
        return s;
      }
    }
    function index_rec(s, lim, _i, c) {
      while (true) {
        var i = _i;
        if (i >= lim) {
          throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
        }
        if (s.charCodeAt(i) === c) {
          return i;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function index(s, c) {
      return index_rec(s, s.length, 0, c);
    }
    function index_rec_opt(s, lim, _i, c) {
      while (true) {
        var i = _i;
        if (i >= lim) {
          return;
        }
        if (s.charCodeAt(i) === c) {
          return i;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function index_opt(s, c) {
      return index_rec_opt(s, s.length, 0, c);
    }
    function index_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from / Bytes.index_from",
          Error: new Error()
        };
      }
      return index_rec(s, l, i, c);
    }
    function index_from_opt(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.index_from_opt / Bytes.index_from_opt",
          Error: new Error()
        };
      }
      return index_rec_opt(s, l, i, c);
    }
    function rindex_rec(s, _i, c) {
      while (true) {
        var i = _i;
        if (i < 0) {
          throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
        }
        if (s.charCodeAt(i) === c) {
          return i;
        }
        _i = i - 1 | 0;
        continue;
      }
      ;
    }
    function rindex(s, c) {
      return rindex_rec(s, s.length - 1 | 0, c);
    }
    function rindex_from(s, i, c) {
      if (i < -1 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from / Bytes.rindex_from",
          Error: new Error()
        };
      }
      return rindex_rec(s, i, c);
    }
    function rindex_rec_opt(s, _i, c) {
      while (true) {
        var i = _i;
        if (i < 0) {
          return;
        }
        if (s.charCodeAt(i) === c) {
          return i;
        }
        _i = i - 1 | 0;
        continue;
      }
      ;
    }
    function rindex_opt(s, c) {
      return rindex_rec_opt(s, s.length - 1 | 0, c);
    }
    function rindex_from_opt(s, i, c) {
      if (i < -1 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
          Error: new Error()
        };
      }
      return rindex_rec_opt(s, i, c);
    }
    function contains_from(s, i, c) {
      var l = s.length;
      if (i < 0 || i > l) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.contains_from / Bytes.contains_from",
          Error: new Error()
        };
      }
      try {
        index_rec(s, l, i, c);
        return true;
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Not_found") {
          return false;
        }
        throw exn;
      }
    }
    function contains(s, c) {
      return contains_from(s, 0, c);
    }
    function rcontains_from(s, i, c) {
      if (i < 0 || i >= s.length) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "String.rcontains_from / Bytes.rcontains_from",
          Error: new Error()
        };
      }
      try {
        rindex_rec(s, i, c);
        return true;
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Not_found") {
          return false;
        }
        throw exn;
      }
    }
    function uppercase_ascii(s) {
      return Caml_bytes.bytes_to_string(Bytes.uppercase_ascii(Caml_bytes.bytes_of_string(s)));
    }
    function lowercase_ascii(s) {
      return Caml_bytes.bytes_to_string(Bytes.lowercase_ascii(Caml_bytes.bytes_of_string(s)));
    }
    function capitalize_ascii(s) {
      return Caml_bytes.bytes_to_string(Bytes.capitalize_ascii(Caml_bytes.bytes_of_string(s)));
    }
    function uncapitalize_ascii(s) {
      return Caml_bytes.bytes_to_string(Bytes.uncapitalize_ascii(Caml_bytes.bytes_of_string(s)));
    }
    var compare = Caml_primitive.caml_string_compare;
    function split_on_char(sep, s) {
      var r = 0;
      var j = s.length;
      for (var i = s.length - 1 | 0; i >= 0; --i) {
        if (s.charCodeAt(i) === sep) {
          r = {
            hd: sub(s, i + 1 | 0, (j - i | 0) - 1 | 0),
            tl: r
          };
          j = i;
        }
      }
      return {
        hd: sub(s, 0, j),
        tl: r
      };
    }
    function uppercase(s) {
      return Caml_bytes.bytes_to_string(Bytes.uppercase(Caml_bytes.bytes_of_string(s)));
    }
    function lowercase(s) {
      return Caml_bytes.bytes_to_string(Bytes.lowercase(Caml_bytes.bytes_of_string(s)));
    }
    function capitalize(s) {
      return Caml_bytes.bytes_to_string(Bytes.capitalize(Caml_bytes.bytes_of_string(s)));
    }
    function uncapitalize(s) {
      return Caml_bytes.bytes_to_string(Bytes.uncapitalize(Caml_bytes.bytes_of_string(s)));
    }
    var make = Caml_string.make;
    var fill = Bytes.fill;
    var blit = Bytes.blit_string;
    function equal(prim, prim$1) {
      return prim === prim$1;
    }
    exports.make = make;
    exports.init = init;
    exports.copy = copy;
    exports.sub = sub;
    exports.fill = fill;
    exports.blit = blit;
    exports.concat = concat;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi;
    exports.trim = trim;
    exports.escaped = escaped;
    exports.index = index;
    exports.index_opt = index_opt;
    exports.rindex = rindex;
    exports.rindex_opt = rindex_opt;
    exports.index_from = index_from;
    exports.index_from_opt = index_from_opt;
    exports.rindex_from = rindex_from;
    exports.rindex_from_opt = rindex_from_opt;
    exports.contains = contains;
    exports.contains_from = contains_from;
    exports.rcontains_from = rcontains_from;
    exports.uppercase = uppercase;
    exports.lowercase = lowercase;
    exports.capitalize = capitalize;
    exports.uncapitalize = uncapitalize;
    exports.uppercase_ascii = uppercase_ascii;
    exports.lowercase_ascii = lowercase_ascii;
    exports.capitalize_ascii = capitalize_ascii;
    exports.uncapitalize_ascii = uncapitalize_ascii;
    exports.compare = compare;
    exports.equal = equal;
    exports.split_on_char = split_on_char;
  });

  // node_modules/bs-platform/lib/js/caml_obj.js
  var require_caml_obj = __commonJS((exports) => {
    "use strict";
    var Caml_primitive = require_caml_primitive();
    var for_in = function(o, foo) {
      for (var x in o) {
        foo(x);
      }
    };
    var caml_obj_dup = function(x) {
      if (Array.isArray(x)) {
        var len = x.length;
        var v = new Array(len);
        for (var i = 0; i < len; ++i) {
          v[i] = x[i];
        }
        if (x.TAG !== void 0) {
          v.TAG = x.TAG;
        }
        return v;
      }
      return Object.assign({}, x);
    };
    var update_dummy = function(x, y) {
      var k;
      if (Array.isArray(y)) {
        for (k = 0; k < y.length; ++k) {
          x[k] = y[k];
        }
        if (y.TAG !== void 0) {
          x.TAG = y.TAG;
        }
      } else {
        for (var k in y) {
          x[k] = y[k];
        }
      }
    };
    function caml_compare(a, b) {
      if (a === b) {
        return 0;
      }
      var a_type = typeof a;
      var b_type = typeof b;
      switch (a_type) {
        case "boolean":
          if (b_type === "boolean") {
            return Caml_primitive.caml_bool_compare(a, b);
          }
          break;
        case "function":
          if (b_type === "function") {
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "compare: functional value",
              Error: new Error()
            };
          }
          break;
        case "number":
          if (b_type === "number") {
            return Caml_primitive.caml_int_compare(a, b);
          }
          break;
        case "string":
          if (b_type === "string") {
            return Caml_primitive.caml_string_compare(a, b);
          } else {
            return 1;
          }
        case "undefined":
          return -1;
        default:
      }
      switch (b_type) {
        case "string":
          return -1;
        case "undefined":
          return 1;
        default:
          if (a_type === "boolean") {
            return 1;
          }
          if (b_type === "boolean") {
            return -1;
          }
          if (a_type === "function") {
            return 1;
          }
          if (b_type === "function") {
            return -1;
          }
          if (a_type === "number") {
            if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return 1;
            } else {
              return -1;
            }
          }
          if (b_type === "number") {
            if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return -1;
            } else {
              return 1;
            }
          }
          if (a === null) {
            if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return 1;
            } else {
              return -1;
            }
          }
          if (b === null) {
            if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return -1;
            } else {
              return 1;
            }
          }
          if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
            if (b.BS_PRIVATE_NESTED_SOME_NONE !== void 0) {
              return aux_obj_compare(a, b);
            } else {
              return -1;
            }
          }
          var tag_a = a.TAG | 0;
          var tag_b = b.TAG | 0;
          if (tag_a === 248) {
            return Caml_primitive.caml_int_compare(a[1], b[1]);
          }
          if (tag_a === 251) {
            throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "equal: abstract value",
              Error: new Error()
            };
          }
          if (tag_a !== tag_b) {
            if (tag_a < tag_b) {
              return -1;
            } else {
              return 1;
            }
          }
          var len_a = a.length | 0;
          var len_b = b.length | 0;
          if (len_a === len_b) {
            if (Array.isArray(a)) {
              var _i = 0;
              while (true) {
                var i = _i;
                if (i === len_a) {
                  return 0;
                }
                var res = caml_compare(a[i], b[i]);
                if (res !== 0) {
                  return res;
                }
                _i = i + 1 | 0;
                continue;
              }
              ;
            } else if (a instanceof Date && b instanceof Date) {
              return a - b;
            } else {
              return aux_obj_compare(a, b);
            }
          } else if (len_a < len_b) {
            var _i$1 = 0;
            while (true) {
              var i$1 = _i$1;
              if (i$1 === len_a) {
                return -1;
              }
              var res$1 = caml_compare(a[i$1], b[i$1]);
              if (res$1 !== 0) {
                return res$1;
              }
              _i$1 = i$1 + 1 | 0;
              continue;
            }
            ;
          } else {
            var _i$2 = 0;
            while (true) {
              var i$2 = _i$2;
              if (i$2 === len_b) {
                return 1;
              }
              var res$2 = caml_compare(a[i$2], b[i$2]);
              if (res$2 !== 0) {
                return res$2;
              }
              _i$2 = i$2 + 1 | 0;
              continue;
            }
            ;
          }
      }
    }
    function aux_obj_compare(a, b) {
      var min_key_lhs = {
        contents: void 0
      };
      var min_key_rhs = {
        contents: void 0
      };
      var do_key = function(param, key) {
        var min_key = param[2];
        var b2 = param[1];
        if (!(!b2.hasOwnProperty(key) || caml_compare(param[0][key], b2[key]) > 0)) {
          return;
        }
        var mk = min_key.contents;
        if (mk !== void 0 && key >= mk) {
          return;
        } else {
          min_key.contents = key;
          return;
        }
      };
      var partial_arg = [
        a,
        b,
        min_key_rhs
      ];
      var do_key_a = function(param) {
        return do_key(partial_arg, param);
      };
      var partial_arg$1 = [
        b,
        a,
        min_key_lhs
      ];
      var do_key_b = function(param) {
        return do_key(partial_arg$1, param);
      };
      for_in(a, do_key_a);
      for_in(b, do_key_b);
      var match = min_key_lhs.contents;
      var match$1 = min_key_rhs.contents;
      if (match !== void 0) {
        if (match$1 !== void 0) {
          return Caml_primitive.caml_string_compare(match, match$1);
        } else {
          return -1;
        }
      } else if (match$1 !== void 0) {
        return 1;
      } else {
        return 0;
      }
    }
    function caml_equal(a, b) {
      if (a === b) {
        return true;
      }
      var a_type = typeof a;
      if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
        return false;
      }
      var b_type = typeof b;
      if (a_type === "function" || b_type === "function") {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: functional value",
          Error: new Error()
        };
      }
      if (b_type === "number" || b_type === "undefined" || b === null) {
        return false;
      }
      var tag_a = a.TAG | 0;
      var tag_b = b.TAG | 0;
      if (tag_a === 248) {
        return a[1] === b[1];
      }
      if (tag_a === 251) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error()
        };
      }
      if (tag_a !== tag_b) {
        return false;
      }
      var len_a = a.length | 0;
      var len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          var _i = 0;
          while (true) {
            var i = _i;
            if (i === len_a) {
              return true;
            }
            if (!caml_equal(a[i], b[i])) {
              return false;
            }
            _i = i + 1 | 0;
            continue;
          }
          ;
        } else if (a instanceof Date && b instanceof Date) {
          return !(a > b || a < b);
        } else {
          var result = {
            contents: true
          };
          var do_key_a = function(key) {
            if (!b.hasOwnProperty(key)) {
              result.contents = false;
              return;
            }
          };
          var do_key_b = function(key) {
            if (!a.hasOwnProperty(key) || !caml_equal(b[key], a[key])) {
              result.contents = false;
              return;
            }
          };
          for_in(a, do_key_a);
          if (result.contents) {
            for_in(b, do_key_b);
          }
          return result.contents;
        }
      } else {
        return false;
      }
    }
    function caml_equal_null(x, y) {
      if (y !== null) {
        return caml_equal(x, y);
      } else {
        return x === y;
      }
    }
    function caml_equal_undefined(x, y) {
      if (y !== void 0) {
        return caml_equal(x, y);
      } else {
        return x === y;
      }
    }
    function caml_equal_nullable(x, y) {
      if (y == null) {
        return x === y;
      } else {
        return caml_equal(x, y);
      }
    }
    function caml_notequal(a, b) {
      return !caml_equal(a, b);
    }
    function caml_greaterequal(a, b) {
      return caml_compare(a, b) >= 0;
    }
    function caml_greaterthan(a, b) {
      return caml_compare(a, b) > 0;
    }
    function caml_lessequal(a, b) {
      return caml_compare(a, b) <= 0;
    }
    function caml_lessthan(a, b) {
      return caml_compare(a, b) < 0;
    }
    function caml_min(x, y) {
      if (caml_compare(x, y) <= 0) {
        return x;
      } else {
        return y;
      }
    }
    function caml_max(x, y) {
      if (caml_compare(x, y) >= 0) {
        return x;
      } else {
        return y;
      }
    }
    exports.caml_obj_dup = caml_obj_dup;
    exports.update_dummy = update_dummy;
    exports.caml_compare = caml_compare;
    exports.caml_equal = caml_equal;
    exports.caml_equal_null = caml_equal_null;
    exports.caml_equal_undefined = caml_equal_undefined;
    exports.caml_equal_nullable = caml_equal_nullable;
    exports.caml_notequal = caml_notequal;
    exports.caml_greaterequal = caml_greaterequal;
    exports.caml_greaterthan = caml_greaterthan;
    exports.caml_lessthan = caml_lessthan;
    exports.caml_lessequal = caml_lessequal;
    exports.caml_min = caml_min;
    exports.caml_max = caml_max;
  });

  // node_modules/bs-platform/lib/js/camlinternalLazy.js
  var require_camlinternalLazy = __commonJS((exports) => {
    "use strict";
    var Caml_exceptions = require_caml_exceptions();
    function is_val(l) {
      return l.LAZY_DONE;
    }
    var Undefined = /* @__PURE__ */ Caml_exceptions.create("CamlinternalLazy.Undefined");
    function forward_with_closure(blk, closure) {
      var result = closure();
      blk.VAL = result;
      blk.LAZY_DONE = true;
      return result;
    }
    function raise_undefined() {
      throw {
        RE_EXN_ID: Undefined,
        Error: new Error()
      };
    }
    function force(lzv) {
      if (lzv.LAZY_DONE) {
        return lzv.VAL;
      } else {
        var closure = lzv.VAL;
        lzv.VAL = raise_undefined;
        try {
          return forward_with_closure(lzv, closure);
        } catch (e) {
          lzv.VAL = function() {
            throw e;
          };
          throw e;
        }
      }
    }
    function force_val(lzv) {
      if (lzv.LAZY_DONE) {
        return lzv.VAL;
      } else {
        var closure = lzv.VAL;
        lzv.VAL = raise_undefined;
        return forward_with_closure(lzv, closure);
      }
    }
    exports.Undefined = Undefined;
    exports.force = force;
    exports.force_val = force_val;
    exports.is_val = is_val;
  });

  // node_modules/bs-platform/lib/js/caml_io.js
  var require_caml_io = __commonJS((exports) => {
    "use strict";
    var stdout = {
      buffer: "",
      output: function(param, s) {
        var v = s.length - 1 | 0;
        if (typeof process !== "undefined" && process.stdout && process.stdout.write) {
          return process.stdout.write(s);
        } else {
          if (s[v] === "\n") {
            console.log(s.slice(0, v));
          } else {
            console.log(s);
          }
          return;
        }
      }
    };
    var stderr = {
      buffer: "",
      output: function(param, s) {
        var v = s.length - 1 | 0;
        if (s[v] === "\n") {
          console.log(s.slice(0, v));
        } else {
          console.log(s);
        }
      }
    };
    function caml_ml_flush(oc) {
      if (oc.buffer !== "") {
        oc.output(oc, oc.buffer);
        oc.buffer = "";
        return;
      }
    }
    function caml_ml_output(oc, str, offset, len) {
      var str$1 = offset === 0 && len === str.length ? str : str.slice(offset, len);
      if (typeof process !== "undefined" && process.stdout && process.stdout.write && oc === stdout) {
        return process.stdout.write(str$1);
      }
      var id = str$1.lastIndexOf("\n");
      if (id < 0) {
        oc.buffer = oc.buffer + str$1;
      } else {
        oc.buffer = oc.buffer + str$1.slice(0, id + 1 | 0);
        caml_ml_flush(oc);
        oc.buffer = oc.buffer + str$1.slice(id + 1 | 0);
      }
    }
    function caml_ml_output_char(oc, $$char) {
      return caml_ml_output(oc, String.fromCharCode($$char), 0, 1);
    }
    function caml_ml_out_channels_list(param) {
      return {
        hd: stdout,
        tl: {
          hd: stderr,
          tl: 0
        }
      };
    }
    var stdin;
    exports.stdin = stdin;
    exports.stdout = stdout;
    exports.stderr = stderr;
    exports.caml_ml_flush = caml_ml_flush;
    exports.caml_ml_output = caml_ml_output;
    exports.caml_ml_output_char = caml_ml_output_char;
    exports.caml_ml_out_channels_list = caml_ml_out_channels_list;
  });

  // node_modules/bs-platform/lib/js/caml_sys.js
  var require_caml_sys = __commonJS((exports) => {
    "use strict";
    function caml_sys_getenv(s) {
      if (typeof process === "undefined" || process.env === void 0) {
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      var x = process.env[s];
      if (x !== void 0) {
        return x;
      }
      throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
    }
    var os_type = function(_) {
      if (typeof process !== "undefined" && process.platform === "win32") {
        return "Win32";
      } else {
        return "Unix";
      }
    };
    function caml_sys_time(param) {
      if (typeof process === "undefined" || process.uptime === void 0) {
        return -1;
      } else {
        return process.uptime();
      }
    }
    function caml_sys_system_command(_cmd) {
      return 127;
    }
    var caml_sys_getcwd = function(param) {
      if (typeof process === "undefined" || process.cwd === void 0) {
        return "/";
      }
      return process.cwd();
    };
    function caml_sys_get_argv(param) {
      if (typeof process === "undefined") {
        return [
          "",
          [""]
        ];
      }
      var argv = process.argv;
      if (argv == null) {
        return [
          "",
          [""]
        ];
      } else {
        return [
          argv[0],
          argv
        ];
      }
    }
    function caml_sys_exit(exit_code) {
      if (typeof process !== "undefined") {
        return process.exit(exit_code);
      }
    }
    function caml_sys_is_directory(_s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "caml_sys_is_directory not implemented",
        Error: new Error()
      };
    }
    function caml_sys_file_exists(_s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: "caml_sys_file_exists not implemented",
        Error: new Error()
      };
    }
    exports.caml_sys_getenv = caml_sys_getenv;
    exports.caml_sys_time = caml_sys_time;
    exports.os_type = os_type;
    exports.caml_sys_system_command = caml_sys_system_command;
    exports.caml_sys_getcwd = caml_sys_getcwd;
    exports.caml_sys_get_argv = caml_sys_get_argv;
    exports.caml_sys_exit = caml_sys_exit;
    exports.caml_sys_is_directory = caml_sys_is_directory;
    exports.caml_sys_file_exists = caml_sys_file_exists;
  });

  // node_modules/bs-platform/lib/js/caml_int64.js
  var require_caml_int64 = __commonJS((exports) => {
    "use strict";
    function mk(lo, hi) {
      return [
        hi,
        lo >>> 0
      ];
    }
    var min_int = [
      -2147483648,
      0
    ];
    var max_int = [
      2147483647,
      4294967295
    ];
    var one = [
      0,
      1
    ];
    var zero = [
      0,
      0
    ];
    var neg_one = [
      -1,
      4294967295
    ];
    function neg_signed(x) {
      return (x & -2147483648) !== 0;
    }
    function non_neg_signed(x) {
      return (x & -2147483648) === 0;
    }
    function succ(param) {
      var x_lo = param[1];
      var x_hi = param[0];
      var lo = x_lo + 1 | 0;
      return [
        x_hi + (lo === 0 ? 1 : 0) | 0,
        lo >>> 0
      ];
    }
    function neg(param) {
      var other_lo = (param[1] ^ -1) + 1 | 0;
      return [
        (param[0] ^ -1) + (other_lo === 0 ? 1 : 0) | 0,
        other_lo >>> 0
      ];
    }
    function add_aux(param, y_lo, y_hi) {
      var x_lo = param[1];
      var lo = x_lo + y_lo | 0;
      var overflow = neg_signed(x_lo) && (neg_signed(y_lo) || non_neg_signed(lo)) || neg_signed(y_lo) && non_neg_signed(lo) ? 1 : 0;
      return [
        param[0] + y_hi + overflow | 0,
        lo >>> 0
      ];
    }
    function add(self2, param) {
      return add_aux(self2, param[1], param[0]);
    }
    function eq(x, y) {
      if (x[0] === y[0]) {
        return x[1] === y[1];
      } else {
        return false;
      }
    }
    function equal_null(x, y) {
      if (y !== null) {
        return eq(x, y);
      } else {
        return false;
      }
    }
    function equal_undefined(x, y) {
      if (y !== void 0) {
        return eq(x, y);
      } else {
        return false;
      }
    }
    function equal_nullable(x, y) {
      if (y == null) {
        return false;
      } else {
        return eq(x, y);
      }
    }
    function sub_aux(x, lo, hi) {
      var y_lo = (lo ^ -1) + 1 >>> 0;
      var y_hi = (hi ^ -1) + (y_lo === 0 ? 1 : 0) | 0;
      return add_aux(x, y_lo, y_hi);
    }
    function sub(self2, param) {
      return sub_aux(self2, param[1], param[0]);
    }
    function lsl_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var lo = x[1];
      if (numBits >= 32) {
        return [
          lo << (numBits - 32 | 0),
          0
        ];
      } else {
        return [
          lo >>> (32 - numBits | 0) | x[0] << numBits,
          lo << numBits >>> 0
        ];
      }
    }
    function lsr_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var hi = x[0];
      var offset = numBits - 32 | 0;
      if (offset === 0) {
        return [
          0,
          hi >>> 0
        ];
      } else if (offset > 0) {
        return [
          0,
          hi >>> offset
        ];
      } else {
        return [
          hi >>> numBits,
          (hi << (-offset | 0) | x[1] >>> numBits) >>> 0
        ];
      }
    }
    function asr_(x, numBits) {
      if (numBits === 0) {
        return x;
      }
      var hi = x[0];
      if (numBits < 32) {
        return [
          hi >> numBits,
          (hi << (32 - numBits | 0) | x[1] >>> numBits) >>> 0
        ];
      } else {
        return [
          hi >= 0 ? 0 : -1,
          hi >> (numBits - 32 | 0) >>> 0
        ];
      }
    }
    function is_zero(param) {
      if (param[0] !== 0) {
        return false;
      } else {
        return param[1] === 0;
      }
    }
    function mul(_this, _other) {
      while (true) {
        var other = _other;
        var $$this = _this;
        var lo;
        var this_hi = $$this[0];
        var exit = 0;
        var exit$1 = 0;
        var exit$2 = 0;
        if (this_hi !== 0) {
          exit$2 = 4;
        } else {
          if ($$this[1] === 0) {
            return zero;
          }
          exit$2 = 4;
        }
        if (exit$2 === 4) {
          if (other[0] !== 0) {
            exit$1 = 3;
          } else {
            if (other[1] === 0) {
              return zero;
            }
            exit$1 = 3;
          }
        }
        if (exit$1 === 3) {
          if (this_hi !== -2147483648 || $$this[1] !== 0) {
            exit = 2;
          } else {
            lo = other[1];
          }
        }
        if (exit === 2) {
          var other_hi = other[0];
          var lo$1 = $$this[1];
          var exit$3 = 0;
          if (other_hi !== -2147483648 || other[1] !== 0) {
            exit$3 = 3;
          } else {
            lo = lo$1;
          }
          if (exit$3 === 3) {
            var other_lo = other[1];
            if (this_hi < 0) {
              if (other_hi >= 0) {
                return neg(mul(neg($$this), other));
              }
              _other = neg(other);
              _this = neg($$this);
              continue;
            }
            if (other_hi < 0) {
              return neg(mul($$this, neg(other)));
            }
            var a48 = this_hi >>> 16;
            var a32 = this_hi & 65535;
            var a16 = lo$1 >>> 16;
            var a00 = lo$1 & 65535;
            var b48 = other_hi >>> 16;
            var b32 = other_hi & 65535;
            var b16 = other_lo >>> 16;
            var b00 = other_lo & 65535;
            var c48 = 0;
            var c32 = 0;
            var c16 = 0;
            var c00 = a00 * b00;
            c16 = (c00 >>> 16) + a16 * b00;
            c32 = c16 >>> 16;
            c16 = (c16 & 65535) + a00 * b16;
            c32 = c32 + (c16 >>> 16) + a32 * b00;
            c48 = c32 >>> 16;
            c32 = (c32 & 65535) + a16 * b16;
            c48 = c48 + (c32 >>> 16);
            c32 = (c32 & 65535) + a00 * b32;
            c48 = c48 + (c32 >>> 16);
            c32 = c32 & 65535;
            c48 = c48 + (a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48) & 65535;
            return [
              c32 | c48 << 16,
              (c00 & 65535 | (c16 & 65535) << 16) >>> 0
            ];
          }
        }
        if ((lo & 1) === 0) {
          return zero;
        } else {
          return min_int;
        }
      }
      ;
    }
    function xor(param, param$1) {
      return [
        param[0] ^ param$1[0],
        (param[1] ^ param$1[1]) >>> 0
      ];
    }
    function or_(param, param$1) {
      return [
        param[0] | param$1[0],
        (param[1] | param$1[1]) >>> 0
      ];
    }
    function and_(param, param$1) {
      return [
        param[0] & param$1[0],
        (param[1] & param$1[1]) >>> 0
      ];
    }
    function ge(param, param$1) {
      var other_hi = param$1[0];
      var hi = param[0];
      if (hi > other_hi) {
        return true;
      } else if (hi < other_hi) {
        return false;
      } else {
        return param[1] >= param$1[1];
      }
    }
    function neq(x, y) {
      return !eq(x, y);
    }
    function lt(x, y) {
      return !ge(x, y);
    }
    function gt(x, y) {
      if (x[0] > y[0]) {
        return true;
      } else if (x[0] < y[0]) {
        return false;
      } else {
        return x[1] > y[1];
      }
    }
    function le(x, y) {
      return !gt(x, y);
    }
    function min(x, y) {
      if (ge(x, y)) {
        return y;
      } else {
        return x;
      }
    }
    function max(x, y) {
      if (gt(x, y)) {
        return x;
      } else {
        return y;
      }
    }
    function to_float(param) {
      return param[0] * 4294967296 + param[1];
    }
    function of_float(x) {
      if (isNaN(x) || !isFinite(x)) {
        return zero;
      }
      if (x <= -9223372036854776e3) {
        return min_int;
      }
      if (x + 1 >= 9223372036854776e3) {
        return max_int;
      }
      if (x < 0) {
        return neg(of_float(-x));
      }
      var hi = x / 4294967296 | 0;
      var lo = x % 4294967296 | 0;
      return [
        hi,
        lo >>> 0
      ];
    }
    function isSafeInteger(param) {
      var hi = param[0];
      var top11Bits = hi >> 21;
      if (top11Bits === 0) {
        return true;
      } else if (top11Bits === -1) {
        return !(param[1] === 0 && hi === -2097152);
      } else {
        return false;
      }
    }
    function to_string(self2) {
      if (isSafeInteger(self2)) {
        return String(to_float(self2));
      }
      if (self2[0] < 0) {
        if (eq(self2, min_int)) {
          return "-9223372036854775808";
        } else {
          return "-" + to_string(neg(self2));
        }
      }
      var approx_div1 = of_float(Math.floor(to_float(self2) / 10));
      var lo = approx_div1[1];
      var hi = approx_div1[0];
      var match = sub_aux(sub_aux(self2, lo << 3, lo >>> 29 | hi << 3), lo << 1, lo >>> 31 | hi << 1);
      var rem_lo = match[1];
      var rem_hi = match[0];
      if (rem_lo === 0 && rem_hi === 0) {
        return to_string(approx_div1) + "0";
      }
      if (rem_hi < 0) {
        var rem_lo$1 = (rem_lo ^ -1) + 1 >>> 0;
        var delta = Math.ceil(rem_lo$1 / 10);
        var remainder = 10 * delta - rem_lo$1;
        return to_string(sub_aux(approx_div1, delta | 0, 0)) + String(remainder | 0);
      }
      var delta$1 = Math.floor(rem_lo / 10);
      var remainder$1 = rem_lo - 10 * delta$1;
      return to_string(add_aux(approx_div1, delta$1 | 0, 0)) + String(remainder$1 | 0);
    }
    function div(_self, _other) {
      while (true) {
        var other = _other;
        var self2 = _self;
        var self_hi = self2[0];
        var exit = 0;
        var exit$1 = 0;
        if (other[0] !== 0 || other[1] !== 0) {
          exit$1 = 2;
        } else {
          throw {
            RE_EXN_ID: "Division_by_zero",
            Error: new Error()
          };
        }
        if (exit$1 === 2) {
          if (self_hi !== -2147483648) {
            if (self_hi !== 0) {
              exit = 1;
            } else {
              if (self2[1] === 0) {
                return zero;
              }
              exit = 1;
            }
          } else if (self2[1] !== 0) {
            exit = 1;
          } else {
            if (eq(other, one) || eq(other, neg_one)) {
              return self2;
            }
            if (eq(other, min_int)) {
              return one;
            }
            var half_this = asr_(self2, 1);
            var approx = lsl_(div(half_this, other), 1);
            var exit$2 = 0;
            if (approx[0] !== 0) {
              exit$2 = 3;
            } else {
              if (approx[1] === 0) {
                if (other[0] < 0) {
                  return one;
                } else {
                  return neg(one);
                }
              }
              exit$2 = 3;
            }
            if (exit$2 === 3) {
              var rem = sub(self2, mul(other, approx));
              return add(approx, div(rem, other));
            }
          }
        }
        if (exit === 1) {
          var other_hi = other[0];
          var exit$3 = 0;
          if (other_hi !== -2147483648) {
            exit$3 = 2;
          } else {
            if (other[1] === 0) {
              return zero;
            }
            exit$3 = 2;
          }
          if (exit$3 === 2) {
            if (self_hi < 0) {
              if (other_hi >= 0) {
                return neg(div(neg(self2), other));
              }
              _other = neg(other);
              _self = neg(self2);
              continue;
            }
            if (other_hi < 0) {
              return neg(div(self2, neg(other)));
            }
            var res = zero;
            var rem$1 = self2;
            while (ge(rem$1, other)) {
              var b = Math.floor(to_float(rem$1) / to_float(other));
              var approx$1 = 1 > b ? 1 : b;
              var log2 = Math.ceil(Math.log(approx$1) / Math.LN2);
              var delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
              var approxRes = of_float(approx$1);
              var approxRem = mul(approxRes, other);
              while (approxRem[0] < 0 || gt(approxRem, rem$1)) {
                approx$1 = approx$1 - delta;
                approxRes = of_float(approx$1);
                approxRem = mul(approxRes, other);
              }
              ;
              if (is_zero(approxRes)) {
                approxRes = one;
              }
              res = add(res, approxRes);
              rem$1 = sub(rem$1, approxRem);
            }
            ;
            return res;
          }
        }
      }
      ;
    }
    function mod_(self2, other) {
      return sub(self2, mul(div(self2, other), other));
    }
    function div_mod(self2, other) {
      var quotient = div(self2, other);
      return [
        quotient,
        sub(self2, mul(quotient, other))
      ];
    }
    function compare(self2, other) {
      var y = other[0];
      var x = self2[0];
      var v = x < y ? -1 : x === y ? 0 : 1;
      if (v !== 0) {
        return v;
      }
      var y$1 = other[1];
      var x$1 = self2[1];
      if (x$1 < y$1) {
        return -1;
      } else if (x$1 === y$1) {
        return 0;
      } else {
        return 1;
      }
    }
    function of_int32(lo) {
      return [
        lo < 0 ? -1 : 0,
        lo >>> 0
      ];
    }
    function to_int32(x) {
      return x[1] | 0;
    }
    function to_hex(x) {
      var x_lo = x[1];
      var x_hi = x[0];
      var aux = function(v) {
        return (v >>> 0).toString(16);
      };
      if (x_hi === 0 && x_lo === 0) {
        return "0";
      }
      if (x_lo === 0) {
        return aux(x_hi) + "00000000";
      }
      if (x_hi === 0) {
        return aux(x_lo);
      }
      var lo = aux(x_lo);
      var pad = 8 - lo.length | 0;
      if (pad <= 0) {
        return aux(x_hi) + lo;
      } else {
        return aux(x_hi) + ("0".repeat(pad) + lo);
      }
    }
    function discard_sign(x) {
      return [
        2147483647 & x[0],
        x[1]
      ];
    }
    function float_of_bits(x) {
      return function(lo, hi) {
        return new Float64Array(new Int32Array([lo, hi]).buffer)[0];
      }(x[1], x[0]);
    }
    function bits_of_float(x) {
      var match = function(x2) {
        return new Int32Array(new Float64Array([x2]).buffer);
      }(x);
      return [
        match[1],
        match[0] >>> 0
      ];
    }
    exports.mk = mk;
    exports.succ = succ;
    exports.min_int = min_int;
    exports.max_int = max_int;
    exports.one = one;
    exports.zero = zero;
    exports.neg_one = neg_one;
    exports.of_int32 = of_int32;
    exports.to_int32 = to_int32;
    exports.add = add;
    exports.neg = neg;
    exports.sub = sub;
    exports.lsl_ = lsl_;
    exports.lsr_ = lsr_;
    exports.asr_ = asr_;
    exports.is_zero = is_zero;
    exports.mul = mul;
    exports.xor = xor;
    exports.or_ = or_;
    exports.and_ = and_;
    exports.ge = ge;
    exports.eq = eq;
    exports.neq = neq;
    exports.lt = lt;
    exports.gt = gt;
    exports.le = le;
    exports.equal_null = equal_null;
    exports.equal_undefined = equal_undefined;
    exports.equal_nullable = equal_nullable;
    exports.min = min;
    exports.max = max;
    exports.to_float = to_float;
    exports.of_float = of_float;
    exports.div = div;
    exports.mod_ = mod_;
    exports.compare = compare;
    exports.float_of_bits = float_of_bits;
    exports.bits_of_float = bits_of_float;
    exports.div_mod = div_mod;
    exports.to_hex = to_hex;
    exports.discard_sign = discard_sign;
    exports.to_string = to_string;
  });

  // node_modules/bs-platform/lib/js/caml_format.js
  var require_caml_format = __commonJS((exports) => {
    "use strict";
    var Caml_int64 = require_caml_int64();
    function parse_digit(c) {
      if (c >= 65) {
        if (c >= 97) {
          if (c >= 123) {
            return -1;
          } else {
            return c - 87 | 0;
          }
        } else if (c >= 91) {
          return -1;
        } else {
          return c - 55 | 0;
        }
      } else if (c > 57 || c < 48) {
        return -1;
      } else {
        return c - 48 | 0;
      }
    }
    function int_of_string_base(param) {
      switch (param) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
        case 3:
          return 2;
      }
    }
    function parse_sign_and_base(s) {
      var sign = 1;
      var base = 2;
      var i = 0;
      var match = s.charCodeAt(i);
      switch (match) {
        case 43:
          i = i + 1 | 0;
          break;
        case 44:
          break;
        case 45:
          sign = -1;
          i = i + 1 | 0;
          break;
        default:
      }
      if (s[i] === "0") {
        var match$1 = s.charCodeAt(i + 1 | 0);
        if (match$1 >= 89) {
          if (match$1 >= 111) {
            if (match$1 < 121) {
              switch (match$1) {
                case 111:
                  base = 0;
                  i = i + 2 | 0;
                  break;
                case 117:
                  i = i + 2 | 0;
                  break;
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  break;
                case 120:
                  base = 1;
                  i = i + 2 | 0;
                  break;
              }
            }
          } else if (match$1 === 98) {
            base = 3;
            i = i + 2 | 0;
          }
        } else if (match$1 !== 66) {
          if (match$1 >= 79) {
            switch (match$1) {
              case 79:
                base = 0;
                i = i + 2 | 0;
                break;
              case 85:
                i = i + 2 | 0;
                break;
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 86:
              case 87:
                break;
              case 88:
                base = 1;
                i = i + 2 | 0;
                break;
            }
          }
        } else {
          base = 3;
          i = i + 2 | 0;
        }
      }
      return [
        i,
        sign,
        base
      ];
    }
    function caml_int_of_string(s) {
      var match = parse_sign_and_base(s);
      var i = match[0];
      var base = int_of_string_base(match[2]);
      var threshold = 4294967295;
      var len = s.length;
      var c = i < len ? s.charCodeAt(i) : 0;
      var d = parse_digit(c);
      if (d < 0 || d >= base) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int_of_string",
          Error: new Error()
        };
      }
      var aux = function(_acc, _k) {
        while (true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          }
          var a = s.charCodeAt(k);
          if (a === 95) {
            _k = k + 1 | 0;
            continue;
          }
          var v = parse_digit(a);
          if (v < 0 || v >= base) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error()
            };
          }
          var acc$1 = base * acc + v;
          if (acc$1 > threshold) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int_of_string",
              Error: new Error()
            };
          }
          _k = k + 1 | 0;
          _acc = acc$1;
          continue;
        }
        ;
      };
      var res = match[1] * aux(d, i + 1 | 0);
      var or_res = res | 0;
      if (base === 10 && res !== or_res) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int_of_string",
          Error: new Error()
        };
      }
      return or_res;
    }
    function caml_int64_of_string(s) {
      var match = parse_sign_and_base(s);
      var hbase = match[2];
      var i = match[0];
      var base = Caml_int64.of_int32(int_of_string_base(hbase));
      var sign = Caml_int64.of_int32(match[1]);
      var threshold;
      switch (hbase) {
        case 0:
          threshold = /* @__PURE__ */ Caml_int64.mk(-1, 536870911);
          break;
        case 1:
          threshold = /* @__PURE__ */ Caml_int64.mk(-1, 268435455);
          break;
        case 2:
          threshold = /* @__PURE__ */ Caml_int64.mk(-1717986919, 429496729);
          break;
        case 3:
          threshold = Caml_int64.max_int;
          break;
      }
      var len = s.length;
      var c = i < len ? s.charCodeAt(i) : 0;
      var d = Caml_int64.of_int32(parse_digit(c));
      if (Caml_int64.lt(d, Caml_int64.zero) || Caml_int64.ge(d, base)) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error()
        };
      }
      var aux = function(_acc, _k) {
        while (true) {
          var k = _k;
          var acc = _acc;
          if (k === len) {
            return acc;
          }
          var a = s.charCodeAt(k);
          if (a === 95) {
            _k = k + 1 | 0;
            continue;
          }
          var v = Caml_int64.of_int32(parse_digit(a));
          if (Caml_int64.lt(v, Caml_int64.zero) || Caml_int64.ge(v, base) || Caml_int64.gt(acc, threshold)) {
            throw {
              RE_EXN_ID: "Failure",
              _1: "int64_of_string",
              Error: new Error()
            };
          }
          var acc$1 = Caml_int64.add(Caml_int64.mul(base, acc), v);
          _k = k + 1 | 0;
          _acc = acc$1;
          continue;
        }
        ;
      };
      var res = Caml_int64.mul(sign, aux(d, i + 1 | 0));
      var or_res = Caml_int64.or_(res, Caml_int64.zero);
      if (Caml_int64.eq(base, /* @__PURE__ */ Caml_int64.mk(10, 0)) && Caml_int64.neq(res, or_res)) {
        throw {
          RE_EXN_ID: "Failure",
          _1: "int64_of_string",
          Error: new Error()
        };
      }
      return or_res;
    }
    function int_of_base(param) {
      switch (param) {
        case 0:
          return 8;
        case 1:
          return 16;
        case 2:
          return 10;
      }
    }
    function lowercase(c) {
      if (c >= 65 && c <= 90 || c >= 192 && c <= 214 || c >= 216 && c <= 222) {
        return c + 32 | 0;
      } else {
        return c;
      }
    }
    function parse_format(fmt) {
      var len = fmt.length;
      if (len > 31) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "format_int: format too long",
          Error: new Error()
        };
      }
      var f = {
        justify: "+",
        signstyle: "-",
        filter: " ",
        alternate: false,
        base: 2,
        signedconv: false,
        width: 0,
        uppercase: false,
        sign: 1,
        prec: -1,
        conv: "f"
      };
      var _i = 0;
      while (true) {
        var i = _i;
        if (i >= len) {
          return f;
        }
        var c = fmt.charCodeAt(i);
        var exit = 0;
        if (c >= 69) {
          if (c >= 88) {
            if (c >= 121) {
              exit = 1;
            } else {
              switch (c) {
                case 88:
                  f.base = 1;
                  f.uppercase = true;
                  _i = i + 1 | 0;
                  continue;
                case 101:
                case 102:
                case 103:
                  exit = 5;
                  break;
                case 100:
                case 105:
                  exit = 4;
                  break;
                case 111:
                  f.base = 0;
                  _i = i + 1 | 0;
                  continue;
                case 117:
                  f.base = 2;
                  _i = i + 1 | 0;
                  continue;
                case 89:
                case 90:
                case 91:
                case 92:
                case 93:
                case 94:
                case 95:
                case 96:
                case 97:
                case 98:
                case 99:
                case 104:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 112:
                case 113:
                case 114:
                case 115:
                case 116:
                case 118:
                case 119:
                  exit = 1;
                  break;
                case 120:
                  f.base = 1;
                  _i = i + 1 | 0;
                  continue;
              }
            }
          } else if (c >= 72) {
            exit = 1;
          } else {
            f.signedconv = true;
            f.uppercase = true;
            f.conv = String.fromCharCode(lowercase(c));
            _i = i + 1 | 0;
            continue;
          }
        } else {
          switch (c) {
            case 35:
              f.alternate = true;
              _i = i + 1 | 0;
              continue;
            case 32:
            case 43:
              exit = 2;
              break;
            case 45:
              f.justify = "-";
              _i = i + 1 | 0;
              continue;
            case 46:
              f.prec = 0;
              var j = i + 1 | 0;
              while (function(j2) {
                return function() {
                  var w = fmt.charCodeAt(j2) - 48 | 0;
                  return w >= 0 && w <= 9;
                };
              }(j)()) {
                f.prec = (Math.imul(f.prec, 10) + fmt.charCodeAt(j) | 0) - 48 | 0;
                j = j + 1 | 0;
              }
              ;
              _i = j;
              continue;
            case 33:
            case 34:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 44:
            case 47:
              exit = 1;
              break;
            case 48:
              f.filter = "0";
              _i = i + 1 | 0;
              continue;
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              exit = 3;
              break;
            default:
              exit = 1;
          }
        }
        switch (exit) {
          case 1:
            _i = i + 1 | 0;
            continue;
          case 2:
            f.signstyle = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue;
          case 3:
            f.width = 0;
            var j$1 = i;
            while (function(j$12) {
              return function() {
                var w = fmt.charCodeAt(j$12) - 48 | 0;
                return w >= 0 && w <= 9;
              };
            }(j$1)()) {
              f.width = (Math.imul(f.width, 10) + fmt.charCodeAt(j$1) | 0) - 48 | 0;
              j$1 = j$1 + 1 | 0;
            }
            ;
            _i = j$1;
            continue;
          case 4:
            f.signedconv = true;
            f.base = 2;
            _i = i + 1 | 0;
            continue;
          case 5:
            f.signedconv = true;
            f.conv = String.fromCharCode(c);
            _i = i + 1 | 0;
            continue;
        }
      }
      ;
    }
    function finish_formatting(config, rawbuffer) {
      var justify = config.justify;
      var signstyle = config.signstyle;
      var filter = config.filter;
      var alternate = config.alternate;
      var base = config.base;
      var signedconv = config.signedconv;
      var width = config.width;
      var uppercase = config.uppercase;
      var sign = config.sign;
      var len = rawbuffer.length;
      if (signedconv && (sign < 0 || signstyle !== "-")) {
        len = len + 1 | 0;
      }
      if (alternate) {
        if (base === 0) {
          len = len + 1 | 0;
        } else if (base === 1) {
          len = len + 2 | 0;
        }
      }
      var buffer = "";
      if (justify === "+" && filter === " ") {
        for (var _for = len; _for < width; ++_for) {
          buffer = buffer + filter;
        }
      }
      if (signedconv) {
        if (sign < 0) {
          buffer = buffer + "-";
        } else if (signstyle !== "-") {
          buffer = buffer + signstyle;
        }
      }
      if (alternate && base === 0) {
        buffer = buffer + "0";
      }
      if (alternate && base === 1) {
        buffer = buffer + "0x";
      }
      if (justify === "+" && filter === "0") {
        for (var _for$1 = len; _for$1 < width; ++_for$1) {
          buffer = buffer + filter;
        }
      }
      buffer = uppercase ? buffer + rawbuffer.toUpperCase() : buffer + rawbuffer;
      if (justify === "-") {
        for (var _for$2 = len; _for$2 < width; ++_for$2) {
          buffer = buffer + " ";
        }
      }
      return buffer;
    }
    function caml_format_int(fmt, i) {
      if (fmt === "%d") {
        return String(i);
      }
      var f = parse_format(fmt);
      var i$1 = i < 0 ? f.signedconv ? (f.sign = -1, -i >>> 0) : i >>> 0 : i;
      var s = i$1.toString(int_of_base(f.base));
      if (f.prec >= 0) {
        f.filter = " ";
        var n = f.prec - s.length | 0;
        if (n > 0) {
          s = "0".repeat(n) + s;
        }
      }
      return finish_formatting(f, s);
    }
    function dec_of_pos_int64(x) {
      if (!Caml_int64.lt(x, Caml_int64.zero)) {
        return Caml_int64.to_string(x);
      }
      var wbase = /* @__PURE__ */ Caml_int64.mk(10, 0);
      var y = Caml_int64.discard_sign(x);
      var match = Caml_int64.div_mod(y, wbase);
      var match$1 = Caml_int64.div_mod(Caml_int64.add(/* @__PURE__ */ Caml_int64.mk(8, 0), match[1]), wbase);
      var quotient = Caml_int64.add(Caml_int64.add(/* @__PURE__ */ Caml_int64.mk(-858993460, 214748364), match[0]), match$1[0]);
      return Caml_int64.to_string(quotient) + "0123456789"[Caml_int64.to_int32(match$1[1])];
    }
    function oct_of_int64(x) {
      var s = "";
      var wbase = /* @__PURE__ */ Caml_int64.mk(8, 0);
      var cvtbl = "01234567";
      if (Caml_int64.lt(x, Caml_int64.zero)) {
        var y = Caml_int64.discard_sign(x);
        var match = Caml_int64.div_mod(y, wbase);
        var quotient = Caml_int64.add(/* @__PURE__ */ Caml_int64.mk(0, 268435456), match[0]);
        var modulus = match[1];
        s = cvtbl[Caml_int64.to_int32(modulus)] + s;
        while (Caml_int64.neq(quotient, Caml_int64.zero)) {
          var match$1 = Caml_int64.div_mod(quotient, wbase);
          quotient = match$1[0];
          modulus = match$1[1];
          s = cvtbl[Caml_int64.to_int32(modulus)] + s;
        }
        ;
      } else {
        var match$2 = Caml_int64.div_mod(x, wbase);
        var quotient$1 = match$2[0];
        var modulus$1 = match$2[1];
        s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
        while (Caml_int64.neq(quotient$1, Caml_int64.zero)) {
          var match$3 = Caml_int64.div_mod(quotient$1, wbase);
          quotient$1 = match$3[0];
          modulus$1 = match$3[1];
          s = cvtbl[Caml_int64.to_int32(modulus$1)] + s;
        }
        ;
      }
      return s;
    }
    function caml_int64_format(fmt, x) {
      if (fmt === "%d") {
        return Caml_int64.to_string(x);
      }
      var f = parse_format(fmt);
      var x$1 = f.signedconv && Caml_int64.lt(x, Caml_int64.zero) ? (f.sign = -1, Caml_int64.neg(x)) : x;
      var match = f.base;
      var s;
      switch (match) {
        case 0:
          s = oct_of_int64(x$1);
          break;
        case 1:
          s = Caml_int64.to_hex(x$1);
          break;
        case 2:
          s = dec_of_pos_int64(x$1);
          break;
      }
      var fill_s;
      if (f.prec >= 0) {
        f.filter = " ";
        var n = f.prec - s.length | 0;
        fill_s = n > 0 ? "0".repeat(n) + s : s;
      } else {
        fill_s = s;
      }
      return finish_formatting(f, fill_s);
    }
    function caml_format_float(fmt, x) {
      var f = parse_format(fmt);
      var prec = f.prec < 0 ? 6 : f.prec;
      var x$1 = x < 0 ? (f.sign = -1, -x) : x;
      var s = "";
      if (isNaN(x$1)) {
        s = "nan";
        f.filter = " ";
      } else if (isFinite(x$1)) {
        var match = f.conv;
        switch (match) {
          case "e":
            s = x$1.toExponential(prec);
            var i = s.length;
            if (s[i - 3 | 0] === "e") {
              s = s.slice(0, i - 1 | 0) + ("0" + s.slice(i - 1 | 0));
            }
            break;
          case "f":
            s = x$1.toFixed(prec);
            break;
          case "g":
            var prec$1 = prec !== 0 ? prec : 1;
            s = x$1.toExponential(prec$1 - 1 | 0);
            var j = s.indexOf("e");
            var exp = Number(s.slice(j + 1 | 0)) | 0;
            if (exp < -4 || x$1 >= 1e21 || x$1.toFixed().length > prec$1) {
              var i$1 = j - 1 | 0;
              while (s[i$1] === "0") {
                i$1 = i$1 - 1 | 0;
              }
              ;
              if (s[i$1] === ".") {
                i$1 = i$1 - 1 | 0;
              }
              s = s.slice(0, i$1 + 1 | 0) + s.slice(j);
              var i$2 = s.length;
              if (s[i$2 - 3 | 0] === "e") {
                s = s.slice(0, i$2 - 1 | 0) + ("0" + s.slice(i$2 - 1 | 0));
              }
            } else {
              var p = prec$1;
              if (exp < 0) {
                p = p - (exp + 1 | 0) | 0;
                s = x$1.toFixed(p);
              } else {
                while (function() {
                  s = x$1.toFixed(p);
                  return s.length > (prec$1 + 1 | 0);
                }()) {
                  p = p - 1 | 0;
                }
                ;
              }
              if (p !== 0) {
                var k = s.length - 1 | 0;
                while (s[k] === "0") {
                  k = k - 1 | 0;
                }
                ;
                if (s[k] === ".") {
                  k = k - 1 | 0;
                }
                s = s.slice(0, k + 1 | 0);
              }
            }
            break;
          default:
        }
      } else {
        s = "inf";
        f.filter = " ";
      }
      return finish_formatting(f, s);
    }
    var caml_hexstring_of_float = function(x, prec, style) {
      if (!isFinite(x)) {
        if (isNaN(x))
          return "nan";
        return x > 0 ? "infinity" : "-infinity";
      }
      var sign = x == 0 && 1 / x == -Infinity ? 1 : x >= 0 ? 0 : 1;
      if (sign)
        x = -x;
      var exp = 0;
      if (x == 0) {
      } else if (x < 1) {
        while (x < 1 && exp > -1022) {
          x *= 2;
          exp--;
        }
      } else {
        while (x >= 2) {
          x /= 2;
          exp++;
        }
      }
      var exp_sign = exp < 0 ? "" : "+";
      var sign_str = "";
      if (sign)
        sign_str = "-";
      else {
        switch (style) {
          case 43:
            sign_str = "+";
            break;
          case 32:
            sign_str = " ";
            break;
          default:
            break;
        }
      }
      if (prec >= 0 && prec < 13) {
        var cst = Math.pow(2, prec * 4);
        x = Math.round(x * cst) / cst;
      }
      var x_str = x.toString(16);
      if (prec >= 0) {
        var idx = x_str.indexOf(".");
        if (idx < 0) {
          x_str += "." + "0".repeat(prec);
        } else {
          var size = idx + 1 + prec;
          if (x_str.length < size)
            x_str += "0".repeat(size - x_str.length);
          else
            x_str = x_str.substr(0, size);
        }
      }
      return sign_str + "0x" + x_str + "p" + exp_sign + exp.toString(10);
    };
    var float_of_string = function(s, exn) {
      var res = +s;
      if (s.length > 0 && res === res)
        return res;
      s = s.replace(/_/g, "");
      res = +s;
      if (s.length > 0 && res === res || /^[+-]?nan$/i.test(s)) {
        return res;
      }
      ;
      var m = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(s);
      if (m) {
        var m3 = m[3].replace(/0+$/, "");
        var mantissa = parseInt(m[1] + m[2] + m3, 16);
        var exponent = (m[4] | 0) - 4 * m3.length;
        res = mantissa * Math.pow(2, exponent);
        return res;
      }
      if (/^\+?inf(inity)?$/i.test(s))
        return Infinity;
      if (/^-inf(inity)?$/i.test(s))
        return -Infinity;
      throw exn;
    };
    function caml_float_of_string(s) {
      return float_of_string(s, {
        RE_EXN_ID: "Failure",
        _1: "float_of_string"
      });
    }
    var caml_nativeint_format = caml_format_int;
    var caml_int32_format = caml_format_int;
    var caml_int32_of_string = caml_int_of_string;
    var caml_nativeint_of_string = caml_int_of_string;
    exports.caml_format_float = caml_format_float;
    exports.caml_hexstring_of_float = caml_hexstring_of_float;
    exports.caml_format_int = caml_format_int;
    exports.caml_nativeint_format = caml_nativeint_format;
    exports.caml_int32_format = caml_int32_format;
    exports.caml_float_of_string = caml_float_of_string;
    exports.caml_int64_format = caml_int64_format;
    exports.caml_int_of_string = caml_int_of_string;
    exports.caml_int32_of_string = caml_int32_of_string;
    exports.caml_int64_of_string = caml_int64_of_string;
    exports.caml_nativeint_of_string = caml_nativeint_of_string;
  });

  // node_modules/bs-platform/lib/js/caml_external_polyfill.js
  var require_caml_external_polyfill = __commonJS((exports) => {
    "use strict";
    var getGlobalThis = function() {
      if (typeof globalThis !== "undefined")
        return globalThis;
      if (typeof self !== "undefined")
        return self;
      if (typeof window !== "undefined")
        return window;
      if (typeof global !== "undefined")
        return global;
      if (typeof this !== "undefined")
        return this;
      throw new Error("Unable to locate global `this`");
    };
    var resolve = function(s) {
      var myGlobal = getGlobalThis();
      if (myGlobal[s] === void 0) {
        throw new Error(s + " not polyfilled by BuckleScript yet\n");
      }
      return myGlobal[s];
    };
    var register = function(s, fn) {
      var myGlobal = getGlobalThis();
      myGlobal[s] = fn;
      return 0;
    };
    exports.getGlobalThis = getGlobalThis;
    exports.resolve = resolve;
    exports.register = register;
  });

  // node_modules/bs-platform/lib/js/pervasives.js
  var require_pervasives = __commonJS((exports) => {
    "use strict";
    var Curry = require_curry();
    var Caml_io = require_caml_io();
    var Caml_sys = require_caml_sys();
    var Caml_bytes = require_caml_bytes();
    var Caml_format = require_caml_format();
    var Caml_string = require_caml_string();
    var Caml_exceptions = require_caml_exceptions();
    var Caml_js_exceptions = require_caml_js_exceptions();
    var Caml_external_polyfill = require_caml_external_polyfill();
    function failwith(s) {
      throw {
        RE_EXN_ID: "Failure",
        _1: s,
        Error: new Error()
      };
    }
    function invalid_arg(s) {
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: s,
        Error: new Error()
      };
    }
    var Exit = /* @__PURE__ */ Caml_exceptions.create("Pervasives.Exit");
    function abs(x) {
      if (x >= 0) {
        return x;
      } else {
        return -x | 0;
      }
    }
    function lnot(x) {
      return x ^ -1;
    }
    var min_int = -2147483648;
    function classify_float(x) {
      if (isFinite(x)) {
        if (Math.abs(x) >= 22250738585072014e-324) {
          return 0;
        } else if (x !== 0) {
          return 1;
        } else {
          return 2;
        }
      } else if (isNaN(x)) {
        return 4;
      } else {
        return 3;
      }
    }
    function char_of_int(n) {
      if (n < 0 || n > 255) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "char_of_int",
          Error: new Error()
        };
      }
      return n;
    }
    function string_of_bool(b) {
      if (b) {
        return "true";
      } else {
        return "false";
      }
    }
    function bool_of_string(param) {
      switch (param) {
        case "false":
          return false;
        case "true":
          return true;
        default:
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "bool_of_string",
            Error: new Error()
          };
      }
    }
    function bool_of_string_opt(param) {
      switch (param) {
        case "false":
          return false;
        case "true":
          return true;
        default:
          return;
      }
    }
    function int_of_string_opt(s) {
      try {
        return Caml_format.caml_int_of_string(s);
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Failure") {
          return;
        }
        throw exn;
      }
    }
    function valid_float_lexem(s) {
      var l = s.length;
      var _i = 0;
      while (true) {
        var i = _i;
        if (i >= l) {
          return s + ".";
        }
        var match = Caml_string.get(s, i);
        if (match >= 48) {
          if (match >= 58) {
            return s;
          }
          _i = i + 1 | 0;
          continue;
        }
        if (match !== 45) {
          return s;
        }
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function string_of_float(f) {
      return valid_float_lexem(Caml_format.caml_format_float("%.12g", f));
    }
    function float_of_string_opt(s) {
      try {
        return Caml_format.caml_float_of_string(s);
      } catch (raw_exn) {
        var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
        if (exn.RE_EXN_ID === "Failure") {
          return;
        }
        throw exn;
      }
    }
    function $at(l1, l2) {
      if (l1) {
        return {
          hd: l1.hd,
          tl: $at(l1.tl, l2)
        };
      } else {
        return l2;
      }
    }
    var stdin = Caml_io.stdin;
    var stdout = Caml_io.stdout;
    var stderr = Caml_io.stderr;
    function open_out_gen(mode, perm, name) {
      var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_out")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
      Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
      return c;
    }
    function open_out(name) {
      return open_out_gen({
        hd: 1,
        tl: {
          hd: 3,
          tl: {
            hd: 4,
            tl: {
              hd: 7,
              tl: 0
            }
          }
        }
      }, 438, name);
    }
    function open_out_bin(name) {
      return open_out_gen({
        hd: 1,
        tl: {
          hd: 3,
          tl: {
            hd: 4,
            tl: {
              hd: 6,
              tl: 0
            }
          }
        }
      }, 438, name);
    }
    function flush_all(param) {
      var _param = Caml_io.caml_ml_out_channels_list(void 0);
      while (true) {
        var param$1 = _param;
        if (!param$1) {
          return;
        }
        try {
          Caml_io.caml_ml_flush(param$1.hd);
        } catch (raw_exn) {
          var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
          if (exn.RE_EXN_ID !== "Sys_error") {
            throw exn;
          }
        }
        _param = param$1.tl;
        continue;
      }
      ;
    }
    function output_bytes(oc, s) {
      return Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, 0, s.length);
    }
    function output_string(oc, s) {
      return Caml_io.caml_ml_output(oc, s, 0, s.length);
    }
    function output(oc, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output",
          Error: new Error()
        };
      }
      return Caml_external_polyfill.resolve("caml_ml_output_bytes")(oc, s, ofs, len);
    }
    function output_substring(oc, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "output_substring",
          Error: new Error()
        };
      }
      return Caml_io.caml_ml_output(oc, s, ofs, len);
    }
    function output_value(chan, v) {
      return Caml_external_polyfill.resolve("caml_output_value")(chan, v, 0);
    }
    function close_out(oc) {
      Caml_io.caml_ml_flush(oc);
      return Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
    }
    function close_out_noerr(oc) {
      try {
        Caml_io.caml_ml_flush(oc);
      } catch (exn) {
      }
      try {
        return Caml_external_polyfill.resolve("caml_ml_close_channel")(oc);
      } catch (exn$1) {
        return;
      }
    }
    function open_in_gen(mode, perm, name) {
      var c = Caml_external_polyfill.resolve("caml_ml_open_descriptor_in")(Caml_external_polyfill.resolve("caml_sys_open")(name, mode, perm));
      Caml_external_polyfill.resolve("caml_ml_set_channel_name")(c, name);
      return c;
    }
    function open_in(name) {
      return open_in_gen({
        hd: 0,
        tl: {
          hd: 7,
          tl: 0
        }
      }, 0, name);
    }
    function open_in_bin(name) {
      return open_in_gen({
        hd: 0,
        tl: {
          hd: 6,
          tl: 0
        }
      }, 0, name);
    }
    function input(ic, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "input",
          Error: new Error()
        };
      }
      return Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
    }
    function unsafe_really_input(ic, s, _ofs, _len) {
      while (true) {
        var len = _len;
        var ofs = _ofs;
        if (len <= 0) {
          return;
        }
        var r = Caml_external_polyfill.resolve("caml_ml_input")(ic, s, ofs, len);
        if (r === 0) {
          throw {
            RE_EXN_ID: "End_of_file",
            Error: new Error()
          };
        }
        _len = len - r | 0;
        _ofs = ofs + r | 0;
        continue;
      }
      ;
    }
    function really_input(ic, s, ofs, len) {
      if (ofs < 0 || len < 0 || ofs > (s.length - len | 0)) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "really_input",
          Error: new Error()
        };
      }
      return unsafe_really_input(ic, s, ofs, len);
    }
    function really_input_string(ic, len) {
      var s = Caml_bytes.caml_create_bytes(len);
      really_input(ic, s, 0, len);
      return Caml_bytes.bytes_to_string(s);
    }
    function input_line(chan) {
      var build_result = function(buf, _pos, _param) {
        while (true) {
          var param = _param;
          var pos = _pos;
          if (!param) {
            return buf;
          }
          var hd = param.hd;
          var len = hd.length;
          Caml_bytes.caml_blit_bytes(hd, 0, buf, pos - len | 0, len);
          _param = param.tl;
          _pos = pos - len | 0;
          continue;
        }
        ;
      };
      var scan = function(_accu, _len) {
        while (true) {
          var len = _len;
          var accu = _accu;
          var n = Caml_external_polyfill.resolve("caml_ml_input_scan_line")(chan);
          if (n === 0) {
            if (accu) {
              return build_result(Caml_bytes.caml_create_bytes(len), len, accu);
            }
            throw {
              RE_EXN_ID: "End_of_file",
              Error: new Error()
            };
          }
          if (n > 0) {
            var res = Caml_bytes.caml_create_bytes(n - 1 | 0);
            Caml_external_polyfill.resolve("caml_ml_input")(chan, res, 0, n - 1 | 0);
            Caml_external_polyfill.resolve("caml_ml_input_char")(chan);
            if (!accu) {
              return res;
            }
            var len$1 = (len + n | 0) - 1 | 0;
            return build_result(Caml_bytes.caml_create_bytes(len$1), len$1, {
              hd: res,
              tl: accu
            });
          }
          var beg = Caml_bytes.caml_create_bytes(-n | 0);
          Caml_external_polyfill.resolve("caml_ml_input")(chan, beg, 0, -n | 0);
          _len = len - n | 0;
          _accu = {
            hd: beg,
            tl: accu
          };
          continue;
        }
        ;
      };
      return Caml_bytes.bytes_to_string(scan(0, 0));
    }
    function close_in_noerr(ic) {
      try {
        return Caml_external_polyfill.resolve("caml_ml_close_channel")(ic);
      } catch (exn) {
        return;
      }
    }
    function print_char(c) {
      return Caml_io.caml_ml_output_char(stdout, c);
    }
    function print_string(s) {
      return output_string(stdout, s);
    }
    function print_bytes(s) {
      return output_bytes(stdout, s);
    }
    function print_int(i) {
      return output_string(stdout, String(i));
    }
    function print_float(f) {
      return output_string(stdout, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
    }
    function print_newline(param) {
      Caml_io.caml_ml_output_char(stdout, 10);
      return Caml_io.caml_ml_flush(stdout);
    }
    function prerr_char(c) {
      return Caml_io.caml_ml_output_char(stderr, c);
    }
    function prerr_string(s) {
      return output_string(stderr, s);
    }
    function prerr_bytes(s) {
      return output_bytes(stderr, s);
    }
    function prerr_int(i) {
      return output_string(stderr, String(i));
    }
    function prerr_float(f) {
      return output_string(stderr, valid_float_lexem(Caml_format.caml_format_float("%.12g", f)));
    }
    function prerr_newline(param) {
      Caml_io.caml_ml_output_char(stderr, 10);
      return Caml_io.caml_ml_flush(stderr);
    }
    function read_line(param) {
      Caml_io.caml_ml_flush(stdout);
      return input_line(stdin);
    }
    function read_int(param) {
      return Caml_format.caml_int_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    function read_int_opt(param) {
      return int_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    function read_float(param) {
      return Caml_format.caml_float_of_string((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    function read_float_opt(param) {
      return float_of_string_opt((Caml_io.caml_ml_flush(stdout), input_line(stdin)));
    }
    function string_of_format(param) {
      return param._1;
    }
    var exit_function = {
      contents: flush_all
    };
    function at_exit(f) {
      var g = exit_function.contents;
      exit_function.contents = function(param) {
        Curry._1(f, void 0);
        return Curry._1(g, void 0);
      };
    }
    function do_at_exit(param) {
      return Curry._1(exit_function.contents, void 0);
    }
    function exit(retcode) {
      do_at_exit(void 0);
      return Caml_sys.caml_sys_exit(retcode);
    }
    var max_int = 2147483647;
    var infinity = Infinity;
    var neg_infinity = -Infinity;
    var max_float = 17976931348623157e292;
    var min_float = 22250738585072014e-324;
    var epsilon_float = 2220446049250313e-31;
    var flush = Caml_io.caml_ml_flush;
    var output_char = Caml_io.caml_ml_output_char;
    var output_byte = Caml_io.caml_ml_output_char;
    function output_binary_int(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_output_int")(prim, prim$1);
    }
    function seek_out(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_seek_out")(prim, prim$1);
    }
    function pos_out(prim) {
      return Caml_external_polyfill.resolve("caml_ml_pos_out")(prim);
    }
    function out_channel_length(prim) {
      return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
    }
    function set_binary_mode_out(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim, prim$1);
    }
    function input_char(prim) {
      return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
    }
    function input_byte(prim) {
      return Caml_external_polyfill.resolve("caml_ml_input_char")(prim);
    }
    function input_binary_int(prim) {
      return Caml_external_polyfill.resolve("caml_ml_input_int")(prim);
    }
    function input_value(prim) {
      return Caml_external_polyfill.resolve("caml_input_value")(prim);
    }
    function seek_in(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_seek_in")(prim, prim$1);
    }
    function pos_in(prim) {
      return Caml_external_polyfill.resolve("caml_ml_pos_in")(prim);
    }
    function in_channel_length(prim) {
      return Caml_external_polyfill.resolve("caml_ml_channel_size")(prim);
    }
    function close_in(prim) {
      return Caml_external_polyfill.resolve("caml_ml_close_channel")(prim);
    }
    function set_binary_mode_in(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_set_binary_mode")(prim, prim$1);
    }
    function LargeFile_seek_out(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_seek_out_64")(prim, prim$1);
    }
    function LargeFile_pos_out(prim) {
      return Caml_external_polyfill.resolve("caml_ml_pos_out_64")(prim);
    }
    function LargeFile_out_channel_length(prim) {
      return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
    }
    function LargeFile_seek_in(prim, prim$1) {
      return Caml_external_polyfill.resolve("caml_ml_seek_in_64")(prim, prim$1);
    }
    function LargeFile_pos_in(prim) {
      return Caml_external_polyfill.resolve("caml_ml_pos_in_64")(prim);
    }
    function LargeFile_in_channel_length(prim) {
      return Caml_external_polyfill.resolve("caml_ml_channel_size_64")(prim);
    }
    var LargeFile = {
      seek_out: LargeFile_seek_out,
      pos_out: LargeFile_pos_out,
      out_channel_length: LargeFile_out_channel_length,
      seek_in: LargeFile_seek_in,
      pos_in: LargeFile_pos_in,
      in_channel_length: LargeFile_in_channel_length
    };
    exports.invalid_arg = invalid_arg;
    exports.failwith = failwith;
    exports.Exit = Exit;
    exports.abs = abs;
    exports.max_int = max_int;
    exports.min_int = min_int;
    exports.lnot = lnot;
    exports.infinity = infinity;
    exports.neg_infinity = neg_infinity;
    exports.max_float = max_float;
    exports.min_float = min_float;
    exports.epsilon_float = epsilon_float;
    exports.classify_float = classify_float;
    exports.char_of_int = char_of_int;
    exports.string_of_bool = string_of_bool;
    exports.bool_of_string = bool_of_string;
    exports.bool_of_string_opt = bool_of_string_opt;
    exports.int_of_string_opt = int_of_string_opt;
    exports.string_of_float = string_of_float;
    exports.float_of_string_opt = float_of_string_opt;
    exports.$at = $at;
    exports.stdin = stdin;
    exports.stdout = stdout;
    exports.stderr = stderr;
    exports.print_char = print_char;
    exports.print_string = print_string;
    exports.print_bytes = print_bytes;
    exports.print_int = print_int;
    exports.print_float = print_float;
    exports.print_newline = print_newline;
    exports.prerr_char = prerr_char;
    exports.prerr_string = prerr_string;
    exports.prerr_bytes = prerr_bytes;
    exports.prerr_int = prerr_int;
    exports.prerr_float = prerr_float;
    exports.prerr_newline = prerr_newline;
    exports.read_line = read_line;
    exports.read_int = read_int;
    exports.read_int_opt = read_int_opt;
    exports.read_float = read_float;
    exports.read_float_opt = read_float_opt;
    exports.open_out = open_out;
    exports.open_out_bin = open_out_bin;
    exports.open_out_gen = open_out_gen;
    exports.flush = flush;
    exports.flush_all = flush_all;
    exports.output_char = output_char;
    exports.output_string = output_string;
    exports.output_bytes = output_bytes;
    exports.output = output;
    exports.output_substring = output_substring;
    exports.output_byte = output_byte;
    exports.output_binary_int = output_binary_int;
    exports.output_value = output_value;
    exports.seek_out = seek_out;
    exports.pos_out = pos_out;
    exports.out_channel_length = out_channel_length;
    exports.close_out = close_out;
    exports.close_out_noerr = close_out_noerr;
    exports.set_binary_mode_out = set_binary_mode_out;
    exports.open_in = open_in;
    exports.open_in_bin = open_in_bin;
    exports.open_in_gen = open_in_gen;
    exports.input_char = input_char;
    exports.input_line = input_line;
    exports.input = input;
    exports.really_input = really_input;
    exports.really_input_string = really_input_string;
    exports.input_byte = input_byte;
    exports.input_binary_int = input_binary_int;
    exports.input_value = input_value;
    exports.seek_in = seek_in;
    exports.pos_in = pos_in;
    exports.in_channel_length = in_channel_length;
    exports.close_in = close_in;
    exports.close_in_noerr = close_in_noerr;
    exports.set_binary_mode_in = set_binary_mode_in;
    exports.LargeFile = LargeFile;
    exports.string_of_format = string_of_format;
    exports.exit = exit;
    exports.at_exit = at_exit;
    exports.valid_float_lexem = valid_float_lexem;
    exports.unsafe_really_input = unsafe_really_input;
    exports.do_at_exit = do_at_exit;
  });

  // node_modules/bs-platform/lib/js/list.js
  var require_list = __commonJS((exports) => {
    "use strict";
    var Curry = require_curry();
    var Caml_obj = require_caml_obj();
    var Pervasives = require_pervasives();
    var Caml_option = require_caml_option();
    function length(l) {
      var _len = 0;
      var _param = l;
      while (true) {
        var param = _param;
        var len = _len;
        if (!param) {
          return len;
        }
        _param = param.tl;
        _len = len + 1 | 0;
        continue;
      }
      ;
    }
    function cons(a, l) {
      return {
        hd: a,
        tl: l
      };
    }
    function hd(param) {
      if (param) {
        return param.hd;
      }
      throw {
        RE_EXN_ID: "Failure",
        _1: "hd",
        Error: new Error()
      };
    }
    function tl(param) {
      if (param) {
        return param.tl;
      }
      throw {
        RE_EXN_ID: "Failure",
        _1: "tl",
        Error: new Error()
      };
    }
    function nth(l, n) {
      if (n < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.nth",
          Error: new Error()
        };
      }
      var _l = l;
      var _n = n;
      while (true) {
        var n$1 = _n;
        var l$1 = _l;
        if (l$1) {
          if (n$1 === 0) {
            return l$1.hd;
          }
          _n = n$1 - 1 | 0;
          _l = l$1.tl;
          continue;
        }
        throw {
          RE_EXN_ID: "Failure",
          _1: "nth",
          Error: new Error()
        };
      }
      ;
    }
    function nth_opt(l, n) {
      if (n < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.nth",
          Error: new Error()
        };
      }
      var _l = l;
      var _n = n;
      while (true) {
        var n$1 = _n;
        var l$1 = _l;
        if (!l$1) {
          return;
        }
        if (n$1 === 0) {
          return Caml_option.some(l$1.hd);
        }
        _n = n$1 - 1 | 0;
        _l = l$1.tl;
        continue;
      }
      ;
    }
    function rev_append(_l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          return l2;
        }
        _l2 = {
          hd: l1.hd,
          tl: l2
        };
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function rev(l) {
      return rev_append(l, 0);
    }
    function init_tailrec_aux(_acc, _i, n, f) {
      while (true) {
        var i = _i;
        var acc = _acc;
        if (i >= n) {
          return acc;
        }
        _i = i + 1 | 0;
        _acc = {
          hd: Curry._1(f, i),
          tl: acc
        };
        continue;
      }
      ;
    }
    function init_aux(i, n, f) {
      if (i >= n) {
        return 0;
      }
      var r = Curry._1(f, i);
      return {
        hd: r,
        tl: init_aux(i + 1 | 0, n, f)
      };
    }
    function init(len, f) {
      if (len < 0) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.init",
          Error: new Error()
        };
      }
      if (len > 1e4) {
        return rev_append(init_tailrec_aux(0, 0, len, f), 0);
      } else {
        return init_aux(0, len, f);
      }
    }
    function flatten(param) {
      if (param) {
        return Pervasives.$at(param.hd, flatten(param.tl));
      } else {
        return 0;
      }
    }
    function map(f, param) {
      if (!param) {
        return 0;
      }
      var r = Curry._1(f, param.hd);
      return {
        hd: r,
        tl: map(f, param.tl)
      };
    }
    function mapi(i, f, param) {
      if (!param) {
        return 0;
      }
      var r = Curry._2(f, i, param.hd);
      return {
        hd: r,
        tl: mapi(i + 1 | 0, f, param.tl)
      };
    }
    function mapi$1(f, l) {
      return mapi(0, f, l);
    }
    function rev_map(f, l) {
      var _accu = 0;
      var _param = l;
      while (true) {
        var param = _param;
        var accu = _accu;
        if (!param) {
          return accu;
        }
        _param = param.tl;
        _accu = {
          hd: Curry._1(f, param.hd),
          tl: accu
        };
        continue;
      }
      ;
    }
    function iter(f, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return;
        }
        Curry._1(f, param.hd);
        _param = param.tl;
        continue;
      }
      ;
    }
    function iteri(f, l) {
      var _i = 0;
      var _param = l;
      while (true) {
        var param = _param;
        var i = _i;
        if (!param) {
          return;
        }
        Curry._2(f, i, param.hd);
        _param = param.tl;
        _i = i + 1 | 0;
        continue;
      }
      ;
    }
    function fold_left(f, _accu, _l) {
      while (true) {
        var l = _l;
        var accu = _accu;
        if (!l) {
          return accu;
        }
        _l = l.tl;
        _accu = Curry._2(f, accu, l.hd);
        continue;
      }
      ;
    }
    function fold_right(f, l, accu) {
      if (l) {
        return Curry._2(f, l.hd, fold_right(f, l.tl, accu));
      } else {
        return accu;
      }
    }
    function map2(f, l1, l2) {
      if (l1) {
        if (l2) {
          var r = Curry._2(f, l1.hd, l2.hd);
          return {
            hd: r,
            tl: map2(f, l1.tl, l2.tl)
          };
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.map2",
          Error: new Error()
        };
      }
      if (!l2) {
        return 0;
      }
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "List.map2",
        Error: new Error()
      };
    }
    function rev_map2(f, l1, l2) {
      var _accu = 0;
      var _l1 = l1;
      var _l2 = l2;
      while (true) {
        var l2$1 = _l2;
        var l1$1 = _l1;
        var accu = _accu;
        if (l1$1) {
          if (l2$1) {
            _l2 = l2$1.tl;
            _l1 = l1$1.tl;
            _accu = {
              hd: Curry._2(f, l1$1.hd, l2$1.hd),
              tl: accu
            };
            continue;
          }
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.rev_map2",
            Error: new Error()
          };
        }
        if (l2$1) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.rev_map2",
            Error: new Error()
          };
        }
        return accu;
      }
      ;
    }
    function iter2(f, _l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            Curry._2(f, l1.hd, l2.hd);
            _l2 = l2.tl;
            _l1 = l1.tl;
            continue;
          }
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.iter2",
            Error: new Error()
          };
        }
        if (!l2) {
          return;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.iter2",
          Error: new Error()
        };
      }
      ;
    }
    function fold_left2(f, _accu, _l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        var accu = _accu;
        if (l1) {
          if (l2) {
            _l2 = l2.tl;
            _l1 = l1.tl;
            _accu = Curry._3(f, accu, l1.hd, l2.hd);
            continue;
          }
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.fold_left2",
            Error: new Error()
          };
        }
        if (l2) {
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.fold_left2",
            Error: new Error()
          };
        }
        return accu;
      }
      ;
    }
    function fold_right2(f, l1, l2, accu) {
      if (l1) {
        if (l2) {
          return Curry._3(f, l1.hd, l2.hd, fold_right2(f, l1.tl, l2.tl, accu));
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.fold_right2",
          Error: new Error()
        };
      }
      if (l2) {
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.fold_right2",
          Error: new Error()
        };
      }
      return accu;
    }
    function for_all(p, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return true;
        }
        if (!Curry._1(p, param.hd)) {
          return false;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function exists(p, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return false;
        }
        if (Curry._1(p, param.hd)) {
          return true;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function for_all2(p, _l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            if (!Curry._2(p, l1.hd, l2.hd)) {
              return false;
            }
            _l2 = l2.tl;
            _l1 = l1.tl;
            continue;
          }
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.for_all2",
            Error: new Error()
          };
        }
        if (!l2) {
          return true;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.for_all2",
          Error: new Error()
        };
      }
      ;
    }
    function exists2(p, _l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (l1) {
          if (l2) {
            if (Curry._2(p, l1.hd, l2.hd)) {
              return true;
            }
            _l2 = l2.tl;
            _l1 = l1.tl;
            continue;
          }
          throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "List.exists2",
            Error: new Error()
          };
        }
        if (!l2) {
          return false;
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.exists2",
          Error: new Error()
        };
      }
      ;
    }
    function mem(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return false;
        }
        if (Caml_obj.caml_equal(param.hd, x)) {
          return true;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function memq(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return false;
        }
        if (param.hd === x) {
          return true;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function assoc(x, _param) {
      while (true) {
        var param = _param;
        if (param) {
          var match = param.hd;
          if (Caml_obj.caml_equal(match[0], x)) {
            return match[1];
          }
          _param = param.tl;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function assoc_opt(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return;
        }
        var match = param.hd;
        if (Caml_obj.caml_equal(match[0], x)) {
          return Caml_option.some(match[1]);
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function assq(x, _param) {
      while (true) {
        var param = _param;
        if (param) {
          var match = param.hd;
          if (match[0] === x) {
            return match[1];
          }
          _param = param.tl;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function assq_opt(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return;
        }
        var match = param.hd;
        if (match[0] === x) {
          return Caml_option.some(match[1]);
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function mem_assoc(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return false;
        }
        if (Caml_obj.caml_equal(param.hd[0], x)) {
          return true;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function mem_assq(x, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return false;
        }
        if (param.hd[0] === x) {
          return true;
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function remove_assoc(x, param) {
      if (!param) {
        return 0;
      }
      var l = param.tl;
      var pair = param.hd;
      if (Caml_obj.caml_equal(pair[0], x)) {
        return l;
      } else {
        return {
          hd: pair,
          tl: remove_assoc(x, l)
        };
      }
    }
    function remove_assq(x, param) {
      if (!param) {
        return 0;
      }
      var l = param.tl;
      var pair = param.hd;
      if (pair[0] === x) {
        return l;
      } else {
        return {
          hd: pair,
          tl: remove_assq(x, l)
        };
      }
    }
    function find(p, _param) {
      while (true) {
        var param = _param;
        if (param) {
          var x = param.hd;
          if (Curry._1(p, x)) {
            return x;
          }
          _param = param.tl;
          continue;
        }
        throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
      }
      ;
    }
    function find_opt(p, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return;
        }
        var x = param.hd;
        if (Curry._1(p, x)) {
          return Caml_option.some(x);
        }
        _param = param.tl;
        continue;
      }
      ;
    }
    function find_all(p) {
      return function(param) {
        var _accu = 0;
        var _param = param;
        while (true) {
          var param$1 = _param;
          var accu = _accu;
          if (!param$1) {
            return rev_append(accu, 0);
          }
          var l = param$1.tl;
          var x = param$1.hd;
          if (Curry._1(p, x)) {
            _param = l;
            _accu = {
              hd: x,
              tl: accu
            };
            continue;
          }
          _param = l;
          continue;
        }
        ;
      };
    }
    function partition(p, l) {
      var _yes = 0;
      var _no = 0;
      var _param = l;
      while (true) {
        var param = _param;
        var no = _no;
        var yes = _yes;
        if (!param) {
          return [
            rev_append(yes, 0),
            rev_append(no, 0)
          ];
        }
        var l$1 = param.tl;
        var x = param.hd;
        if (Curry._1(p, x)) {
          _param = l$1;
          _yes = {
            hd: x,
            tl: yes
          };
          continue;
        }
        _param = l$1;
        _no = {
          hd: x,
          tl: no
        };
        continue;
      }
      ;
    }
    function split(param) {
      if (!param) {
        return [
          0,
          0
        ];
      }
      var match = param.hd;
      var match$1 = split(param.tl);
      return [
        {
          hd: match[0],
          tl: match$1[0]
        },
        {
          hd: match[1],
          tl: match$1[1]
        }
      ];
    }
    function combine(l1, l2) {
      if (l1) {
        if (l2) {
          return {
            hd: [
              l1.hd,
              l2.hd
            ],
            tl: combine(l1.tl, l2.tl)
          };
        }
        throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "List.combine",
          Error: new Error()
        };
      }
      if (!l2) {
        return 0;
      }
      throw {
        RE_EXN_ID: "Invalid_argument",
        _1: "List.combine",
        Error: new Error()
      };
    }
    function merge(cmp, l1, l2) {
      if (!l1) {
        return l2;
      }
      if (!l2) {
        return l1;
      }
      var h2 = l2.hd;
      var h1 = l1.hd;
      if (Curry._2(cmp, h1, h2) <= 0) {
        return {
          hd: h1,
          tl: merge(cmp, l1.tl, l2)
        };
      } else {
        return {
          hd: h2,
          tl: merge(cmp, l1, l2.tl)
        };
      }
    }
    function chop(_k, _l) {
      while (true) {
        var l = _l;
        var k = _k;
        if (k === 0) {
          return l;
        }
        if (l) {
          _l = l.tl;
          _k = k - 1 | 0;
          continue;
        }
        throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "list.ml",
            262,
            11
          ],
          Error: new Error()
        };
      }
      ;
    }
    function stable_sort(cmp, l) {
      var sort2 = function(n, l2) {
        if (n !== 2) {
          if (n === 3 && l2) {
            var match = l2.tl;
            if (match) {
              var match$1 = match.tl;
              if (match$1) {
                var x3 = match$1.hd;
                var x2 = match.hd;
                var x1 = l2.hd;
                if (Curry._2(cmp, x1, x2) <= 0) {
                  if (Curry._2(cmp, x2, x3) <= 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: {
                          hd: x3,
                          tl: 0
                        }
                      }
                    };
                  } else if (Curry._2(cmp, x1, x3) <= 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  }
                } else if (Curry._2(cmp, x1, x3) <= 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    }
                  };
                } else if (Curry._2(cmp, x2, x3) <= 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                } else {
                  return {
                    hd: x3,
                    tl: {
                      hd: x2,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                }
              }
            }
          }
        } else if (l2) {
          var match$2 = l2.tl;
          if (match$2) {
            var x2$1 = match$2.hd;
            var x1$1 = l2.hd;
            if (Curry._2(cmp, x1$1, x2$1) <= 0) {
              return {
                hd: x1$1,
                tl: {
                  hd: x2$1,
                  tl: 0
                }
              };
            } else {
              return {
                hd: x2$1,
                tl: {
                  hd: x1$1,
                  tl: 0
                }
              };
            }
          }
        }
        var n1 = n >> 1;
        var n2 = n - n1 | 0;
        var l22 = chop(n1, l2);
        var s1 = rev_sort(n1, l2);
        var s2 = rev_sort(n2, l22);
        var _l1 = s1;
        var _l2 = s2;
        var _accu = 0;
        while (true) {
          var accu = _accu;
          var l2$1 = _l2;
          var l1 = _l1;
          if (!l1) {
            return rev_append(l2$1, accu);
          }
          if (!l2$1) {
            return rev_append(l1, accu);
          }
          var h2 = l2$1.hd;
          var h1 = l1.hd;
          if (Curry._2(cmp, h1, h2) > 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l1 = l1.tl;
            continue;
          }
          _accu = {
            hd: h2,
            tl: accu
          };
          _l2 = l2$1.tl;
          continue;
        }
        ;
      };
      var rev_sort = function(n, l2) {
        if (n !== 2) {
          if (n === 3 && l2) {
            var match = l2.tl;
            if (match) {
              var match$1 = match.tl;
              if (match$1) {
                var x3 = match$1.hd;
                var x2 = match.hd;
                var x1 = l2.hd;
                if (Curry._2(cmp, x1, x2) > 0) {
                  if (Curry._2(cmp, x2, x3) > 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: {
                          hd: x3,
                          tl: 0
                        }
                      }
                    };
                  } else if (Curry._2(cmp, x1, x3) > 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  }
                } else if (Curry._2(cmp, x1, x3) > 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    }
                  };
                } else if (Curry._2(cmp, x2, x3) > 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                } else {
                  return {
                    hd: x3,
                    tl: {
                      hd: x2,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                }
              }
            }
          }
        } else if (l2) {
          var match$2 = l2.tl;
          if (match$2) {
            var x2$1 = match$2.hd;
            var x1$1 = l2.hd;
            if (Curry._2(cmp, x1$1, x2$1) > 0) {
              return {
                hd: x1$1,
                tl: {
                  hd: x2$1,
                  tl: 0
                }
              };
            } else {
              return {
                hd: x2$1,
                tl: {
                  hd: x1$1,
                  tl: 0
                }
              };
            }
          }
        }
        var n1 = n >> 1;
        var n2 = n - n1 | 0;
        var l22 = chop(n1, l2);
        var s1 = sort2(n1, l2);
        var s2 = sort2(n2, l22);
        var _l1 = s1;
        var _l2 = s2;
        var _accu = 0;
        while (true) {
          var accu = _accu;
          var l2$1 = _l2;
          var l1 = _l1;
          if (!l1) {
            return rev_append(l2$1, accu);
          }
          if (!l2$1) {
            return rev_append(l1, accu);
          }
          var h2 = l2$1.hd;
          var h1 = l1.hd;
          if (Curry._2(cmp, h1, h2) <= 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l1 = l1.tl;
            continue;
          }
          _accu = {
            hd: h2,
            tl: accu
          };
          _l2 = l2$1.tl;
          continue;
        }
        ;
      };
      var len = length(l);
      if (len < 2) {
        return l;
      } else {
        return sort2(len, l);
      }
    }
    function sort_uniq(cmp, l) {
      var sort2 = function(n, l2) {
        if (n !== 2) {
          if (n === 3 && l2) {
            var match = l2.tl;
            if (match) {
              var match$1 = match.tl;
              if (match$1) {
                var x3 = match$1.hd;
                var x2 = match.hd;
                var x1 = l2.hd;
                var c = Curry._2(cmp, x1, x2);
                if (c === 0) {
                  var c$1 = Curry._2(cmp, x2, x3);
                  if (c$1 === 0) {
                    return {
                      hd: x2,
                      tl: 0
                    };
                  } else if (c$1 < 0) {
                    return {
                      hd: x2,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  }
                }
                if (c < 0) {
                  var c$2 = Curry._2(cmp, x2, x3);
                  if (c$2 === 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  }
                  if (c$2 < 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: {
                          hd: x3,
                          tl: 0
                        }
                      }
                    };
                  }
                  var c$3 = Curry._2(cmp, x1, x3);
                  if (c$3 === 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  } else if (c$3 < 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  }
                }
                var c$4 = Curry._2(cmp, x1, x3);
                if (c$4 === 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: 0
                    }
                  };
                }
                if (c$4 < 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    }
                  };
                }
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: 0
                    }
                  };
                } else if (c$5 < 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                } else {
                  return {
                    hd: x3,
                    tl: {
                      hd: x2,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                }
              }
            }
          }
        } else if (l2) {
          var match$2 = l2.tl;
          if (match$2) {
            var x2$1 = match$2.hd;
            var x1$1 = l2.hd;
            var c$6 = Curry._2(cmp, x1$1, x2$1);
            if (c$6 === 0) {
              return {
                hd: x1$1,
                tl: 0
              };
            } else if (c$6 < 0) {
              return {
                hd: x1$1,
                tl: {
                  hd: x2$1,
                  tl: 0
                }
              };
            } else {
              return {
                hd: x2$1,
                tl: {
                  hd: x1$1,
                  tl: 0
                }
              };
            }
          }
        }
        var n1 = n >> 1;
        var n2 = n - n1 | 0;
        var l22 = chop(n1, l2);
        var s1 = rev_sort(n1, l2);
        var s2 = rev_sort(n2, l22);
        var _l1 = s1;
        var _l2 = s2;
        var _accu = 0;
        while (true) {
          var accu = _accu;
          var l2$1 = _l2;
          var l1 = _l1;
          if (!l1) {
            return rev_append(l2$1, accu);
          }
          if (!l2$1) {
            return rev_append(l1, accu);
          }
          var t2 = l2$1.tl;
          var h2 = l2$1.hd;
          var t1 = l1.tl;
          var h1 = l1.hd;
          var c$7 = Curry._2(cmp, h1, h2);
          if (c$7 === 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l2 = t2;
            _l1 = t1;
            continue;
          }
          if (c$7 > 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l1 = t1;
            continue;
          }
          _accu = {
            hd: h2,
            tl: accu
          };
          _l2 = t2;
          continue;
        }
        ;
      };
      var rev_sort = function(n, l2) {
        if (n !== 2) {
          if (n === 3 && l2) {
            var match = l2.tl;
            if (match) {
              var match$1 = match.tl;
              if (match$1) {
                var x3 = match$1.hd;
                var x2 = match.hd;
                var x1 = l2.hd;
                var c = Curry._2(cmp, x1, x2);
                if (c === 0) {
                  var c$1 = Curry._2(cmp, x2, x3);
                  if (c$1 === 0) {
                    return {
                      hd: x2,
                      tl: 0
                    };
                  } else if (c$1 > 0) {
                    return {
                      hd: x2,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  }
                }
                if (c > 0) {
                  var c$2 = Curry._2(cmp, x2, x3);
                  if (c$2 === 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  }
                  if (c$2 > 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: {
                          hd: x3,
                          tl: 0
                        }
                      }
                    };
                  }
                  var c$3 = Curry._2(cmp, x1, x3);
                  if (c$3 === 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x2,
                        tl: 0
                      }
                    };
                  } else if (c$3 > 0) {
                    return {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  } else {
                    return {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: {
                          hd: x2,
                          tl: 0
                        }
                      }
                    };
                  }
                }
                var c$4 = Curry._2(cmp, x1, x3);
                if (c$4 === 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: 0
                    }
                  };
                }
                if (c$4 > 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: {
                        hd: x3,
                        tl: 0
                      }
                    }
                  };
                }
                var c$5 = Curry._2(cmp, x2, x3);
                if (c$5 === 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x1,
                      tl: 0
                    }
                  };
                } else if (c$5 > 0) {
                  return {
                    hd: x2,
                    tl: {
                      hd: x3,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                } else {
                  return {
                    hd: x3,
                    tl: {
                      hd: x2,
                      tl: {
                        hd: x1,
                        tl: 0
                      }
                    }
                  };
                }
              }
            }
          }
        } else if (l2) {
          var match$2 = l2.tl;
          if (match$2) {
            var x2$1 = match$2.hd;
            var x1$1 = l2.hd;
            var c$6 = Curry._2(cmp, x1$1, x2$1);
            if (c$6 === 0) {
              return {
                hd: x1$1,
                tl: 0
              };
            } else if (c$6 > 0) {
              return {
                hd: x1$1,
                tl: {
                  hd: x2$1,
                  tl: 0
                }
              };
            } else {
              return {
                hd: x2$1,
                tl: {
                  hd: x1$1,
                  tl: 0
                }
              };
            }
          }
        }
        var n1 = n >> 1;
        var n2 = n - n1 | 0;
        var l22 = chop(n1, l2);
        var s1 = sort2(n1, l2);
        var s2 = sort2(n2, l22);
        var _l1 = s1;
        var _l2 = s2;
        var _accu = 0;
        while (true) {
          var accu = _accu;
          var l2$1 = _l2;
          var l1 = _l1;
          if (!l1) {
            return rev_append(l2$1, accu);
          }
          if (!l2$1) {
            return rev_append(l1, accu);
          }
          var t2 = l2$1.tl;
          var h2 = l2$1.hd;
          var t1 = l1.tl;
          var h1 = l1.hd;
          var c$7 = Curry._2(cmp, h1, h2);
          if (c$7 === 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l2 = t2;
            _l1 = t1;
            continue;
          }
          if (c$7 < 0) {
            _accu = {
              hd: h1,
              tl: accu
            };
            _l1 = t1;
            continue;
          }
          _accu = {
            hd: h2,
            tl: accu
          };
          _l2 = t2;
          continue;
        }
        ;
      };
      var len = length(l);
      if (len < 2) {
        return l;
      } else {
        return sort2(len, l);
      }
    }
    function compare_lengths(_l1, _l2) {
      while (true) {
        var l2 = _l2;
        var l1 = _l1;
        if (!l1) {
          if (l2) {
            return -1;
          } else {
            return 0;
          }
        }
        if (!l2) {
          return 1;
        }
        _l2 = l2.tl;
        _l1 = l1.tl;
        continue;
      }
      ;
    }
    function compare_length_with(_l, _n) {
      while (true) {
        var n = _n;
        var l = _l;
        if (!l) {
          if (n === 0) {
            return 0;
          } else if (n > 0) {
            return -1;
          } else {
            return 1;
          }
        }
        if (n <= 0) {
          return 1;
        }
        _n = n - 1 | 0;
        _l = l.tl;
        continue;
      }
      ;
    }
    var append = Pervasives.$at;
    var concat = flatten;
    var filter = find_all;
    var sort = stable_sort;
    var fast_sort = stable_sort;
    exports.length = length;
    exports.compare_lengths = compare_lengths;
    exports.compare_length_with = compare_length_with;
    exports.cons = cons;
    exports.hd = hd;
    exports.tl = tl;
    exports.nth = nth;
    exports.nth_opt = nth_opt;
    exports.rev = rev;
    exports.init = init;
    exports.append = append;
    exports.rev_append = rev_append;
    exports.concat = concat;
    exports.flatten = flatten;
    exports.iter = iter;
    exports.iteri = iteri;
    exports.map = map;
    exports.mapi = mapi$1;
    exports.rev_map = rev_map;
    exports.fold_left = fold_left;
    exports.fold_right = fold_right;
    exports.iter2 = iter2;
    exports.map2 = map2;
    exports.rev_map2 = rev_map2;
    exports.fold_left2 = fold_left2;
    exports.fold_right2 = fold_right2;
    exports.for_all = for_all;
    exports.exists = exists;
    exports.for_all2 = for_all2;
    exports.exists2 = exists2;
    exports.mem = mem;
    exports.memq = memq;
    exports.find = find;
    exports.find_opt = find_opt;
    exports.filter = filter;
    exports.find_all = find_all;
    exports.partition = partition;
    exports.assoc = assoc;
    exports.assoc_opt = assoc_opt;
    exports.assq = assq;
    exports.assq_opt = assq_opt;
    exports.mem_assoc = mem_assoc;
    exports.mem_assq = mem_assq;
    exports.remove_assoc = remove_assoc;
    exports.remove_assq = remove_assq;
    exports.split = split;
    exports.combine = combine;
    exports.sort = sort;
    exports.stable_sort = stable_sort;
    exports.fast_sort = fast_sort;
    exports.sort_uniq = sort_uniq;
    exports.merge = merge;
  });

  // _build/default/src/CompatibilityCrap.bs.js
  var require_CompatibilityCrap_bs = __commonJS((exports) => {
    "use strict";
    var List = require_list();
    var Curry = require_curry();
    var Caml_option = require_caml_option();
    function $at(a, b) {
      return List.concat({
        hd: a,
        tl: {
          hd: b,
          tl: 0
        }
      });
    }
    function print_newline(param) {
      console.log("\n");
    }
    function bind(a, f) {
      if (a !== void 0) {
        return Curry._1(f, Caml_option.valFromOption(a));
      }
    }
    function map(f, a) {
      if (a !== void 0) {
        return Caml_option.some(Curry._1(f, Caml_option.valFromOption(a)));
      }
    }
    var $$Option = {
      bind,
      map
    };
    function empty(param) {
      return 0;
    }
    function $$return(x, param) {
      return {
        _0: x,
        _1: empty
      };
    }
    function cons(x, next, param) {
      return {
        _0: x,
        _1: next
      };
    }
    function append(seq1, seq2, param) {
      var match = Curry._1(seq1, void 0);
      if (!match) {
        return Curry._1(seq2, void 0);
      }
      var next = match._1;
      return {
        _0: match._0,
        _1: function(param2) {
          return append(next, seq2, param2);
        }
      };
    }
    function flat_map(f, seq, param) {
      var match = Curry._1(seq, void 0);
      if (!match) {
        return 0;
      }
      var next = match._1;
      return append(Curry._1(f, match._0), function(param2) {
        return flat_map(f, next, param2);
      }, void 0);
    }
    function map$1(f, seq, param) {
      var match = Curry._1(seq, void 0);
      if (!match) {
        return 0;
      }
      var next = match._1;
      return {
        _0: Curry._1(f, match._0),
        _1: function(param2) {
          return map$1(f, next, param2);
        }
      };
    }
    function iter(f, seq) {
      var _seq = seq;
      while (true) {
        var seq$1 = _seq;
        var match = Curry._1(seq$1, void 0);
        if (!match) {
          return;
        }
        Curry._1(f, match._0);
        _seq = match._1;
        continue;
      }
      ;
    }
    var Seq = {
      empty,
      $$return,
      cons,
      append,
      flat_map,
      map: map$1,
      iter
    };
    function concat_map(f, l) {
      return List.concat(List.map(f, l));
    }
    function filter_map(f, _param) {
      while (true) {
        var param = _param;
        if (!param) {
          return 0;
        }
        var t = param.tl;
        var a = Curry._1(f, param.hd);
        if (a !== void 0) {
          return {
            hd: Caml_option.valFromOption(a),
            tl: filter_map(f, t)
          };
        }
        _param = t;
        continue;
      }
      ;
    }
    var List$1 = {
      length: List.length,
      compare_lengths: List.compare_lengths,
      compare_length_with: List.compare_length_with,
      cons: List.cons,
      hd: List.hd,
      tl: List.tl,
      nth: List.nth,
      nth_opt: List.nth_opt,
      rev: List.rev,
      init: List.init,
      append: List.append,
      rev_append: List.rev_append,
      concat: List.concat,
      flatten: List.flatten,
      equal: List.equal,
      compare: List.compare,
      iter: List.iter,
      iteri: List.iteri,
      map: List.map,
      mapi: List.mapi,
      rev_map: List.rev_map,
      fold_left_map: List.fold_left_map,
      fold_left: List.fold_left,
      fold_right: List.fold_right,
      iter2: List.iter2,
      map2: List.map2,
      rev_map2: List.rev_map2,
      fold_left2: List.fold_left2,
      fold_right2: List.fold_right2,
      for_all: List.for_all,
      exists: List.exists,
      for_all2: List.for_all2,
      exists2: List.exists2,
      mem: List.mem,
      memq: List.memq,
      find: List.find,
      find_opt: List.find_opt,
      find_map: List.find_map,
      filter: List.filter,
      find_all: List.find_all,
      filteri: List.filteri,
      partition: List.partition,
      partition_map: List.partition_map,
      assoc: List.assoc,
      assoc_opt: List.assoc_opt,
      assq: List.assq,
      assq_opt: List.assq_opt,
      mem_assoc: List.mem_assoc,
      mem_assq: List.mem_assq,
      remove_assoc: List.remove_assoc,
      remove_assq: List.remove_assq,
      split: List.split,
      combine: List.combine,
      sort: List.sort,
      stable_sort: List.stable_sort,
      fast_sort: List.fast_sort,
      sort_uniq: List.sort_uniq,
      merge: List.merge,
      to_seq: List.to_seq,
      of_seq: List.of_seq,
      concat_map,
      filter_map
    };
    function map$2(f, e) {
      if (e.TAG === 0) {
        return {
          TAG: 0,
          _0: Curry._1(f, e._0)
        };
      } else {
        return {
          TAG: 1,
          _0: e._0
        };
      }
    }
    function bind$1(res, f) {
      if (res.TAG === 0) {
        return Curry._1(f, res._0);
      } else {
        return {
          TAG: 1,
          _0: res._0
        };
      }
    }
    var Result = {
      map: map$2,
      bind: bind$1
    };
    exports.$at = $at;
    exports.print_newline = print_newline;
    exports.$$Option = $$Option;
    exports.Seq = Seq;
    exports.List = List$1;
    exports.Result = Result;
  });

  // _build/default/src/Prolog.bs.js
  var require_Prolog_bs = __commonJS((exports) => {
    "use strict";
    var Curry = require_curry();
    var $$String = require_string();
    var Caml_obj = require_caml_obj();
    var Caml_string = require_caml_string();
    var Caml_exceptions = require_caml_exceptions();
    var CamlinternalLazy = require_camlinternalLazy();
    var CompatibilityCrap = require_CompatibilityCrap_bs();
    var Caml_js_exceptions = require_caml_js_exceptions();
    function string_of_term(t) {
      if (typeof t === "string") {
        return "[" + (string_of_tblcontent(t) + "]");
      }
      var variant = t.NAME;
      if (variant === "Table") {
        return "[" + (string_of_tblcontent(t) + "]");
      }
      if (variant === "TableVar") {
        return t.VAL._0;
      }
      if (variant === "GeneralVar") {
        var s = t.VAL._0;
        if (Caml_string.get(s, 0) === 95) {
          return "_";
        } else {
          return s;
        }
      }
      var match = t.VAL;
      var s$1 = match[0];
      if (match[1]) {
        return s$1 + ("(" + ($$String.concat(", ", Curry._2(CompatibilityCrap.List.map, string_of_term, match[1])) + ")"));
      } else {
        return s$1;
      }
    }
    function string_of_tblcontent(param) {
      if (typeof param === "string") {
        return "";
      }
      var match = param.VAL;
      var tail = match[1];
      var t = match[0];
      if (typeof tail === "string") {
        return string_of_term(t);
      } else if (tail.NAME === "TableVar") {
        return string_of_term(t) + (" | " + tail.VAL._0);
      } else {
        return string_of_term(t) + (", " + string_of_tblcontent(tail));
      }
    }
    function string_of_clause(param) {
      var tl = param._1;
      return string_of_term(param._0) + ((Caml_obj.caml_equal(tl, 0) ? "" : " :-" + $$String.concat(",", Curry._2(CompatibilityCrap.List.map, function(t) {
        return "\n  " + string_of_term(t);
      }, tl))) + ".");
    }
    function string_of_program(cl) {
      return $$String.concat("\n\n", Curry._2(CompatibilityCrap.List.map, string_of_clause, cl));
    }
    function string_of_token(s) {
      if (typeof s !== "number") {
        return s._0;
      }
      switch (s) {
        case 0:
          return "(";
        case 1:
          return ")";
        case 2:
          return "[";
        case 3:
          return "]";
        case 4:
          return "|";
        case 5:
          return ",";
        case 6:
          return ".";
        case 7:
          return ":-";
        case 8:
          return "EOF";
      }
    }
    function string_of_tokenlist(tl) {
      return $$String.concat("; ", Curry._2(CompatibilityCrap.List.map, string_of_token, tl));
    }
    var TokenNotFound = /* @__PURE__ */ Caml_exceptions.create("Prolog.TokenNotFound");
    function parse_word(l) {
      if (!l) {
        return [
          0,
          l
        ];
      }
      var c = l.hd;
      if (c >= 91) {
        if (c >= 97) {
          if (c >= 123) {
            return [
              0,
              l
            ];
          }
        } else if (c !== 95) {
          return [
            0,
            l
          ];
        }
      } else if (c >= 58) {
        if (c < 65) {
          return [
            0,
            l
          ];
        }
      } else if (c < 48) {
        return [
          0,
          l
        ];
      }
      var match = parse_word(l.tl);
      return [
        {
          hd: c,
          tl: match[0]
        },
        match[1]
      ];
    }
    function string_of_charlist(cl) {
      return $$String.concat("", Curry._2(CompatibilityCrap.List.map, function(param) {
        return $$String.make(1, param);
      }, cl));
    }
    function tokenlist_of_charlist(_acc, _param) {
      while (true) {
        var param = _param;
        var acc = _acc;
        if (!param) {
          return Curry._1(CompatibilityCrap.List.rev, {
            hd: 8,
            tl: acc
          });
        }
        var low = param.hd;
        if (low < 91) {
          if (low < 32) {
            if (!(low === 10 || low === 9)) {
              throw {
                RE_EXN_ID: TokenNotFound,
                _1: low,
                Error: new Error()
              };
            }
            _param = param.tl;
            continue;
          }
          if (low >= 65) {
            var match = parse_word(param.tl);
            _param = match[1];
            _acc = {
              hd: {
                TAG: 1,
                _0: string_of_charlist({
                  hd: low,
                  tl: match[0]
                })
              },
              tl: acc
            };
            continue;
          }
          switch (low) {
            case 32:
              _param = param.tl;
              continue;
            case 40:
              _param = param.tl;
              _acc = {
                hd: 0,
                tl: acc
              };
              continue;
            case 41:
              _param = param.tl;
              _acc = {
                hd: 1,
                tl: acc
              };
              continue;
            case 44:
              _param = param.tl;
              _acc = {
                hd: 5,
                tl: acc
              };
              continue;
            case 46:
              _param = param.tl;
              _acc = {
                hd: 6,
                tl: acc
              };
              continue;
            case 58:
              var match$1 = param.tl;
              if (match$1) {
                if (match$1.hd !== 45) {
                  throw {
                    RE_EXN_ID: TokenNotFound,
                    _1: low,
                    Error: new Error()
                  };
                }
                _param = match$1.tl;
                _acc = {
                  hd: 7,
                  tl: acc
                };
                continue;
              }
              throw {
                RE_EXN_ID: TokenNotFound,
                _1: low,
                Error: new Error()
              };
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 42:
            case 43:
            case 45:
            case 47:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
            case 59:
            case 60:
            case 61:
            case 62:
            case 63:
            case 64:
              throw {
                RE_EXN_ID: TokenNotFound,
                _1: low,
                Error: new Error()
              };
          }
        } else {
          if (low >= 123) {
            if (low !== 124) {
              throw {
                RE_EXN_ID: TokenNotFound,
                _1: low,
                Error: new Error()
              };
            }
            _param = param.tl;
            _acc = {
              hd: 4,
              tl: acc
            };
            continue;
          }
          if (low >= 97) {
            var match$2 = parse_word(param.tl);
            _param = match$2[1];
            _acc = {
              hd: {
                TAG: 0,
                _0: string_of_charlist({
                  hd: low,
                  tl: match$2[0]
                })
              },
              tl: acc
            };
            continue;
          }
          switch (low) {
            case 91:
              _param = param.tl;
              _acc = {
                hd: 2,
                tl: acc
              };
              continue;
            case 93:
              _param = param.tl;
              _acc = {
                hd: 3,
                tl: acc
              };
              continue;
            case 95:
              _param = param.tl;
              _acc = {
                hd: {
                  TAG: 1,
                  _0: "_"
                },
                tl: acc
              };
              continue;
            case 92:
            case 94:
            case 96:
              throw {
                RE_EXN_ID: TokenNotFound,
                _1: low,
                Error: new Error()
              };
          }
        }
      }
      ;
    }
    function charlist_of_string(s) {
      return Curry._2(CompatibilityCrap.List.init, s.length, function(param) {
        return Caml_string.get(s, param);
      });
    }
    function tokenlist_of_string(s) {
      try {
        return {
          TAG: 0,
          _0: tokenlist_of_charlist(0, charlist_of_string(s))
        };
      } catch (raw_tok) {
        var tok = Caml_js_exceptions.internalToOCamlException(raw_tok);
        if (tok.RE_EXN_ID === TokenNotFound) {
          return {
            TAG: 1,
            _0: "this token is unknown : '" + ($$String.make(1, tok._1) + "'")
          };
        }
        throw tok;
      }
    }
    var $great$great$eq = CompatibilityCrap.Result.bind;
    function $star$tilde(p, q, cl) {
      return $great$great$eq(Curry._1(p, cl), function(param) {
        var a = param[0];
        return $great$great$eq(Curry._1(q, param[1]), function(param2) {
          return {
            TAG: 0,
            _0: [
              [
                a,
                param2[0]
              ],
              param2[1]
            ]
          };
        });
      });
    }
    function $star$great(p, f, cl) {
      return $great$great$eq(Curry._1(p, cl), function(param) {
        return {
          TAG: 0,
          _0: [
            Curry._1(f, param[0]),
            param[1]
          ]
        };
      });
    }
    function ignore_left(param) {
      return param[1];
    }
    function ignore_right(param) {
      return param[0];
    }
    function epsilon(tl) {
      return {
        TAG: 0,
        _0: [
          void 0,
          tl
        ]
      };
    }
    function parse_token(tk, param) {
      if (!param) {
        return {
          TAG: 1,
          _0: "Unable to parse token : " + string_of_token(tk)
        };
      }
      var t = param.hd;
      if (Caml_obj.caml_equal(t, tk)) {
        return {
          TAG: 0,
          _0: [
            t,
            param.tl
          ]
        };
      } else {
        return {
          TAG: 1,
          _0: "Unable to parse token : " + string_of_token(tk)
        };
      }
    }
    function look_ahead(tl, f) {
      if (tl) {
        return Curry._1(f, [
          tl.hd,
          tl.tl
        ]);
      } else {
        return {
          TAG: 1,
          _0: "Unexpected end of token stream."
        };
      }
    }
    function table_of_termlist(tail, param) {
      if (param) {
        return {
          NAME: "Table",
          VAL: [
            param.hd,
            table_of_termlist(tail, param.tl)
          ]
        };
      } else {
        return tail;
      }
    }
    var counter_unnamed_ids = {
      contents: 0
    };
    function new_id(param) {
      counter_unnamed_ids.contents = counter_unnamed_ids.contents + 1 | 0;
      return {
        _0: "_" + String(counter_unnamed_ids.contents),
        _1: 0
      };
    }
    function parse_term(tl) {
      return look_ahead(tl, function(param) {
        var s = param[0];
        if (typeof s === "number") {
          if (s === 2) {
            return $star$great(parse_table_without_left_bracket, function(tbl) {
              return tbl;
            }, param[1]);
          } else {
            return {
              TAG: 1,
              _0: "Not a valid term : " + string_of_token(s)
            };
          }
        }
        if (s.TAG === 0) {
          var s$1 = s._0;
          return $star$great(parse_predicate_without_string, function(term_list) {
            return {
              NAME: "Predicate",
              VAL: [
                s$1,
                term_list
              ]
            };
          }, param[1]);
        }
        var s$2 = s._0;
        return {
          TAG: 0,
          _0: [
            {
              NAME: "GeneralVar",
              VAL: s$2 === "_" ? new_id(void 0) : {
                _0: s$2,
                _1: 0
              }
            },
            param[1]
          ]
        };
      });
    }
    function parse_predicate_without_string(tl) {
      return look_ahead(tl, function(param) {
        var match = param[0];
        if (typeof match === "number" && !match) {
          return $star$great(function(param2) {
            return $star$tilde(parse_term_list, function(param3) {
              return parse_token(1, param3);
            }, param2);
          }, ignore_right, param[1]);
        } else {
          return {
            TAG: 0,
            _0: [
              0,
              tl
            ]
          };
        }
      });
    }
    function parse_term_list(tl) {
      return $star$great(function(param) {
        return $star$tilde(parse_term, parse_term_list_without_first_term, param);
      }, function(param) {
        return {
          hd: param[0],
          tl: param[1]
        };
      }, tl);
    }
    function parse_term_list_without_first_term(tl) {
      return look_ahead(tl, function(param) {
        if (param[0] === 5) {
          return $star$great(function(param2) {
            return $star$tilde(parse_term, parse_term_list_without_first_term, param2);
          }, function(param2) {
            return {
              hd: param2[0],
              tl: param2[1]
            };
          }, param[1]);
        } else {
          return {
            TAG: 0,
            _0: [
              0,
              tl
            ]
          };
        }
      });
    }
    function parse_table_without_left_bracket(tl) {
      return look_ahead(tl, function(param) {
        if (param[0] === 3) {
          return {
            TAG: 0,
            _0: [
              "EmptyTable",
              param[1]
            ]
          };
        } else {
          return $star$great(function(param2) {
            return $star$tilde(parse_term_list, parse_table_without_term_list, param2);
          }, function(param2) {
            return table_of_termlist(param2[1], param2[0]);
          }, tl);
        }
      });
    }
    function parse_table_without_term_list(tl) {
      return look_ahead(tl, function(param) {
        var tok = param[0];
        if (typeof tok === "number") {
          if (tok !== 3) {
            if (tok !== 4) {
              return {
                TAG: 1,
                _0: "Invalid right part of the table : " + string_of_token(tok)
              };
            } else {
              return parse_table_queue(param[1]);
            }
          } else {
            return {
              TAG: 0,
              _0: [
                "EmptyTable",
                param[1]
              ]
            };
          }
        } else {
          return {
            TAG: 1,
            _0: "Invalid right part of the table : " + string_of_token(tok)
          };
        }
      });
    }
    function parse_table_queue(tl) {
      return look_ahead(tl, function(param) {
        var s = param[0];
        if (typeof s === "number") {
          if (s === 2) {
            return $star$great(function(param2) {
              return $star$tilde(parse_table_without_left_bracket, function(param3) {
                return parse_token(3, param3);
              }, param2);
            }, ignore_right, param[1]);
          } else {
            return {
              TAG: 1,
              _0: "Invalid table queue"
            };
          }
        }
        if (s.TAG !== 1) {
          return {
            TAG: 1,
            _0: "Invalid table queue"
          };
        }
        var s$1 = s._0;
        return $star$great(function(param2) {
          return parse_token(3, param2);
        }, function(param2) {
          return {
            NAME: "TableVar",
            VAL: {
              _0: s$1,
              _1: 0
            }
          };
        }, param[1]);
      });
    }
    function parse_right_clause(tl) {
      return look_ahead(tl, function(param) {
        if (param[0] === 6) {
          return {
            TAG: 0,
            _0: [
              0,
              param[1]
            ]
          };
        } else {
          return $star$great(function(param2) {
            return $star$tilde(function(param3) {
              return $star$great(function(param4) {
                return $star$tilde(function(param5) {
                  return parse_token(7, param5);
                }, parse_term_list, param4);
              }, ignore_left, param3);
            }, function(param3) {
              return parse_token(6, param3);
            }, param2);
          }, ignore_right, tl);
        }
      });
    }
    function parse_clause(tl) {
      return $star$great(function(param) {
        return $star$tilde(parse_term, parse_right_clause, param);
      }, function(param) {
        return {
          _0: param[0],
          _1: param[1]
        };
      }, tl);
    }
    function parse_program(tl) {
      return look_ahead(tl, function(param) {
        var match = param[0];
        if (typeof match === "number" && match >= 8) {
          return {
            TAG: 0,
            _0: [
              0,
              0
            ]
          };
        }
        return $star$great(function(param2) {
          return $star$tilde(parse_clause, parse_program, param2);
        }, function(param2) {
          return {
            hd: param2[0],
            tl: param2[1]
          };
        }, tl);
      });
    }
    function parse_request(tl) {
      return $star$great(function(param) {
        return $star$tilde(parse_term_list, function(param2) {
          return parse_token(8, param2);
        }, param);
      }, ignore_right, tl);
    }
    function map_vars(f, g) {
      var mapterm = function(tbl) {
        if (typeof tbl === "string") {
          return maptable(tbl);
        }
        var variant = tbl.NAME;
        if (variant === "TableVar" || variant === "Table") {
          return maptable(tbl);
        }
        if (variant === "GeneralVar") {
          return Curry._1(f, tbl);
        }
        var match = tbl.VAL;
        return {
          NAME: "Predicate",
          VAL: [
            match[0],
            Curry._2(CompatibilityCrap.List.map, mapterm, match[1])
          ]
        };
      };
      var maptable = function(v) {
        if (typeof v === "string") {
          return "EmptyTable";
        }
        if (v.NAME === "TableVar") {
          return Curry._1(g, v);
        }
        var match = v.VAL;
        return {
          NAME: "Table",
          VAL: [
            mapterm(match[0]),
            maptable(match[1])
          ]
        };
      };
      return mapterm;
    }
    function id(x) {
      return x;
    }
    function apply_subst(param) {
      if (param.TAG === 0) {
        var t = param._1;
        var $$var = param._0;
        return map_vars(function(v) {
          if (Caml_obj.caml_equal($$var, v)) {
            return t;
          } else {
            return v;
          }
        }, id);
      }
      var t$1 = param._1;
      var $$var$1 = param._0;
      return map_vars(id, function(v) {
        if (Caml_obj.caml_equal($$var$1, v)) {
          return t$1;
        } else {
          return v;
        }
      });
    }
    function apply(s, term) {
      return Curry._3(CompatibilityCrap.List.fold_right, apply_subst, s, term);
    }
    function unify(_t1, _t2) {
      while (true) {
        var t2 = _t2;
        var t1 = _t1;
        var f = function(ta, tb, s1) {
          return CompatibilityCrap.$$Option.bind(unify(apply(s1, ta), apply(s1, tb)), function(s2) {
            return CompatibilityCrap.$at(s2, s1);
          });
        };
        var exit = 0;
        var exit$1 = 0;
        if (typeof t1 === "string") {
          if (typeof t2 === "string") {
            if (t2 === "EmptyTable") {
              return 0;
            }
            exit$1 = 3;
          } else {
            if (t2.NAME === "Table") {
              return;
            }
            exit$1 = 3;
          }
        } else {
          var variant = t1.NAME;
          if (variant === "Table") {
            var match = t1.VAL;
            var t1$1 = match[1];
            if (typeof t2 === "string") {
              if (t2 === "EmptyTable") {
                return;
              }
              exit$1 = 3;
            } else {
              if (t2.NAME === "Table") {
                var match$1 = t2.VAL;
                var t2$1 = match$1[1];
                return CompatibilityCrap.$$Option.bind(unify(match[0], match$1[0]), function(t1$12, t2$12) {
                  return function(param) {
                    return f(t1$12, t2$12, param);
                  };
                }(t1$1, t2$1));
              }
              exit$1 = 3;
            }
          } else if (variant === "TableVar") {
            if (typeof t2 === "string") {
              if (t2 === "EmptyTable") {
                return {
                  hd: {
                    TAG: 1,
                    _0: t1,
                    _1: t2
                  },
                  tl: 0
                };
              }
              exit$1 = 3;
            } else {
              var variant$1 = t2.NAME;
              if (variant$1 === "TableVar" || variant$1 === "Table") {
                return {
                  hd: {
                    TAG: 1,
                    _0: t1,
                    _1: t2
                  },
                  tl: 0
                };
              }
              exit$1 = 3;
            }
          } else {
            if (variant === "GeneralVar") {
              return {
                hd: {
                  TAG: 0,
                  _0: t1,
                  _1: t2
                },
                tl: 0
              };
            }
            var match$2 = t1.VAL;
            var la = match$2[1];
            if (typeof t2 === "string") {
              if (t2 === "EmptyTable") {
                return;
              }
              exit$1 = 3;
            } else {
              var variant$2 = t2.NAME;
              if (variant$2 === "Predicate") {
                var match$3 = t2.VAL;
                if (match$2[0] !== match$3[0]) {
                  return;
                }
                var lb = match$3[1];
                if (Curry._1(CompatibilityCrap.List.length, la) !== Curry._1(CompatibilityCrap.List.length, lb)) {
                  return;
                } else {
                  return Curry._4(CompatibilityCrap.List.fold_left2, function(opt_s, ta, tb) {
                    return CompatibilityCrap.$$Option.bind(opt_s, function(param) {
                      return f(ta, tb, param);
                    });
                  }, 0, la, lb);
                }
              }
              if (variant$2 === "TableVar" || variant$2 === "Table") {
                return;
              }
              exit$1 = 3;
            }
          }
        }
        if (exit$1 === 3) {
          if (typeof t2 === "string") {
            exit = 2;
          } else {
            if (t2.NAME === "GeneralVar") {
              _t2 = t1;
              _t1 = t2;
              continue;
            }
            exit = 2;
          }
        }
        if (exit === 2) {
          if (typeof t1 === "string") {
            if (t1 !== "EmptyTable") {
              return;
            }
          } else if (t1.NAME !== "Table") {
            return;
          }
        }
        if (typeof t2 === "string") {
          return;
        }
        if (t2.NAME !== "TableVar") {
          return;
        }
        _t2 = t1;
        _t1 = t2;
        continue;
      }
      ;
    }
    function variables_in_term(param) {
      if (typeof param === "string") {
        return 0;
      }
      var variant = param.NAME;
      if (variant !== "Table") {
        if (variant === "TableVar") {
          return {
            hd: {
              NAME: "TableVar",
              VAL: param.VAL
            },
            tl: 0
          };
        } else if (variant === "GeneralVar") {
          return {
            hd: {
              NAME: "GeneralVar",
              VAL: param.VAL
            },
            tl: 0
          };
        } else {
          return Curry._1(CompatibilityCrap.List.concat, Curry._2(CompatibilityCrap.List.map, variables_in_term, param.VAL[1]));
        }
      }
      var match = param.VAL;
      return CompatibilityCrap.$at(variables_in_term(match[0]), variables_in_term(match[1]));
    }
    function variables_in_clause(param) {
      return CompatibilityCrap.List.concat_map(variables_in_term, {
        hd: param._0,
        tl: param._1
      });
    }
    function variables_in_request(r) {
      return CompatibilityCrap.List.concat_map(variables_in_term, r);
    }
    function replace_tvars_in_term(tvars) {
      return map_vars(function(param) {
        var id2 = param.VAL;
        if (Curry._2(CompatibilityCrap.List.mem, {
          NAME: "TableVar",
          VAL: id2
        }, tvars)) {
          return {
            NAME: "TableVar",
            VAL: id2
          };
        } else {
          return {
            NAME: "GeneralVar",
            VAL: id2
          };
        }
      }, function(x) {
        return x;
      });
    }
    function type_inference_clause(c) {
      var f = replace_tvars_in_term(variables_in_clause(c));
      return {
        _0: Curry._1(f, c._0),
        _1: Curry._2(CompatibilityCrap.List.map, f, c._1)
      };
    }
    function type_inference_request(r) {
      var f = replace_tvars_in_term(CompatibilityCrap.List.concat_map(variables_in_term, r));
      return Curry._2(CompatibilityCrap.List.map, f, r);
    }
    var type_inference_program = Curry._1(CompatibilityCrap.List.map, type_inference_clause);
    function rename(n, param) {
      var f = map_vars(function(param2) {
        return {
          NAME: "GeneralVar",
          VAL: {
            _0: param2.VAL._0,
            _1: n
          }
        };
      }, function(param2) {
        return {
          NAME: "TableVar",
          VAL: {
            _0: param2.VAL._0,
            _1: n
          }
        };
      });
      return {
        _0: Curry._1(f, param._0),
        _1: Curry._2(CompatibilityCrap.List.map, f, param._1)
      };
    }
    function sld_tree(world, request, substitution, n) {
      if (!request) {
        return {
          TAG: 0,
          _0: substitution
        };
      }
      var other_request_terms = request.tl;
      var head_request_term = request.hd;
      var filter_clause = function(c) {
        var match = rename(n, c);
        var right_member = match._1;
        var new_tree = function(unifier) {
          return {
            LAZY_DONE: false,
            VAL: function() {
              return sld_tree(world, Curry._2(CompatibilityCrap.List.map, function(param) {
                return apply(unifier, param);
              }, CompatibilityCrap.$at(right_member, other_request_terms)), CompatibilityCrap.$at(unifier, substitution), n + 1 | 0);
            }
          };
        };
        return CompatibilityCrap.$$Option.map(new_tree, unify(head_request_term, match._0));
      };
      return {
        TAG: 1,
        _0: CompatibilityCrap.List.filter_map(filter_clause, world)
      };
    }
    function list_to_seq(l) {
      return Curry._3(CompatibilityCrap.List.fold_right, function(x, s, param) {
        return {
          _0: x,
          _1: s
        };
      }, l, CompatibilityCrap.Seq.empty);
    }
    function to_seq(str) {
      if (str.TAG === 0) {
        var partial_arg = str._0;
        return function(param) {
          return CompatibilityCrap.Seq.$$return(partial_arg, param);
        };
      }
      var partial_arg$1 = list_to_seq(str._0);
      return function(param) {
        return CompatibilityCrap.Seq.flat_map(function(par) {
          return to_seq(CamlinternalLazy.force(par));
        }, partial_arg$1, param);
      };
    }
    function solutions(tree, vars) {
      var partial_arg = to_seq(tree);
      return function(param) {
        return CompatibilityCrap.Seq.map(function(substitution) {
          return [
            vars,
            Curry._2(CompatibilityCrap.List.map, function(param2) {
              return apply(substitution, param2);
            }, vars)
          ];
        }, partial_arg, param);
      };
    }
    function program_of_string(s) {
      return $great$great$eq($great$great$eq(tokenlist_of_string(s), parse_program), function(param) {
        return {
          TAG: 0,
          _0: Curry._1(type_inference_program, param[0])
        };
      });
    }
    function request_of_string(s) {
      return $great$great$eq($great$great$eq(tokenlist_of_string(s), parse_request), function(param) {
        return {
          TAG: 0,
          _0: type_inference_request(param[0])
        };
      });
    }
    function string_sequence_of(parsed_program, parsed_request) {
      var vars = Curry._2(CompatibilityCrap.List.sort_uniq, Caml_obj.caml_compare, CompatibilityCrap.List.concat_map(variables_in_term, parsed_request));
      var sol = solutions(sld_tree(parsed_program, parsed_request, 0, 1), vars);
      var f = function(param) {
        if (Caml_obj.caml_equal(vars, 0)) {
          return "This is true.";
        } else {
          return "A solution is : " + $$String.concat(", ", Curry._3(CompatibilityCrap.List.map2, function(v, t) {
            return string_of_term(v) + (" = " + string_of_term(t));
          }, param[0], param[1]));
        }
      };
      return function(param) {
        return CompatibilityCrap.Seq.map(f, sol, param);
      };
    }
    function basic_interpreter(program_string, request_string) {
      var s = program_of_string(program_string);
      if (s.TAG === 0) {
        var s$1 = request_of_string(request_string);
        if (s$1.TAG === 0) {
          var string_seq = string_sequence_of(s._0, s$1._0);
          var match = Curry._1(string_seq, void 0);
          if (match) {
            console.log(match._0);
            CompatibilityCrap.Seq.iter(function(prim) {
              console.log(prim);
            }, match._1);
          } else {
            console.log("No solution found.");
          }
        } else {
          console.log("Unable to parse request :");
          console.log(s$1._0);
        }
        return CompatibilityCrap.print_newline(void 0);
      }
      console.log("Unable to parse program :");
      console.log(s._0);
    }
    exports.string_of_term = string_of_term;
    exports.string_of_tblcontent = string_of_tblcontent;
    exports.string_of_clause = string_of_clause;
    exports.string_of_program = string_of_program;
    exports.string_of_token = string_of_token;
    exports.string_of_tokenlist = string_of_tokenlist;
    exports.TokenNotFound = TokenNotFound;
    exports.parse_word = parse_word;
    exports.string_of_charlist = string_of_charlist;
    exports.tokenlist_of_charlist = tokenlist_of_charlist;
    exports.charlist_of_string = charlist_of_string;
    exports.tokenlist_of_string = tokenlist_of_string;
    exports.$great$great$eq = $great$great$eq;
    exports.$star$tilde = $star$tilde;
    exports.$star$great = $star$great;
    exports.ignore_left = ignore_left;
    exports.ignore_right = ignore_right;
    exports.epsilon = epsilon;
    exports.parse_token = parse_token;
    exports.look_ahead = look_ahead;
    exports.table_of_termlist = table_of_termlist;
    exports.new_id = new_id;
    exports.parse_term = parse_term;
    exports.parse_predicate_without_string = parse_predicate_without_string;
    exports.parse_term_list = parse_term_list;
    exports.parse_term_list_without_first_term = parse_term_list_without_first_term;
    exports.parse_table_without_left_bracket = parse_table_without_left_bracket;
    exports.parse_table_without_term_list = parse_table_without_term_list;
    exports.parse_table_queue = parse_table_queue;
    exports.parse_right_clause = parse_right_clause;
    exports.parse_clause = parse_clause;
    exports.parse_program = parse_program;
    exports.parse_request = parse_request;
    exports.map_vars = map_vars;
    exports.apply_subst = apply_subst;
    exports.apply = apply;
    exports.unify = unify;
    exports.variables_in_term = variables_in_term;
    exports.variables_in_clause = variables_in_clause;
    exports.variables_in_request = variables_in_request;
    exports.replace_tvars_in_term = replace_tvars_in_term;
    exports.type_inference_clause = type_inference_clause;
    exports.type_inference_request = type_inference_request;
    exports.type_inference_program = type_inference_program;
    exports.rename = rename;
    exports.sld_tree = sld_tree;
    exports.list_to_seq = list_to_seq;
    exports.to_seq = to_seq;
    exports.solutions = solutions;
    exports.program_of_string = program_of_string;
    exports.request_of_string = request_of_string;
    exports.string_sequence_of = string_sequence_of;
    exports.basic_interpreter = basic_interpreter;
  });

  // _build/default/src/Examples.bs.js
  var require_Examples_bs = __commonJS((exports) => {
    "use strict";
    var zebra_code = "member(X, [X | Xs]).\nmember(X, [Y | Ys]) :- member(X, Ys).\nisright(L, R, [L, R | T]).\nisright(L, R, [H | T]) :- isright(L, R, T).\nnextto(A, B, X) :- isright(A, B, X).\nnextto(A, B, X) :- isright(B, A, X).\nequal(X, X).\nzebra(H, W, Z):-\nequal(H, [[norwegian, _, _, _, _], _, [_, _, _, milk, _], _, _]),\nmember([englishman, _, _, _, red], H),\nmember([spaniard, dog, _, _, _], H),\nmember([_, _, _, coffee, green], H),\nmember([ukrainian, _, _, tea, _], H),\nmember([_, snails, winston, _, _], H),\nmember([_, _, kools, _, yellow], H),\nmember([_, _, luckystrike, orangejuice, _], H),\nmember([japanese, _, parliaments, _, _], H),\nnextto([norwegian, _, _, _, _], [_, _, _, _, blue], H),\nisright([_, _, _, _, ivory], [_, _, _, _, green], H),\nnextto([_, _, chesterfields, _, _], [_, fox, _, _, _], H),\nnextto([_, _, kools, _, _], [_, horse, _, _, _], H),\nmember([W, _, _, water, _], H),\nmember([Z, zebra, _, _, _], H).\n";
    var zebra_request = "zebra(Houses, WaterDrinker, ZebraOwner)";
    exports.zebra_code = zebra_code;
    exports.zebra_request = zebra_request;
  });

  // node_modules/codejar/codejar.js
  var codejar_exports = {};
  __export(codejar_exports, {
    CodeJar: () => CodeJar
  });
  function CodeJar(editor, highlight, opt = {}) {
    const options = Object.assign({tab: "	", indentOn: /{$/, spellcheck: false, catchTab: true, preserveIdent: true, addClosing: true, history: true, window: globalWindow}, opt);
    const window2 = options.window;
    const document2 = window2.document;
    let listeners = [];
    let history = [];
    let at = -1;
    let focus = false;
    let callback;
    let prev;
    let isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    editor.setAttribute("contentEditable", isFirefox ? "true" : "plaintext-only");
    editor.setAttribute("spellcheck", options.spellcheck ? "true" : "false");
    editor.style.outline = "none";
    editor.style.overflowWrap = "break-word";
    editor.style.overflowY = "auto";
    editor.style.resize = "vertical";
    editor.style.whiteSpace = "pre-wrap";
    highlight(editor);
    const debounceHighlight = debounce(() => {
      const pos = save();
      highlight(editor, pos);
      restore(pos);
    }, 30);
    let recording = false;
    const shouldRecord = (event) => {
      return !isUndo(event) && !isRedo(event) && event.key !== "Meta" && event.key !== "Control" && event.key !== "Alt" && !event.key.startsWith("Arrow");
    };
    const debounceRecordHistory = debounce((event) => {
      if (shouldRecord(event)) {
        recordHistory();
        recording = false;
      }
    }, 300);
    const on = (type, fn) => {
      listeners.push([type, fn]);
      editor.addEventListener(type, fn);
    };
    on("keydown", (event) => {
      if (event.defaultPrevented)
        return;
      prev = toString();
      if (options.preserveIdent)
        handleNewLine(event);
      else
        firefoxNewLineFix(event);
      if (options.catchTab)
        handleTabCharacters(event);
      if (options.addClosing)
        handleSelfClosingCharacters(event);
      if (options.history) {
        handleUndoRedo(event);
        if (shouldRecord(event) && !recording) {
          recordHistory();
          recording = true;
        }
      }
    });
    on("keyup", (event) => {
      if (event.defaultPrevented)
        return;
      if (event.isComposing)
        return;
      if (prev !== toString())
        debounceHighlight();
      debounceRecordHistory(event);
      if (callback)
        callback(toString());
    });
    on("focus", (_event) => {
      focus = true;
    });
    on("blur", (_event) => {
      focus = false;
    });
    on("paste", (event) => {
      recordHistory();
      handlePaste(event);
      recordHistory();
      if (callback)
        callback(toString());
    });
    function save() {
      const s = getSelection();
      const pos = {start: 0, end: 0, dir: void 0};
      visit(editor, (el) => {
        if (el === s.anchorNode && el === s.focusNode) {
          pos.start += s.anchorOffset;
          pos.end += s.focusOffset;
          pos.dir = s.anchorOffset <= s.focusOffset ? "->" : "<-";
          return "stop";
        }
        if (el === s.anchorNode) {
          pos.start += s.anchorOffset;
          if (!pos.dir) {
            pos.dir = "->";
          } else {
            return "stop";
          }
        } else if (el === s.focusNode) {
          pos.end += s.focusOffset;
          if (!pos.dir) {
            pos.dir = "<-";
          } else {
            return "stop";
          }
        }
        if (el.nodeType === Node.TEXT_NODE) {
          if (pos.dir != "->")
            pos.start += el.nodeValue.length;
          if (pos.dir != "<-")
            pos.end += el.nodeValue.length;
        }
      });
      return pos;
    }
    function restore(pos) {
      const s = getSelection();
      let startNode, startOffset = 0;
      let endNode, endOffset = 0;
      if (!pos.dir)
        pos.dir = "->";
      if (pos.start < 0)
        pos.start = 0;
      if (pos.end < 0)
        pos.end = 0;
      if (pos.dir == "<-") {
        const {start, end} = pos;
        pos.start = end;
        pos.end = start;
      }
      let current = 0;
      visit(editor, (el) => {
        if (el.nodeType !== Node.TEXT_NODE)
          return;
        const len = (el.nodeValue || "").length;
        if (current + len >= pos.start) {
          if (!startNode) {
            startNode = el;
            startOffset = pos.start - current;
          }
          if (current + len >= pos.end) {
            endNode = el;
            endOffset = pos.end - current;
            return "stop";
          }
        }
        current += len;
      });
      if (!startNode)
        startNode = editor;
      if (!endNode)
        endNode = editor;
      if (pos.dir == "<-") {
        [startNode, startOffset, endNode, endOffset] = [endNode, endOffset, startNode, startOffset];
      }
      s.setBaseAndExtent(startNode, startOffset, endNode, endOffset);
    }
    function beforeCursor() {
      const s = getSelection();
      const r0 = s.getRangeAt(0);
      const r = document2.createRange();
      r.selectNodeContents(editor);
      r.setEnd(r0.startContainer, r0.startOffset);
      return r.toString();
    }
    function afterCursor() {
      const s = getSelection();
      const r0 = s.getRangeAt(0);
      const r = document2.createRange();
      r.selectNodeContents(editor);
      r.setStart(r0.endContainer, r0.endOffset);
      return r.toString();
    }
    function handleNewLine(event) {
      if (event.key === "Enter") {
        const before = beforeCursor();
        const after = afterCursor();
        let [padding] = findPadding(before);
        let newLinePadding = padding;
        if (options.indentOn.test(before)) {
          newLinePadding += options.tab;
        }
        if (newLinePadding.length > 0) {
          preventDefault(event);
          event.stopPropagation();
          insert("\n" + newLinePadding);
        } else {
          firefoxNewLineFix(event);
        }
        if (newLinePadding !== padding && after[0] === "}") {
          const pos = save();
          insert("\n" + padding);
          restore(pos);
        }
      }
    }
    function firefoxNewLineFix(event) {
      if (isFirefox && event.key === "Enter") {
        preventDefault(event);
        event.stopPropagation();
        if (afterCursor() == "") {
          insert("\n ");
          const pos = save();
          pos.start = --pos.end;
          restore(pos);
        } else {
          insert("\n");
        }
      }
    }
    function handleSelfClosingCharacters(event) {
      const open = `([{'"`;
      const close = `)]}'"`;
      const codeAfter = afterCursor();
      const codeBefore = beforeCursor();
      const escapeCharacter = codeBefore.substr(codeBefore.length - 1) === "\\";
      const charAfter = codeAfter.substr(0, 1);
      if (close.includes(event.key) && !escapeCharacter && charAfter === event.key) {
        const pos = save();
        preventDefault(event);
        pos.start = ++pos.end;
        restore(pos);
      } else if (open.includes(event.key) && !escapeCharacter && (`"'`.includes(event.key) || ["", " ", "\n"].includes(charAfter))) {
        preventDefault(event);
        const pos = save();
        const wrapText = pos.start == pos.end ? "" : getSelection().toString();
        const text = event.key + wrapText + close[open.indexOf(event.key)];
        insert(text);
        pos.start++;
        pos.end++;
        restore(pos);
      }
    }
    function handleTabCharacters(event) {
      if (event.key === "Tab") {
        preventDefault(event);
        if (event.shiftKey) {
          const before = beforeCursor();
          let [padding, start] = findPadding(before);
          if (padding.length > 0) {
            const pos = save();
            const len = Math.min(options.tab.length, padding.length);
            restore({start, end: start + len});
            document2.execCommand("delete");
            pos.start -= len;
            pos.end -= len;
            restore(pos);
          }
        } else {
          insert(options.tab);
        }
      }
    }
    function handleUndoRedo(event) {
      if (isUndo(event)) {
        preventDefault(event);
        at--;
        const record = history[at];
        if (record) {
          editor.innerHTML = record.html;
          restore(record.pos);
        }
        if (at < 0)
          at = 0;
      }
      if (isRedo(event)) {
        preventDefault(event);
        at++;
        const record = history[at];
        if (record) {
          editor.innerHTML = record.html;
          restore(record.pos);
        }
        if (at >= history.length)
          at--;
      }
    }
    function recordHistory() {
      if (!focus)
        return;
      const html = editor.innerHTML;
      const pos = save();
      const lastRecord = history[at];
      if (lastRecord) {
        if (lastRecord.html === html && lastRecord.pos.start === pos.start && lastRecord.pos.end === pos.end)
          return;
      }
      at++;
      history[at] = {html, pos};
      history.splice(at + 1);
      const maxHistory = 300;
      if (at > maxHistory) {
        at = maxHistory;
        history.splice(0, 1);
      }
    }
    function handlePaste(event) {
      preventDefault(event);
      const text = (event.originalEvent || event).clipboardData.getData("text/plain").replace(/\r/g, "");
      const pos = save();
      insert(text);
      highlight(editor);
      restore({start: pos.start + text.length, end: pos.start + text.length});
    }
    function visit(editor2, visitor) {
      const queue = [];
      if (editor2.firstChild)
        queue.push(editor2.firstChild);
      let el = queue.pop();
      while (el) {
        if (visitor(el) === "stop")
          break;
        if (el.nextSibling)
          queue.push(el.nextSibling);
        if (el.firstChild)
          queue.push(el.firstChild);
        el = queue.pop();
      }
    }
    function isCtrl(event) {
      return event.metaKey || event.ctrlKey;
    }
    function isUndo(event) {
      return isCtrl(event) && !event.shiftKey && event.key === "z";
    }
    function isRedo(event) {
      return isCtrl(event) && event.shiftKey && event.key === "z";
    }
    function insert(text) {
      text = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      document2.execCommand("insertHTML", false, text);
    }
    function debounce(cb, wait) {
      let timeout = 0;
      return (...args) => {
        clearTimeout(timeout);
        timeout = window2.setTimeout(() => cb(...args), wait);
      };
    }
    function findPadding(text) {
      let i = text.length - 1;
      while (i >= 0 && text[i] !== "\n")
        i--;
      i++;
      let j = i;
      while (j < text.length && /[ \t]/.test(text[j]))
        j++;
      return [text.substring(i, j) || "", i, j];
    }
    function toString() {
      return editor.textContent || "";
    }
    function preventDefault(event) {
      event.preventDefault();
    }
    function getSelection() {
      var _a;
      if (((_a = editor.parentNode) === null || _a === void 0 ? void 0 : _a.nodeType) == Node.DOCUMENT_FRAGMENT_NODE) {
        return editor.parentNode.getSelection();
      }
      return window2.getSelection();
    }
    return {
      updateOptions(options2) {
        options2 = Object.assign(Object.assign({}, options2), options2);
      },
      updateCode(code) {
        editor.textContent = code;
        highlight(editor);
      },
      onUpdate(cb) {
        callback = cb;
      },
      toString,
      save,
      restore,
      recordHistory,
      destroy() {
        for (let [type, fn] of listeners) {
          editor.removeEventListener(type, fn);
        }
      }
    };
  }
  var globalWindow;
  var init_codejar = __esm(() => {
    globalWindow = window;
  });

  // _build/default/src/Client.bs.js
  var require_Client_bs = __commonJS((exports) => {
    "use strict";
    var Curry = require_curry();
    var Js_exn = require_js_exn();
    var Prolog = require_Prolog_bs();
    var Examples = require_Examples_bs();
    var Caml_option = require_caml_option();
    var CompatibilityCrap = require_CompatibilityCrap_bs();
    var CodejarJs = (init_codejar(), codejar_exports);
    var CodeJar2 = {};
    var a = document.querySelector("body");
    var body = a == null ? Js_exn.raiseError("No <body> found !") : a;
    function apply(f, a2) {
      if (a2 !== void 0) {
        return Curry._1(f, Caml_option.valFromOption(a2));
      }
    }
    function get_value(c) {
      return c.value;
    }
    function set_value(c, s) {
      c.value = s;
    }
    function create_element(text, id, classname, father, attributes, onclick, node_type) {
      var elt = document.createElement(node_type);
      apply(function(param) {
        elt.innerText = param;
      }, text);
      apply(function(param) {
        elt.id = param;
      }, id);
      apply(function(param) {
        elt.className = param;
      }, classname);
      apply(function(param) {
        param.appendChild(elt);
      }, father);
      apply(function(param) {
        elt.onclick = param;
      }, onclick);
      apply(Curry._1(CompatibilityCrap.List.iter, function(param) {
        elt.setAttribute(param[0], param[1]);
      }), attributes);
      return elt;
    }
    var grid_container = create_element(void 0, void 0, "grid-container", Caml_option.some(body), void 0, void 0, "div");
    var left = create_element(void 0, void 0, "grid-item left", Caml_option.some(grid_container), void 0, void 0, "div");
    var right_up = create_element(void 0, void 0, "grid-item rightup", Caml_option.some(grid_container), void 0, void 0, "div");
    var right_middle = create_element(void 0, void 0, "grid-item rightmiddle", Caml_option.some(grid_container), void 0, void 0, "div");
    var right_down = create_element(void 0, void 0, "grid-item rightdown", Caml_option.some(grid_container), void 0, void 0, "div");
    var input_code_div = create_element(void 0, void 0, "jar", Caml_option.some(left), void 0, void 0, "div");
    var input_request_div = create_element(void 0, void 0, "jar", Caml_option.some(right_middle), void 0, void 0, "div");
    var $$console = create_element(void 0, void 0, "console-output", Caml_option.some(right_up), {
      hd: [
        "readonly",
        "true"
      ],
      tl: 0
    }, void 0, "textarea");
    function highlight(editor) {
      editor.innerHTML = editor.innerText.replace(/(\b[a-z]\w*)/g, '<font color="#48c9b0">$1</font>').replace(/(\b[A-Z]\w*|\b_)/g, '<font color="#ff51b3">$1</font>').replace(/(,)/g, '<font color="#fffffff">$1</font>').replace(/((:-)|\.|\?)/g, '<font color="#ff5733">$1</font>').replace(/([\[\]|])/g, '<font color="#71fb1d">$1</font>').replace(/([\(\)])/g, '<font color="#fef014">$1</font>');
    }
    var code_jar = CodejarJs.CodeJar(input_code_div, highlight);
    var request_jar = CodejarJs.CodeJar(input_request_div, highlight);
    function getText(jar) {
      return jar.toString();
    }
    function setText(jar, s) {
      jar.updateCode(s);
    }
    function display_text(s) {
      var s$1 = $$console.value + (s + "\n");
      $$console.value = s$1;
    }
    function html_interpreter(program_string, request_string) {
      var s = Prolog.program_of_string(program_string);
      if (s.TAG === 0) {
        var s$1 = Prolog.request_of_string(request_string);
        if (s$1.TAG === 0) {
          var string_seq = Prolog.string_sequence_of(s._0, s$1._0);
          var match = Curry._1(string_seq, void 0);
          if (match) {
            display_text(match._0);
            CompatibilityCrap.Seq.iter(display_text, match._1);
          } else {
            display_text("No solution found.");
          }
        } else {
          display_text("Unable to parse request :");
          display_text(s$1._0);
        }
        return CompatibilityCrap.print_newline(void 0);
      }
      display_text("Unable to parse program :");
      return display_text(s._0);
    }
    function execute(param) {
      display_text("Executing...\n");
      return html_interpreter(code_jar.toString(), request_jar.toString());
    }
    function format_code(param) {
      var err = Prolog.program_of_string(code_jar.toString());
      if (err.TAG !== 0) {
        return display_text(err._0);
      }
      var s = Prolog.string_of_program(err._0);
      code_jar.updateCode(s);
    }
    var button = create_element("Execute", void 0, void 0, Caml_option.some(right_down), void 0, execute, "button");
    var button_format = create_element("Format Code", void 0, void 0, Caml_option.some(right_down), void 0, format_code, "button");
    code_jar.updateCode(Examples.zebra_code);
    request_jar.updateCode(Examples.zebra_request);
    display_text("~ Welcome to my small Prolog interpreter!\n");
    exports.CodeJar = CodeJar2;
    exports.body = body;
    exports.apply = apply;
    exports.get_value = get_value;
    exports.set_value = set_value;
    exports.create_element = create_element;
    exports.grid_container = grid_container;
    exports.left = left;
    exports.right_up = right_up;
    exports.right_middle = right_middle;
    exports.right_down = right_down;
    exports.input_code_div = input_code_div;
    exports.input_request_div = input_request_div;
    exports.$$console = $$console;
    exports.highlight = highlight;
    exports.code_jar = code_jar;
    exports.request_jar = request_jar;
    exports.getText = getText;
    exports.setText = setText;
    exports.display_text = display_text;
    exports.html_interpreter = html_interpreter;
    exports.execute = execute;
    exports.format_code = format_code;
    exports.button = button;
    exports.button_format = button_format;
  });
  require_Client_bs();
})();

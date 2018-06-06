"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatters = void 0;

var _snakeCase2 = _interopRequireDefault(require("lodash-compat/string/snakeCase"));

var _kebabCase2 = _interopRequireDefault(require("lodash-compat/string/kebabCase"));

var _camelCase2 = _interopRequireDefault(require("lodash-compat/string/camelCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const formatters = {
  camelCase: _camelCase2.default,
  'kebabCase': _kebabCase2.default,
  'snakeCase': _snakeCase2.default
};
exports.formatters = formatters;
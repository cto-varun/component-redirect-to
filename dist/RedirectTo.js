"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RedirectTo;
var _react = _interopRequireWildcard(require("react"));
var _componentMessageBus = require("@ivoyant/component-message-bus");
var _reactRouter = require("react-router");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function RedirectTo() {
  const history = (0, _reactRouter.useHistory)();
  const changeUrl = function () {
    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
      data[_key] = arguments[_key];
    }
    if (data && data?.length > 2 && data[2]?.body?.url) history.push(data[2].body.url, {
      routeData: data[2]?.body?.routeData
    });
  };
  (0, _react.useEffect)(() => {
    _componentMessageBus.MessageBus.subscribe('URL-CHANGE', 'URL-CHANGE', changeUrl);
  }, []);
  return null;
}
module.exports = exports.default;
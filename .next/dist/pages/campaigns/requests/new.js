'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Harish WorkSpace\\kickstart\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            receipient: '',
            loading: false,
            errorMessage: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, receipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: "" });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, receipient = _this$state.receipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), receipient).send({ from: accounts[0] });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Receipient'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.receipient,
                onChange: function onChange(event) {
                    _this3.setState({ receipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!!!',
                content: this.state.errorMessage,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, ' Create!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiSW5wdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJMaW5rIiwiUm91dGVyIiwiTGF5b3V0IiwiUmVxdWVzdE5ldyIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2VpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBTSxBQUFRLEFBQVMsQUFBTzs7QUFDdEMsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQU0sQUFBYzs7QUFDNUIsQUFBTyxBQUFZOzs7Ozs7Ozs7SUFDYixBOzs7Ozs7Ozs7Ozs7Ozs7d05BQ0YsQTttQkFBTyxBQUNHLEFBQ047eUJBRkcsQUFFUyxBQUNaO3dCQUhHLEFBR1EsQUFDWDtxQkFKRyxBQUlLLEFBQ1I7MEJBTEcsQSxBQUtVO0FBTFYsQUFDSCxpQixBQVdKO2lHQUFVLGlCQUFBLEFBQU0sT0FBTjsyRUFBQTs7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ047c0NBQUEsQUFBTSxBQUNOO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFNLGNBQTdCLEFBQWMsQUFBNEIsQUFDcEM7QUFIQSwyQ0FHVyx3QkFBUyxNQUFBLEFBQUssTUFIekIsQUFHVyxBQUFvQjs4Q0FDSSxNQUpuQyxBQUl3QyxPQUp4QyxBQUlDLDBCQUpELEFBSUMsYUFKRCxBQUljLG9CQUpkLEFBSWMsT0FKZCxBQUlxQix5QkFKckIsQUFJcUI7Z0RBSnJCO2dEQUFBO3VDQU9xQixjQUFBLEFBQUssSUFQMUIsQUFPcUIsQUFBUzs7aUNBQTFCO0FBUEosb0RBQUE7Z0RBQUE7dUNBUUksU0FBQSxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFDRixhQUNBLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUZmLEFBRUYsQUFBdUIsVUFGckIsQUFHRixZQUhFLEFBSUEsS0FBSyxFQUFFLE1BQU0sU0FaakIsQUFRSSxBQUlLLEFBQVEsQUFBUzs7aUNBQzVCOytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWJ4QztnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFlRjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsY0FBYyxZQWYzQixBQWVGLEFBQWMsQUFBcUI7O2lDQUV2QztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQWpCVCxBQWlCTixBQUFjLEFBQVM7O2lDQWpCakI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQkY7eUJBQ0o7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSixBQUNJLEFBQ0EsQUFJQSwwQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0oscUNBQUEsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEIsY0FBYyxVQUFVLEtBQWxELEFBQXVEOzhCQUF2RDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsZ0NBQUEsQUFBQzt1QkFDTSxLQUFBLEFBQUssTUFEWixBQUNrQixBQUNsQjswQkFBVSx5QkFBUSxBQUFDOzJCQUFBLEFBQUssU0FBUyxFQUFDLGFBQVksTUFBQSxBQUFNLE9BQWpDLEFBQWMsQUFBMEIsQUFBUTtBQUZuRTs7OEJBQUE7Z0NBTFIsQUFDSSxBQUlJLEFBS0o7QUFMSTtBQUNBLGlDQUlILGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLG1DQUFBLEFBQUM7dUJBQ00sS0FBQSxBQUFLLE1BRFosQUFDa0IsQUFDbEI7MEJBQVUseUJBQVEsQUFBQzsyQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFNLE1BQUEsQUFBTSxPQUEzQixBQUFjLEFBQW9CLEFBQVE7QUFGN0Q7OzhCQUFBO2dDQWRSLEFBVUksQUFJSSxBQUtKO0FBTEk7QUFDQSxpQ0FJSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSwrQkFBQSxBQUFDO3VCQUNNLEtBQUEsQUFBSyxNQURaLEFBQ2tCLEFBQ2xCOzBCQUFVLHlCQUFRLEFBQUM7MkJBQUEsQUFBSyxTQUFTLEVBQUMsWUFBVyxNQUFBLEFBQU0sT0FBaEMsQUFBYyxBQUF5QixBQUFRO0FBRmxFOzs4QkFBQTtnQ0F2QlIsQUFtQkksQUFJSSxBQUtKO0FBTEk7QUFDQSxpQ0FJSixBQUFDO3VCQUFELEFBRUE7d0JBRkEsQUFFTyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhkLEFBR29COzs4QkFIcEI7Z0NBNUJKLEFBNEJJLEFBS0E7QUFMQTtBQUNBLGdDQUlBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQzs4QkFBQTtnQ0FBQTtBQUFBO2VBekNSLEFBQ0ksQUFPQSxBQWlDSSxBQUlYOzs7OzttSEF2RTRCLEE7Ozs7O2lDQUNsQjtBLDBDQUFXLE1BQU0sQSxNQUFqQixBO2tFQUVBLEVBQUMsU0FBRCxBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWFUsQSxBQWlGekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L0hhcmlzaCBXb3JrU3BhY2Uva2lja3N0YXJ0In0=
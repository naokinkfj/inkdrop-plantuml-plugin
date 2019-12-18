'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puml = require('@shd101wyy/mume/out/src/puml');

var _inkdrop = require('inkdrop');

var _inkdrop2 = _interopRequireDefault(_inkdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlantUML = class PlantUML extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { svg: '' };
  }
  componentDidMount() {
    this.renderDiagram(this.props.children[0]);
  }
  componentWillUpdate(nextProps) {
    if (nextProps.children[0] !== this.props.children[0]) {
      this.renderDiagram(nextProps.children[0]);
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.children[0] !== this.props.children[0] || nextState.svg !== this.state.svg;
  }
  render() {
    return _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.svg } });
  }
  renderDiagram(code) {
    (0, _puml.render)(code).then(svg => {
      this.setState({ svg });
    });
  }
};


module.exports = {
  activate() {
    _inkdrop2.default.remarkCodeComponents['plantuml'] = PlantUML;
    markdownRendererremarkCodeComponents['puml'] = PlantUML;
  },

  deactivate() {
    if (_inkdrop2.default) {
      _inkdrop2.default.remarkCodeComponents['plantuml'] = null;
      _inkdrop2.default.remarkCodeComponents['puml'] = null;
    }
  }
};
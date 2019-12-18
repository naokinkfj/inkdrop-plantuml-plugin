'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puml = require('@shd101wyy/mume/out/src/puml');

var _inkdrop = require('inkdrop');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PlantUML = class PlantUML extends _react2.default.Component {
  constructor(props) {
    super(props);
    this.state = { svg: '' };
  }
  componentDidMount() {
    this.renderDiagram(this.props.children[0]);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.children[0] !== this.props.children[0]) {
      this.renderDiagram(nextProps.children[0]);
    }
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
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkCodeComponents.plantuml = PlantUML;
      _inkdrop.markdownRenderer.remarkCodeComponents.puml = PlantUML;
    }
  },

  deactivate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkCodeComponents.plantuml = null;
      _inkdrop.markdownRenderer.remarkCodeComponents.puml = null;
    }
  }
};
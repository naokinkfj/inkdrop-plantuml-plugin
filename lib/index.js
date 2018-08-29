'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _puml = require('@shd101wyy/mume/out/src/puml');

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
    const { MDEPreview } = inkdrop.components.classes;
    if (MDEPreview) {
      MDEPreview.remarkCodeComponents.plantuml = PlantUML;
      MDEPreview.remarkCodeComponents.puml = PlantUML;
    }
  },

  deactivate() {
    const { MDEPreview } = inkdrop.components.classes;
    if (MDEPreview) {
      MDEPreview.remarkCodeComponents.plantuml = null;
      MDEPreview.remarkCodeComponents.puml = null;
    }
  }
};
//# sourceMappingURL=index.js.map
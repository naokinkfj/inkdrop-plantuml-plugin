import React from 'react'
import { render as renderUML } from '@shd101wyy/mume/out/src/puml'
import markdownRenderer from 'inkdrop'

class PlantUML extends React.Component {
  constructor (props) {
    super(props)
    this.state = { svg: '' }
  }
  componentDidMount () {
    this.renderDiagram(this.props.children[0])
  }
  componentWillUpdate (nextProps) {
    if (nextProps.children[0] !== this.props.children[0]) {
      this.renderDiagram(nextProps.children[0])
    }
  }
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.children[0] !== this.props.children[0] ||
      nextState.svg !== this.state.svg
  }
  render () {
    return <div dangerouslySetInnerHTML={{ __html: this.state.svg }} />
  }
  renderDiagram (code) {
    renderUML(code).then(svg => {
      this.setState({ svg })
    })
  }
}

module.exports = {
  activate () {
    markdownRenderer.remarkCodeComponents['plantuml'] = PlantUML
    markdownRenderer.remarkCodeComponents["puml"] = PlantUML;
  },

  deactivate () {
    if (markdownRenderer) {
      markdownRenderer.remarkCodeComponents['plantuml'] = null
      markdownRenderer.remarkCodeComponents['puml'] = null
    }
  }
}

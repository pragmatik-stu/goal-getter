import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import ArrowDropDownCircle from 'mdi-react/MenuDownIcon';
import CardHeader from './card-header';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
  }

  onCardChange() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const cardOpenClass = (this.state.isOpen) ? ' card--open' : '';
    const height = (this.state.isOpen) ? 'auto' : 0;

    return (
      <div className={`card${cardOpenClass}`}>
        <div className="above-the-fold">
          <CardHeader
            headerMain={this.props.aboveFoldMain}
            headerSub={this.props.aboveFoldSub}
          />
          <div
            className="expander"
            onClick={() => this.onCardChange()}
          >
            <ArrowDropDownCircle
              className="arrow"
              size="48"
            />
          </div>
        </div>
        <div className="below-the-fold">
          <AnimateHeight
            duration={500}
            height={height}
          >
            {this.props.belowFold}
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default Card;

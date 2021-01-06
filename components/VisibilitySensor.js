import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VSensor from 'react-visibility-sensor';

// This class overrides VisibilitySensor within node_modules.
// Gives option to set sensor to loop once.
// Use "once" prop.

class VisibilitySensor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const { active } = this.state;
    const { once, children, ...theRest } = this.props;
    return (
      <VSensor
        active={active}
        onChange={(isVisible) =>
          once && isVisible && this.setState({ active: false })
        }
        {...theRest}
      >
        {({ isVisible }) => children({ isVisible })}
      </VSensor>
    );
  }
}

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

VisibilitySensor.defaultProps = {
  once: false,
};

export default VisibilitySensor;

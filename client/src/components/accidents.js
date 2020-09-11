import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import connect from "react-redux";
import { getItems } from "../actions/itemActions";
import PropTypes from "prop-types";

class Accidents extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <Button>Add Item</Button>
      </Container>
    );
  }
}
Accidents.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems })(Accidents);

import React from 'react';
import {
  Button,
  ButtonGroup,
  Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { allItems, completedItems, uncompletedItems } from '../actions/itemActions';


const Footer = ({ allItems, completedItems, uncompletedItems }) => {

  return (
    <div>
      <Container>
        <ButtonGroup style={{ marginTop: '2rem' }}>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={allItems}
          >
            All
        </Button>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={completedItems}
          >
            Done
        </Button>
          <Button

            color="dark"
            style={{ marginBottom: '2rem' }}
            onClick={uncompletedItems}
          >
            Active
        </Button>
        </ButtonGroup>

      </Container>

    </div>
  )
};
const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { allItems, completedItems, uncompletedItems })(Footer);
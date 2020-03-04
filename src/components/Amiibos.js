import React from 'react';
import {connect} from 'react-redux';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import {getAmiibos} from '../actions';

const AmiiboCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.image} alt="amiibo image" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Character {props.character}</CardSubtitle>
          <CardText>Amiibo Series: {props.amiiboSeries}</CardText>
          <CardText>Game Series: {props.gameSeries}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    amiibo: [{
        image: state.image,
        name: state.name,
        character: state.character,
        amiiboSeries: state.amiiboSeries,
        gameSeries: state.gameSeries
    }]
})

export default connect(mapStateToProps, {getAmiibos})(AmiiboCard);
import React from 'react';
import {connect} from 'react-redux';
import {getAmiibos} from '../actions';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap'

const AmiibosList = props => {
    return (
        <div className='amiibosList'>
            <div className='amiibo'>
            {props.amiibo.map(amiibo => (
                <Card key={amiibo.name}>
                    <CardBody>
                        <CardImg top width="100%" className='amiiboImg' src={amiibo.image} alt="amiibo image" />
                        <CardTitle>Amiibo Name: {amiibo.name}</CardTitle>
                        <CardText>Amiibo Series: {amiibo.amiiboSeries}</CardText>
                        <CardText>Game Series: {amiibo.gameSeries}</CardText>
                    </CardBody>
                </Card>
            ))}
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    amiibo: state.amiibo,
})

export default connect(mapStateToProps, {getAmiibos})(AmiibosList);
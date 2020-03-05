import React from 'react';
import {connect} from 'react-redux';
import { Spinner } from 'reactstrap';
import {getAmiibos} from '../actions';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap'

const AmiibosList = props => {
    return (
        <div className='amiibosList'>
            {props.isLoading && (
                <div>
                    <Spinner color="primary" />
                    <Spinner color="secondary" />
                    <Spinner color="success" />
                    <Spinner color="danger" />
                    <Spinner color="warning" />
                    <Spinner color="info" />
                    <Spinner color="light" />
                    <Spinner color="dark" />
                </div>
            )}
            <div className='amiibo'>
            {props.amiibo.map(amiibo => (
                <Card key={amiibo.index}>
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
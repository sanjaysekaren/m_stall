import React from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardMedia, List, ListItem, Avatar, Checkbox, ListItemText, ListItemAvatar, ListItemSecondaryAction, CardHeader, CardActions, Grid, Divider, Button, Icon } from '@material-ui/core';

import { connect } from 'react-redux';


import * as Actions from '../../Actions';
import './dashboard.css';


class Dashboard extends React.Component {

    componentDidMount = async () => {
        var token = localStorage.getItem('token');
        this.props.pageLoad(token)
    }

    render() {
        // let data=this.props.componentState.DashboardReducer.productsData
        let isDetailsFetched = false
        if (typeof (this.props.componentState.DashboardReducer.productsData) !== "string") {
            isDetailsFetched = true
        }
        let cardDesign = (
            <div style={{ width: '100%' }}>
                <Card className='cardStyle'>
                    <Grid container >
                        <Grid item xs={4} sm={4} md={3} lg={2}>
                            <CardContent style={{ alignContent: 'flex-start' }} >
                                <CardMedia  >
                                    <img className='picStyle' key='1' alt='info' src={require('../../../assets/HeadPhone.jpg')} />
                                </CardMedia>
                            </CardContent>
                        </Grid>
                        <Grid item xs sm md lg>
                            <CardContent className='descriptionStyle'>
                                <div >
                                    <p className='productHeaderStyle'>
                                        ProductHeading
                                </p>
                                    <p className='productDescriptionStyle'>
                                    Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.
Dummy text is also known as filler text or placeholder text, and it has been used for a long time in the various fields of online publishing.
                                </p>
                                </div>
                            </CardContent>
                        </Grid>
                        <Grid item xs sm={2} md={2} lg={2}>
                            <CardContent style={{ textAlign: 'end' }} >
                                <Button variant="contained" color="primary" className='buttonStyle'>
                                    <p className='buttonTextStyle'>Details</p>
                                </Button>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        )
        console.log(this.props.componentState.DashboardReducer.productsData)
        let displayFectchedData = (
            <div>
                {/* <div>
                    {this.props.componentState.DashboardReducer.productsData && this.props.componentState.DashboardReducer.productsData.map((product) =>
                        <Card>
                            <CardContent>
                                {product.productname}
                            </CardContent>
                        </Card>
                    )}
                </div> */}
                <div>
                    <List className='root'>
                        <ListItem >
                            {cardDesign}

                        </ListItem>
                    </List>
                </div>

            </div>
        )
        let dashboardFunction = (
            <div>
                <h2>
                    Dashboard
                </h2>
                <div>
                    {isDetailsFetched ? displayFectchedData : 'No Records Found!!'}
                </div>
            </div>
        )
        return (localStorage.getItem("isAuth") === "false" || localStorage.getItem("isAuth") === null ? <Redirect to="/login" /> : dashboardFunction)
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        componentState: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pageLoad: (token) => dispatch(Actions.getListofProducts(token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
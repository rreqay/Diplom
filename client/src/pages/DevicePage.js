import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import Rating from '../components/Rating/Rating'
import {createBasketDevice, fetchOneBasketDevice, fetchOneDevice, fetchUserBasket} from "../http/deviceAPI";
import {BASKET_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { useContext } from 'react';
import {Context} from "../index";
import {useHistory} from 'react-router-dom'

const DevicePage = () => {
    const history = useHistory()
    const [device, setDevice] = useState({info: []})
    const [isOnBasket, setOnBasket] = useState(false)
    const {user} = useContext(Context)
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
        fetchOneBasketDevice(id, user.user.id).then(data => data !== null && setOnBasket(true))
    }, [])

    const onAddBasket = () => {
        fetchUserBasket(user.user.id).then(basket => {
            console.log(basket)
            createBasketDevice(id, basket.id).then(() => {setOnBasket(true)})
        })
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-around"
                            // style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                           <h5><Rating></Rating></h5><h5 className="d-flex align-items-center justify-content-around">{device.rating}</h5>
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        {!isOnBasket ?
                            <Button onClick={onAddBasket} variant={"outline-dark"}>
                                Добавить в корзину
                            </Button>
                            : 
                            <Button onClick={() => history.push(BASKET_ROUTE)} variant={"outline-dark"}>
                                Перейти в корзину
                            </Button>
                        }
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;

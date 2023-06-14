import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import {fetchBasketDevcies, fetchOneDevice} from "../http/deviceAPI";
import {BASKET_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { useContext } from 'react';
import {Context} from "../index";
import DeviceItem from "../components/DeviceItem";


const Basket = () => {
    const [devices, setDevices] = useState([])
    const {user} = useContext(Context)

    useEffect(() => {
        fetchBasketDevcies(user.user.id).then(data => {
            setDevices(data.rows.map(basketDevice => {
                return basketDevice.device
            }))
        })
    }, [])

    return (
        <Container >
            <Row className="d-flex flex-column m-3">
                <h3>Корзина</h3>
            </Row>
            <Row className="d-flex">
                {devices.map(device =>
                    <DeviceItem key={device.id} device={device}/>
                )}
            </Row>
            <Button variant={"outline-dark"}>Оформить заказ</Button>
        </Container>

    );
};

export default Basket;

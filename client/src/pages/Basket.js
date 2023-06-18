import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Image, Row, Col} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import {fetchBasketDevcies, deleteBasketDevice, fetchOneBasketDevice} from "../http/deviceAPI";
import {BASKET_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import { useContext } from 'react';
import {Context} from "../index";
import BasketItem from "../components/BasketItem";


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

    const onDeleteClick = (device) => {
        fetchOneBasketDevice(device.id, user.user.id).then(data => {
            deleteBasketDevice(data.basket_devices[0].id).then(() => {
                fetchBasketDevcies(user.user.id).then(data => {
                    setDevices(data.rows.map(basketDevice => {
                        return basketDevice.device
                    }))
                })
            })
        })
    }


    return (
        <Container>
                <Row className="d-flex flex-column m-3">
                    <h3>Корзина</h3>
                </Row>
                    <Col className="d-flex flex-column m-3">
                        <Row style={{cursor: 'pointer' }} border={"light"} >
                            {devices.map(device => <BasketItem key={device.id} device={device} onDelete={() => onDeleteClick(device)} />
                            )}
                        </Row>
                    </Col>
                        <Button className="d-flex flex-column m-3" variant={"outline-dark"}>Оформить заказ</Button>
        </Container>

    );
};

export default Basket;



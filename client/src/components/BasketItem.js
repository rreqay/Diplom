import React, { useContext } from 'react'
import { Row, Container, Button, Col } from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useHistory} from "react-router-dom"
import {DEVICE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import { deleteBasketDevice } from '../http/deviceAPI';
import { fetchOneBasketDevice } from '../http/deviceAPI';
import { Context } from '..';



const BasketItem = ({device, onDelete}) => {
    const {user} = useContext(Context)
    const history = useHistory()

    const onRedirectClick = () => {
        history.push(DEVICE_ROUTE + '/' + device.id)
    }

    return (
                <Row className='m-1' style={{ Stroke: 'red', }}>
            <Col md={2} style={{ width: 150, cursor: 'pointer' }}>
                <Image className="d-flex flex-column m-3" width={150} height={150} src={process.env.REACT_APP_API_URL + device.img} onClick={onRedirectClick} />
            </Col>

            <Col style={{ width: 500, cursor: 'pointer' }}>
                <div className="d-flex flex-column m-3" onClick={onRedirectClick}>{device.name} </div>
            </Col>

            <Col style={{ width: 150, cursor: 'pointer' }}>
                <div className="d-flex flex-column m-3" onClick={onRedirectClick}>{device.price} Руб.</div>
            </Col>

            <Col style={{ width: 150}}>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div>{device.rating}</div>
                        <Image className="d-flex flex-column m-1"  width={18} height={18} src={star} />
                    </div>
                </div>
            </Col>
            <Col style={{ width: 150, height: 50, cursor: 'pointer' }}>
                <Button className="d-flex flex-column m-3" variant='danger' onClick={onDelete}>Удалить из корзины</Button>
            </Col>
        </Row>
    )
}

export default BasketItem

// style={{width: 150, cursor: 'pointer'}} border={"light"}
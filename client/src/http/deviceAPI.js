import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/device', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const fetchDevicesByName = async (name) => {
    if (name && name !== ''){
        const {data} = await $host.get(`api/device/getAllByName/${name}`)
        return data
    }
    return null
}

export const fetchBasketDevcies = async (userId) => {
    const {data} = await $host.get(`api/basket/getBasketDevices/${userId}`)
    return data
}

export const fetchUserBasket = async (userId) => {
    const {data} = await $host.get(`api/basket/getUserBasket?userId=${userId}`)
    return data
}

export const createBasketDevice = async (deviceId, basketId) => {
    const {data} = await $host.post('api/basket/createBasketDevice', {deviceId, basketId})
    return data
}

export const fetchOneBasketDevice = async (deviceId, userId) => {
    const {data} = await $host.get(`api/basket/getOneBasketDevice?deviceId=${deviceId}&userId=${userId}`)
    return data
}

export const deleteBasketDevice = async (basketDeviceId) => {
    const {data} = await $host.delete(`api/basket/deleteBasketDevice/${basketDeviceId}`)
    return data
}

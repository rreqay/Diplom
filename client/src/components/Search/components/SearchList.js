import React, { useContext } from 'react'
import { DEVICE_ROUTE } from '../../../utils/consts'
import './SearchList.css'
import { Context } from '../../..'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const SearchList = ({setVisible}) => {
    const history = useHistory()
    const {search} = useContext(Context)

    return (
    search.devices.length ? 
        <ul className='search__list'>
            {search.devices.map(device => {
                return (
                    <>
                        <div className='search__list__item' onClick={() => {history.push(DEVICE_ROUTE + '/' + device.id); setVisible(false)}}>
                            <div className='search__list__item__left'>
                                <img 
                                    className='search__list__item__image' 
                                    src={process.env.REACT_APP_API_URL + device.img} 
                                    alt={device.short_desc} 
                                />
                            </div>
                            <div className='search__list__item__right'>
                                <span className='search__list__item__title'>
                                    {device.name}
                                </span>
                                <span>{device.price}</span>
                            </div>
                        </div>
                    </>
                )
            })}
        </ul>
    : null
    )
}

export default SearchList
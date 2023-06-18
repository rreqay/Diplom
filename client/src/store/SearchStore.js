import {makeAutoObservable} from "mobx";

export default class SearchStore {
    constructor() {
        this._devices = []
        this._value = ''
        this._page = 1
        this._totalCount = 0
        this._limit = 7
        makeAutoObservable(this)
    }

    setDevices(devices) {
        this._devices = devices
    }
    setValue(value) {
        this._value = value
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get devices() {
        return this._devices
    }
    get value() {
        return this._value
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}

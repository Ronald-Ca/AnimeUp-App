export default class BaseService {
    private _routeBase: string

    constructor(routeBase: string) {
        this._routeBase = routeBase
    }
    getToken() {
        const headers = {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string)?.token}`,
            },
        }
        return headers
    }
}

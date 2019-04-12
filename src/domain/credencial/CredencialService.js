import { URL_LOGIN } from '../../util/path';

export default class CredencialService {

    constructor(resource) {

        this._resourceLogin = resource(URL_LOGIN);
    } 

    efetuaLogin(credencial) {

        return this._resourceLogin
            .save(credencial)
            .then(res => res.json());
    }

    

}
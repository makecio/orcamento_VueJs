import { URL_RESP } from '../../util/path';

export default class ResponsavelService {

    constructor(resource) {

        this._resource = resource(URL_RESP);
    } 

    lista() {

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível obter os dados');
            });
    }  


  
    

}
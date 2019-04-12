import { URL_PLAN_DETALHE } from '../../util/path';

export default class PlanejamentoService {

    constructor(resource) {

        this._resource = resource(URL_PLAN_DETALHE+'{/cdDef}{/txDefPtg}');
        this._resourceFilter = resource(URL_PLAN_DETALHE+'/filter');
        this._resourceSaveAll = resource(URL_PLAN_DETALHE+'/salvar');
    } 

    lista() {

        return this._resource
            .query()
            .then(res => res.json(), err => {
                console.log(err);
                throw new Error('Não foi possível obter os dados');
            });
    }  

    cadastraAll(lista) {

         return this._resourceSaveAll
                .save(JSON.stringify(lista));    
        
    }

    cadastra(planejamento) {

        if(planejamento._id) {

            return this._resource
                .update({ id: planejamento._id}, planejamento);

        } else {
            return this._resource
                .save(planejamento);    
        }

    }
    
    apaga(id) {

        return this._resource
            .delete({ id })
            .then(null, err => {
                console.log(err);
                throw new Error('Não foi possível remover');
            })
    }

    busca(planejamento) {

        return this._resourceFilter
            .save(planejamento)
            .then(res => res.json());
    }

    

}
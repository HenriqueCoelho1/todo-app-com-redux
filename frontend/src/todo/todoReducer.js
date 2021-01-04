

const INITIAL_STATE = {
    description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        },{
            _id: 2,
            description: 'Reuniao com a equipe as 10',
            done: false
        },{
            _id: 3,
            description: 'Consulta media na terca depois do almoco',
            done: false
        }]
}


export default (state =  INITIAL_STATE, action) =>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}

        default:
            return state
    }
}
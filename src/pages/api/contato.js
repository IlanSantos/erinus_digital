import { RegisterContactRequest } from '../../database/contact'
export default async function handle(req, res){
    if (req.method === "POST"){
        try{
            if(!req.body.client_name) throw "Erro! nome não informado"
            else if (!req.body.client_email) throw "Erro! email não informado."
            await RegisterContactRequest(req.body.client_name, req.body.client_email)
            res.status(201).json({message: "Solicitação criada!"})
        }catch(error){
            res.status(404).json({message: error.toString()})
        }
    }
    else{
        res.status(501).json({message: "Método não suportado."})
    }
}
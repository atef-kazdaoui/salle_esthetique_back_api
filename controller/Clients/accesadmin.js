const Clientsmodel = require('../../models/user');
const accesadmin= async (req,res)=>{
try{
Clientsmodel.update({role:"responsable"}, { where: { iduser: req.params.id } })
const accesadmin = await Clientsmodel.findOne({ where: { iduser: req.params.id } });
res.status(200).json({ accesadmin });
}
catch(err){
    return res.status(500).json({ error: err.message });

}
}
module.exports = { accesadmin };
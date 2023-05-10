const categoriemodel=require('../../models/categories');

const affichcategorie = async (req,res)=>{
try{
const categorie=await categoriemodel.findAll();
res.status(200).json({categorie});
}
catch(e){
    return res.status(500).json({ error: e.message });
}
};
module.exports={
affichcategorie,
}
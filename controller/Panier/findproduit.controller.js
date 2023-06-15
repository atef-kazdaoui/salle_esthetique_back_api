const Panier = require('../../models/Paniers');
const afficherPanier=async(req,res)=>{
try{ 
 const panierItems=await Panier.findAll({where: { iduser:req.params.id }})
return res.status(200).json(panierItems);

}catch(err){
    console.log(err);
    res.status(500).json({message:'erreur produit'})
}

}
module.exports ={afficherPanier};
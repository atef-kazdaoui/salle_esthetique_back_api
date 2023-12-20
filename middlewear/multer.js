// j'ai importer multer 
const multer=require('multer');
// le dictionnaire de MINE TYPES
const MINE_TYPES={"image/jpg":"jpg",
"image/jpeg":"jpeg",
"image/png":"png"
};

//la destinstaion d'image (repertoire) et generer un nom de fichier unique
const storage=multer.diskStorage({
// la destination de stockage du fichier
destination:(req,file,callback)=>{
    callback(null,"images")
},
filename: (req,file,callback)=>{
//supprimer les espaces dans le nom du fichier
const name =file.originalname.split(" ").join("_");
const extension=MINE_TYPES[file.mimetype];
callback(null,name + "_" + Date.now() +"."+ extension);
}
})
console.log(storage);
module.exports=multer({storage}).single("image");
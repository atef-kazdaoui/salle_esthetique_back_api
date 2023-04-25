const Clientsmodel = require('../../models/user');

const findClientbyID = async (req, res) => {
  try {
    
    const client = await Clientsmodel.findOne({ where: { iduser:req.params.id } });
    if (!client) {
      return res.status(404).json({ erreur: "Client not found" });
    }else {
    res.status(200).json({ client });
  }
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
module.exports = {
  findClientbyID,
};

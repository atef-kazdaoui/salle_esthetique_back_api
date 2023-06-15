const Clientsmodel = require('../../models/user');

const deleteClient = async (req, res) => {
  try {
    const client = await Clientsmodel.findOne({ where: { iduser: req.params.id } });
    if (!client) {
      return res.status(404).json({ error: 'Client not found' });
    } else {
      await Clientsmodel.destroy({ where: { iduser: req.params.id } });
      res.status(200).json({ message: 'Client deleted successfully' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  deleteClient,
};


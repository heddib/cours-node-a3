const { models } = require('../database')

const userController = {
  index: async (req, res) => {
    const users = await models.user.findAll()
    res.send(users);
  },

  store: (req, res) => {
    if (!req.body || !req.body.firstname || !req.body.lastname) {
      return res.status(400).send({
        success: false,
        message: "Vous devez renseigner le prénom et le nom",
      });
    }
    models.user.create(req.body)
    res.send({ success: true });
  },

  show: async (req, res) => {
    const user = await models.user.findByPk(req.params.id)
    if (!user)
      return res.status(404).send({
        success: false,
        message: "Utilisateur introuvable",
      });
    res.send(user);
  },

  update: async (req, res) => {
    const user = await models.user.findByPk(req.params.id)
    if (!user)
      return res.status(404).send({
        success: false,
        message: "Utilisateur introuvable",
      });

    const { firstname, lastname } = req.body;

    if (!firstname && !lastname) {
      return res.status(400).send({
        success: false,
        message: "Vous devez renseigner le prénom ou le nom",
      });
    } else {
      models.user.update({ firstname, lastname }, {
        where: {
          id: req.params.id
        }
      })
    }

    res.send(user);
  },

  delete: async (req, res) => {
    const user = await models.user.findByPk(req.params.id)
    if (!user)
      return res.status(404).send({
        success: false,
        message: "Utilisateur introuvable",
      });

    models.user.destroy({
      where: {
        id: req.params.id
      }
    })
    res.send({ success: true });
  },
};

module.exports = userController;

const { Router } = require('express');
let router = Router();
let controller = require('../controller/controllerPacote');

router.get('/', controller.listar);
router.get('/search', controller.procurar);
router.get('/:id', controller.procurarPorId);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar);
router.post('/', controller.inserir);

module.exports = router;
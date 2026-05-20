import Patrons from '../models/patrons.js'

const PatronsController = {
    async index(req, res) {
        try {
            await PatronsController.tryIndex(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryIndex(req, res) {
        const patrons = await Patrons.findAll()
        res.status(200)
        res.json({
            success: true,
            data: patrons
        })
    },
    async show(req, res) {
        try {
            await PatronsController.tryShow(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryShow(req, res) {
        const patrons = await Patrons.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patrons
        })
    },
    async store(req, res) {
        try {
            await PatronsController.tryStore(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryStore(req, res) {
        const patrons = await Patrons.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: patrons
        })
    },
    async update(req, res) {
        try {
            await PatronsController.tryUpdate(req, res)
        }catch(error) {
            let actualMessage = '';
            if(error.message == 'Fail! Record not found!') {
                actualMessage = error.message
                res.status(404)
            }else {
                res.status(500)
                actualMessage = 'Fail! The query is failed!'
            }
            
            res.json({
                success: false,
                message: actualMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const recordNumber = await Patrons.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const patrons = await Patrons.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: patrons
        })
    },
    async destroy(req, res) {
        try {
            await PatronsController.tryDestroy(req, res)
        }catch(error) {
            res.status(500)
            res.json({
                success: false,
                message: 'Error! The query is failed!',
                error: error.message
            })
        }
    },
    async tryDestroy(req, res) {
        const patrons = await Patrons.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: patrons
        })
    }
}

export default PatronsController

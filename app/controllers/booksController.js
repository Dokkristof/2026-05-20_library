import Books from '../models/books.js'

const BooksController = {
    async index(req, res) {
        try {
            await BooksController.tryIndex(req, res)
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
        const books = await Books.findAll()
        res.status(200)
        res.json({
            success: true,
            data: books
        })
    },
    async show(req, res) {
        try {
            await BooksController.tryShow(req, res)
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
        const books = await Books.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: books
        })
    },
    async store(req, res) {
        try {
            await BooksController.tryStore(req, res)
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
        const books = await Books.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: books
        })
    },
    async update(req, res) {
        try {
            await BooksController.tryUpdate(req, res)
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
        const recordNumber = await Books.update(req.body, {
            where: { id: req.params.id }
        })
        if(recordNumber == 0) {
            throw new Error('Fail! Record not found!')
        }
        const books = await Books.findByPk(req.params.id)
        res.status(200)
        res.json({
            success: true,
            data: books
        })
    },
    async destroy(req, res) {
        try {
            await BooksController.tryDestroy(req, res)
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
        const books = await Books.destroy({
            where: { id: req.params.id }
        })
        res.status(200)
        res.json({
            success: true,
            data: books
        })
    }
}

export default BooksController

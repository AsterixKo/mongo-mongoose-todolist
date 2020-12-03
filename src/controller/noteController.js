const Note = require('../models/noteModel');

module.exports = {
    search: async function (req, res) {
        try {
            console.log('search:', req.params.query);
            const noteList = await Note.find({
                $text: {
                    $search: req.params.query
                }
            });
            res.send(noteList);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    },
    getNotes: async function (req, res) {
        const noteList = await Note.find();
        // console.log('Respuesta de la base de datos:', noteList);
        // console.log('Obtener notas');
        res.send(noteList);
    },
    addNote: async function (req, res) {

        try {
            console.log('addNote');
            console.log('req.body.description:', req.body.description);
            const noteToAdd = new Note();
            noteToAdd.description = req.body.description;

            await noteToAdd.save();
            res.json(noteToAdd);
        } catch (error) {
            res.json(error);
        }

    },
    removeNote: async function (req, res) {
        try {
            console.log('req.params.id:', req.params.id);
            const noteToRemove = await (await Note.findById(req.params.id)).deleteOne();
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
            res.json(error);
        }
    }
};
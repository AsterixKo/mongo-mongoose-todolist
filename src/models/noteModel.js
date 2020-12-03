const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    description: String
});
NoteSchema.index({description: 'text'});
//hay que ponerlo en singular porque sino le pondra otra s a Student
module.exports = mongoose.model('Note', NoteSchema);
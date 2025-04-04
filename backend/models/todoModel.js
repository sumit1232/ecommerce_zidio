const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  description: {
    type: String,
  },
},{
  timestamps: true
} );
module.exports = mongoose.model('Todo', TodoSchema);

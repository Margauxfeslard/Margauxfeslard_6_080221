const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String, required:true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    manufacturer: { type: String, required:true },
    description: { type: String, required:true },
    mainPepper: { type: String, required:true },
    imageUrl: { type: String },
    heat: { type: Number, required:true },
    likes: { type: Number, required:true, default: 0 },
    dislikes: { type: Number, required:true, default: 0 },
    usersLiked: { type: [String], required:true, default: [] },
    usersDisliked: { type: [String], required:true, default: [] }
})

module.exports = mongoose.model('Sauce', sauceSchema);

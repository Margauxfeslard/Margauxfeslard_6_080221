const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    manufacturer: { type: String },
    description: { type: String },
    mainPepper: { type: String },
    imageUrl: { type: String },
    heat: { type: Number },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String] },
    usersDisliked: { type: [String] }
})

module.exports = mongoose.model('Sauce', sauceSchema);

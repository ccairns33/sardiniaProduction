const mongoose = require('mongoose');

let Schema =  mongoose.Schema;

const GalleryImage = new Schema({
    url: {
        type:String,
        required: "This field is required"
    },
    description: {
        type:String,
        required: "This field is required"
    }
});

// index all in schema
GalleryImage.index({ name: 'text', description: 'text' });

// export model
module.exports = mongoose.model('Gallery Image', GalleryImage);
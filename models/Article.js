const mongoose = require('mongoose');

let Schema =  mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type:String,
        required: "This field is required"
    },
    description: {
        type:String,
        required: "This field is required"
    },
    date:{
        type:String,
        required: "This field is required"
    }, 
    category:{
        type:String,
        required: "This field is required"
    },
    url:{
        type:String,
        required: "This field is required"
    },
    thumbnail:{
        type: String,
        required: "This field is required"
    }
    
});

// index all in schema
ArticleSchema.index({ name: 'text', description: 'text' });
//virtual for product's URL
ArticleSchema.virtual('articleUrl').get( ()=> {
    return '/articles/' + this.url;
});
// export model
module.exports = mongoose.model('Article', ArticleSchema);
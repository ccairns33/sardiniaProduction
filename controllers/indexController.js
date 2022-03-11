// const Product = require('../models/product.js');
const { body,validationResult } = require('express-validator');
const Article = require("../models/Article");
const GalleryImage = require("../models/GalleryImage");
const mongoose = require("mongoose")


// / 
// GET homepage articles
exports.listHomePageArticles = async(req,res)=>{
    try {
        let highlightArticle = await Article.findOne({});
        // skip the first article  
        let articles = await Article.find({}).skip(1);
        console.log("high light articles:" + highlightArticle)
        res.render("../views/home", {title:"Sardinian Disruption", description:"Explore the plasma driven force responsible for the disappearance of the Megafauna and the landscape on Sardinia.", highlightArticle: highlightArticle.toJSON(), articles: articles.map(articles=> articles.toJSON())})
    }
    catch(error){
        res.render("../views/error",{message:error});
        console.log(error);
    }
    
    
}
// /gallery 
// GET gallery
exports.displayGallery = async(req,res)=>{ 
    try{
        let images = await GalleryImage.find({});
         let dots = await GalleryImage.find({}).skip(1); 
        //  take away first image becsaue it has its own class
        // let totalImageCount = await GalleryImage.countDocuments({});
        
        res.render("../views/gallery", {layout: "layout1", title:"Gallery | Sardinian Disruption", description:"Photo gallery with commentary detailing the effects of plasma on earth and with man.", images: images.map(image=> image.toJSON()), dots: dots.map(dot => dot.toJSON()) })

    }
    catch(error){
        res.render("../views/error",{message:error});
        console.log(error);
    }

}
// /about 
// GET about page
exports.displayAbout = async(req,res)=>{ 
    res.render("../views/about", {layout: "layout2", title:"About | Sardinian Disruption", decription:"We are deticated to exposing the truth about plasma and its effects on Sardinia's geology. Learn more about our research at Sardinian Disruption."})

}
// /donate 
// GET donate page
exports.displayDonate = async(req,res)=>{ 
    res.render("../views/donate", {layout: "layout2",title:"Donate | Sardinian Disruption", description:"Support the research at Sardinian Disruption today."})

}

const Article = require("../models/Article");
const mongoose = require("mongoose")

// /articles
// GET all articles
exports.listAllArticles = async(req,res)=>{
    let articles = await Article.find({});
    res.render("articles", {layout:"layout2", title:"Articles | Sardinian Disruption", description:"Read about the plasma driven force responsible for the disappearance of the Megafauna and the landscape on Sardinia.", articles: articles.map(article=> article.toJSON())})
}

// /articles/:articleUrl
exports.displayArticle = async(req,res) =>{
    let paramURL = req.params.articleURL;
    try {
        const article = await Article.findOne({url: paramURL}).lean();
        res.render(`../views/${paramURL}`, { layout:"layout2", title:`${article.title} | Sardinian Disruption`, description: `${article.description}`});
    } catch (error){
        res.render("../views/error", {message : "Article not found.", title: "404 Error", description:"Article not found."});
        res.status(400);
    }
}
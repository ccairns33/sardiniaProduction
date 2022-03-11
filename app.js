var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http');
const hbs = require('express-handlebars');
require('dotenv').config()
// const mg = require("nodemailer-mailgun-transport")
const handlebars = require("handlebars")
const fs = require("fs")


//Set up mongoose connection
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');
var contactRouter = require('./routes/contact');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// must be hbs.engine!!!!!
app.engine( 'hbs', hbs.engine( {
  extname: 'hbs',
  defaultLayout: 'layout1',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/',
  helpers: {
  },
  allowProtoMethodsByDefault: true,
  allowProtoPropertiesByDefault: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/articles', articlesRouter);
app.use('/contact', contactRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', {title: `${err.status} | Sardinian Disruption`, status: err.status, message: err.message});
});

/**
 * Get port from environment and store in Express.
 */

 var port = (process.env.PORT || '3000');
 app.set('port', port);
 

 
  app.listen(port, ()=> console.log(`Listening to port ${port}`));


 /**
  * Listen on provided port, on all network interfaces.
  */
 

// let insertArticles = async() =>{
//   try{
//       await Article.insertMany ([
//           {
//               title: "Why the Nuraghi Were Built",
//               description: "Nothing in the annals of geology can explain the landscape in the districts of Marmilla and Trexenta near Gesico, Sardinia. However, neolithic farmers living on the island over four thousand years ago documented what happened. It was not pleasant. They built the massive nuraghi in response. Nuraghe Santu Antine has walls 5 meters thick. Poor farmers would not have built these massive monuments unless confronting extremely powerful forces. A major precept of geology asserts the landscape is shaped over time by erosion. However, Sardinian farmers would say that terrain alteration can occur in a flash of light. This narrative will advance evidence explaining the patterns on Trexenta and Marmilla and the building of the nuraghi.",
//               date: "March 30, 2021",
//               category: "Nuraghi",
//               url: "why-the-nuraghi-were-built",
//               thumbnail: "/images/homepage-article-imgs/putifigiari-home.webp"
//           },
//           {
//               title: "Plasma: Peratt Environment",
//               description: "The presence of massive plasma z-pinch auroras created a Peratt environment. Two types of phenomena were associated with it. They were the Peratt event (plasma) and the Sipsey event (electricity). In the Domus de Janas' (DdJs), there are images detailing what occurred. The remarkable images in the DdJs S’Incantu and Mandra Antine provide valuable details of plasma’s behavior during Parett environments. The images demostrate plasma’s profound role in Earth’s natural processes.",
//               date: "July 12, 2021",
//               category: "Plasma",
//               url: "plasma-peratt-environment",
//               thumbnail: "/images/homepage-article-imgs/DdJ-bull-peratt-event.webp"
//           },
//           {
//               title: "Death of the Megafauna",
//               description: "Sardinia is the key to understanding what lead to the Mega Fauna's (MF) demise. Sardinia's landscape has been deeply scarred by plasma-earth connections from what Dr. Anthony L. Peratt termed the 'Z-Pinch Aurora' (ZPA). From their graphic representations in the Domus de Janas' (DdJs) and on menhirs, neolithic farmers documented two threats from ZPAs. This article will detail evidence about how the MF came to their demise.",
//               date: "March 30, 2021",
//               category: "MegaFauna",
//               url: "death-of-the-megafauna",
//               thumbnail: "/images/homepage-article-imgs/krakow.webp"
//           },
//           {
//               title: "Caves and Man",
//               description: "Caves, one of the most protected environments, are full of sediment. The sources of this deposition are largely unsubstantiated. How this material entered caves is critical to understanding why humans occupied them. Caves were never used as abodes but as shelters from repeated occurrences of Peratt environments. This article provides evidence to support this assertion.",
//               date: "May 6, 2021",
//               category: "Caves",
//               url: "caves-and-man",
//               thumbnail: "/images/homepage-article-imgs/entryway-gravity-filter.jpeg"
//           },


//       ]);
//   } catch (err){
//       console.log(err);
//   }
// }
// insertArticles();

// let insertGalleryImages = async() =>{
//     try{
//         await GalleryImage.insertMany ([
//             {
//               url:"/gallery/39_394167_8_400546.jpeg",
//               description: "Road cut showing precision with which plasma reduces rock to soil." 
//             },
//             {
//               url:" /gallery/Arenosa-Shelter.jpg",
//               description: "\"Texas Archeological Research Laboratory, UT at Austin\" Researchers assert this image is alluvial sediments. However, this sediment is probably colluvium generated from Peratt Events." 
//             },
//             {
//               url:"/gallery/armungia.jpeg",
//               description: "\"Donna Nuragica: donnauragica.com\" N. Armungia suffered catastophic damage probably from a Sipsey Event." 
//             },
//             {
//               url:" /gallery/bikepacking-johns-canyon_cbe3b865f7_k.jpg",
//               description: "\"bikepacking.com\" Geologist have no explanation for what created this canyon. Repeated passages of Peratt Events eroding the sides of the canyon. A vast majority of the rock probably reverted to plasma, otherwise, a vast plain of sediment would exist somewhere." 
//             },
//             {
//               url:" /gallery/bison-priscus-femur-damage.jpg",
//               description: "Bison priscus femur damage." 
//             },
//             {
//               url:" /gallery/bronzei_peratt_event.jpg",
//               description: "The image probably represents Peratt and Sipsey Events." 
//             },
//             {
//               url:" /gallery/cart_ruts.jpg",
//               description: "\"Donna Nuragica: donnanuragica.com\" 'Cart ruts' or 'wagon tracks' are a mystery, but their origin is product of electrical strikes chiselling these grooves." 
//             },
//             {
//               url:" /gallery/CaveHidden.jpg",
//               description: "Nothing typifies the levitation effects of a Z-pinch Aurora (ZPA) than Hidden Cave. Colluvium doesn't descend but drifts toward the points of higher GAP (gravitational attraction potential). No other explanation explains how the sediment entered this cave." 
//             },
//             {  
//               url:"/gallery/ceiling_mandra_antine.jpg",
//               description: "\"Donna Nuragica: donnanuragica.com\" The ceiling of Domus de Janas (Ddj) Mandra Antine displaying the double layer plasma structure of the ZPA with the plasma connections between the ZPA. The spiral and arch are different plasma expressions of a z-pinch." 
//             },
//             {
//               url:"/gallery/clearSpiralsdDdJ_bronzieShield.jpg",
//               description: "\"Nicola Castangia\" Another superb Nicola Castangia photo. Plasma z-pinch spirals showing the double layer structure."
//             },
//             {
//               url:"/gallery/col_soil_top_pebbles_39_9381885_8_7687701.jpg",
//               description: "A road cut through bedrock which can be seen on the right third of the photo. The left two thirds are layers of colluvium left in the wake of later Peratt Events (PEs)." 
//             },
//             {
//               url:"/gallery/conglomerate.jpg",
//               description: "\"Siim Sepp: sandatlas.org\" The presence of pebbles is clear evidence of a Peratt Event (PE) having occurred here." 
//             },
//             {
//               url:"/gallery/conglomerateImage.jpg",
//               description: "This is colluvium now called a 'conglomerate'. It was created during a Peratt Environment. The solidifing process is not acknowledged by researchers." 
//             },
//             {
//               url:"/gallery/DdJ_Su_crucifissu_mannu_n_castangia.jpg",
//               description: "\"Nicola Castangia\" So called 'wagon tracks' are products of electrical strikes." 
//             },
//             {
//               url:"/gallery/Dermestid-damage-A-juvenile-chicken-distal-right-tarsometatarsus-showing-bore.jpg",
//               description: "The bottom left quadrant is the precise sculpting pattern caused by plasma erosion and not dermestid beetles. This animal may have died during a Peratt Environment." 
//             },
//             {
//               url:"/gallery/Dn_line_of_menhirs.jpg",
//               description: "\"Donna Nuragica: donnanuragica.com\" The line of menhirs represents Sipsey Events striking earth from z-pinches as seen in DdJ Mandra Antine." 
//             },
//             {
//               url:"/gallery/entry-way-gravity-filter.jpg",
//               description: "Many Domus de Janas' (DdJs) have entrance 'trenches'. They were 'gravity filters' to attract extremely fine clay particles. The gravitational attraction exerted by the ZPA and earth cancelled each other. The solid stone walls of the trench exerted enough gravity to attract the clay particles." 
//             },
//             {
//               url:"/gallery/field_pattern_villamayor_de_gallego.jpg",
//               description: "A field pattern near Villamajor, Spain. It was left by the repeated passage of Peratt Environments." 
//             },
//             {
//               url:"/gallery/filled_in_icewedges_northernforum.org.jpg",
//               description: "Ice wedges drilled by Sipsey Events. This occured when bolts of electricity descended from a ZPA." 
//             },
//             {
//               url:"/gallery/hallscave.jpg",
//               description: "A thick layer of sediment drawn into Hall's Cave during repeated occurrences of Peratt Environments." 
//             },
//             {
//               url:"/gallery/hill_colluvium_39_7437129_9_2068354.jpg",
//               description: "A small mound of colluvium in Sardinia." 
//             },
//             {
//               url:"/gallery/hill_of_colluvium_39_9618474_8_8291034.jpg",
//               description: "One of the few large hills of colluvium found in Sardinia. The vast amount of the missing rock on Sardinia reverted to plasma leaving only a veneer of colluvium" 
//             },
//             {
//               url:"/gallery/Iamassu_wikipedia.jpg",
//               description: "The headress of the Iamassu is similar to some of the carvings found in the DdJs." 
//             },
//             {
//               url:"/gallery/Mf_bonfire_animal_funnel.jpg",
//               description: "The approximate location of the Bonfire animal jump. The terrain acted as a funnel. Animals were driven from east to west by Peratt and Sipsey Events. This indicates the z-pinches moved slowly enough for the animals to be herded, otherwise, they would have been destroyed in detail." 
//             },
//             {
//               url:"/gallery/MF_lightningtreeP1030520.jpg",
//               description: "A lightning struck tree. Note that the bark has been stripped. Buried trees are commonly found across the world stripped of bark." 
//             },
//             {
//               url:"/gallery/Roc-de-Marsal-a-cross-section-view-of-thick-undulating-lens-of-ash-in-Layer-7-top-of.jpg",
//               description: "Examples of colluvium found in caves." 
//             },
//             {
//               url:"/gallery/Screenshot-Gobekli-deposition-2018-06-16.jpg",
//               description: "An image of colluvium from Gobekli Tepe, a site shrouded in nonsense. The T-pillars represent Peratt Events. No, it was not 'backfilled', but buried in colluvium during Peratt Environments." 
//             },
//             {
//               url:"/gallery/soil-left-rock-right.jpg",
//               description: "This image from Sardinia makes no sense to geologists. The rock abuptly terminates and soil begins." 
//             },
//             {
//               url:"/gallery/via_rutuli.jpg",
//               description: "Via Rutuli in Ardea, Italy. A zp-print carved on to the landscape by a PE. I Wonder where all the rock went? " 
//             },
//             {
//               url:"/gallery/villamayor_spain_track_of_plasma_pattern.jpg",
//               description: "The landscape of Villamayor, Spain." 
//             }
//         ]);
//         }
//     catch(error){

//     }
// }        
// insertGalleryImages();



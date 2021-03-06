var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
                
                title: "Article One | Nithin Alex John",
                heading: "First heading for article one",
                date: "October 08, 2016",
                content: `
                                    <p>
                                        This is the first para content for my first article....
                                    </p>
                                    
                                    <p>
                                        This is the second para content for my first article....
                                    </p>
                                    
                                    <p>
                                        This is the third para content for my first article....
                                    </p>
                        ` 
    
    
                    },
                
    'article-two':  {
                title: "Article Two | Saayooj",
                heading: "First heading for article two",
                date: "November 08, 2016",
                 content: `
                        <p>
                            This is the first para content for my second article....
                        </p>
                        
                        <p>
                            This is the second para content for my second article....
                        </p>
                        
                        <p>
                            This is the third para content for my second article....
                        </p>
                        `
                },
                
    'article-three': {
                title: "Article Three | Sherly",
                heading: "First heading for article three",
                date: "December 08, 2016",
                content: `
                        <p>
                            This is the first para content for my third article....
                        </p>
                        
                        <p>
                            This is the second para content for my third article....
                        </p>
                        
                        <p>
                            This is the third para content for my third article....
                        </p>
                        `
                },
                
    'article-four': {
                title: "Article Four | Sunny",
                heading: "First heading for article four",
                date: "December 08, 2017",
                content: `
                        <p>
                            This is the first para content for my fourth article....
                        </p>
                        
                        <p>
                            This is the second para content for my fourth article....
                        </p>
                        
                        <p>
                            This is the third para content for my fourth article....
                        </p>
                        `
                }
                
};



function createTemplate (data){
            
            var title = data.title;
            var date = data.date;
            var heading = data.heading;
            var content = data.content;
            
                    var htmlTemplate = 
                    `    
                        <html>
                                
                            <head>
                                    
                                <title>
                                       ${title}
                                </title>
                                    
                                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                                
                                <link href="/ui/style.css" rel="stylesheet" />
                                    
                                    
                             </head>   
                                    
                            <body>
                                        
                                <div class="container">
                            
                                    <div>
                                       <a href="/">Home</a>  
                                    </div>
                                                
                                        <hr/>
                    
                                    <h3>
                                        ${heading} 
                                    </h3>
                                                
                                    <div>
                                        ${date}
                                    </div>
                                    
                                     <div>
                                        ${content}
                                    </div>
                                                
                                <div>
                                                    
                                                    
                            </body>
                                    
                        </html>
                    
                    `   ; 
                    
        return htmlTemplate;            
}            

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
   //articleName= article-one;
   //articles[articleName]= {} content object of article-one;
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
    
});



//app.get('/article-one', function(req,res){
//res.send(createTemplate(articleOne));    
//res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
//});


app.get('/article-two', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article-three', function(req,res){
res.send('Article three is requested and will be served here');
});

app.get('/article-four', function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-four.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

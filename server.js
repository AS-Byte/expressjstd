//imports
var http = require('http'); //require = import
var url = require("url");
var querystring=require('querystring');
//création du serveur
var server = http.createServer(function (req,res){
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/html"});

    
    

    
    console.log(page);
    var page = url.parse(req.url).pathname;
    if (page=='/'){
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '    </head>'+
    '    <body>'+
    '        <p>voici un paragraphe <strong>HTML</strong> ! </p>'+
    '    </body>'+
    '       </html>');
    } 
    
    else if (page=='/contact'){
        res.write('Vous etes dans la page contact');
    }

    else if (page=='/Affichage/1/user'){
        res.write('Afficher l \'utilisateur qui a l\'id 1!');
    
        if ('id' in params && 'login' in params) {
        res.write('Votre id est'+ params['id']+
        'et votre login' + params['login']);
        }
        else {
            req.write('Veuillez saisir votre id et login');
        }
    }

    else {
        res.write('404 not found!');
    }  
    res.end()
}); 
//config
server.listen(8585);
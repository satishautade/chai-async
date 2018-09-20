// module.exports.getWikiPageFor = function (person){
// 		console.log(`I was called with Person firstname : ${person.first} `);
// }

// module.exports.setWikiPageFor = function(name){
// 	console.log("TO DO: Implementation of a setter method");	
// }
var https = require('https');

// var app = {
	
// 	getWikiPageFor: function(person){
		
		
// 	}
	
// }
// module.exports = app;

module.exports =  {

	getWikiPageFor(person, callback){
		var url = `https://en.wikipedia.org/wiki/${person.first}_${person.last}`;
				// https://en.wikipedia.org/wiki/Mahatma_Gandhi
		
		https.get(url, function(res){
			var body = '';
			
			res.setEncoding("UTF-8");
			
			res.on('data', function(chunk){
				body += chunk;
			});

			res.on('end', function(){
				callback(body);
			})
		});
	}
};
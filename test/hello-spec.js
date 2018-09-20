var app = require("../lib/app");
var expect = require("chai").expect;

describe('Get WikiPage Feature', function(){
	
	this.timeout(5000);
	
	it('should display wiki page for Mahatma Gandhi', function(done){
	
		app.getWikiPageFor({first: "Mahatma", last: "Gandhi"}, function(html){
	
			expect(html).to.be.ok;
			done();
		});

	});
});
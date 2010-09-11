var vows = require('vows'),
    assert = require('assert'),
    Aranea = require('./../lib/aranea');
    
vows.describe('Crawling a page').addBatch({
  'A Aranea instance': {
    topic: new(Aranea),
    'started crawling from one.html': {
      topic: function(aranea){
        aranea.crawl("file://"+__dirname+"/example_pages/one.html");
        return aranea;
      },
      
      'has crawled 2 pages': function(aranea){
        assert.equal (aranea.pagesCrawled, 2);
      }
    }
  }
}).export(module);
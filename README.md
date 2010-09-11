# WHAT IS IT?

Aranea is a node.js powered web spider, i made it to learn the ropes. it requires 'request' and 'jsdom' and at the moment only pulls back all the links on the first page. Not very useful huh?

# USAGE

    var sys = require('sys'),
        Aranea = require('./lib/aranea');

    var spider = new Aranea();

    spider.linkSelector = 'a.gb1'

    spider.on('pageFinished', function(page){
      sys.puts(JSON.stringify(page.links));
    });

    spider.crawl("http://google.com");
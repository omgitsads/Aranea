# WHAT IS IT?

Aranea is a node.js powered web spider, i made it to learn the ropes. it requires 'request' and 'jsdom' and at the moment only pulls back all the links on the first page. Not very useful huh?

# USAGE

    var sys = require('sys'),
        Aranea = require('./lib/aranea');

    var spider = new Aranea();

    spider.on('pageFinished', function(page){
      sys.puts(page.links[0]);
    })

    spider.crawl("http://google.com");
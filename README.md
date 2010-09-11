# WHAT IS IT?

Aranea is a node.js powered web spider, i made it to learn the ropes. it requires 'request' and 'jsdom' and at the moment only pulls back all the links on the first page. Not very useful huh?

# USAGE

### Simple

    var sys = require('sys'),
        Aranea = require('./lib/aranea');

    var spider = new Aranea();

    spider.on('pageFinished', function(page){
      // Do something with each page!
    });

    spider.crawl("http://google.com");

### Limit the links grabbed with css selector

#### Simple class based selector

    var sys = require('sys'),
        Aranea = require('./lib/aranea');

    var spider = new Aranea();

    spider.linkSelector = 'a.gb1';

    spider.on('pageFinished', function(page){
      sys.puts(JSON.stringify(page.links));
    });

    spider.crawl("http://google.com");
    // ["http://www.google.com/imghp?hl=en&tab=wi"
    // ,"http://video.google.com/?hl=en&tab=wv"
    // ,"http://maps.google.com/maps?hl=en&tab=wl"
    // ,"http://news.google.com/nwshp?hl=en&tab=wn"
    // ,"http://www.google.com/prdhp?hl=en&tab=wf"
    // ,"http://mail.google.com/mail/?hl=en&tab=wm"]

#### CSS3 Selector
    var sys = require('sys'),
        Aranea = require('./lib/aranea');

    var spider = new Aranea();

    spider.linkSelector = 'a[href^="http://mail."]';

    spider.on('pageFinished', function(page){
      sys.puts(JSON.stringify(page.links));
    });

    spider.crawl("http://google.com");
    // ["http://mail.google.com/mail/?hl=en&tab=wm"]
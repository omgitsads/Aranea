# WHAT IS IT?

Aranea is a node.js powered web spider, i made it to learn the ropes. it requires 'request' and 'jsdom' and at the moment only pulls back all the links on the first page. Not very useful huh?

# USAGE

    var Aranea = require('./lib/aranea');

    var spider = new Aranea();
    spider.crawl("http://google.com");

    // spider.pages[0].links
    [ 'http://www.google.com/imghp?hl=en&tab=wi'
    , 'http://video.google.com/?hl=en&tab=wv'
    , 'http://maps.google.com/maps?hl=en&tab=wl'
    , 'http://news.google.com/nwshp?hl=en&tab=wn'
    , 'http://www.google.com/prdhp?hl=en&tab=wf'
    , 'http://mail.google.com/mail/?hl=en&tab=wm'
    , 'http://www.google.com/intl/en/options/'
    , 'http://books.google.com/bkshp?hl=en&tab=wp'
    , 'http://www.google.com/finance?hl=en&tab=we'
    , 'http://translate.google.com/?hl=en&tab=wT'
    , 'http://scholar.google.com/schhp?hl=en&tab=ws'
    , 'http://blogsearch.google.com/?hl=en&tab=wb'
    , 'http://www.google.com/realtime?hl=en&tab=wY'
    , 'http://www.youtube.com/?hl=en&tab=w1'
    , 'http://www.google.com/calendar/render?hl=en&tab=wc'
    , 'http://picasaweb.google.com/home?hl=en&tab=wq'
    , 'http://docs.google.com/?hl=en&tab=wo'
    , 'http://www.google.com/reader/?hl=en&tab=wy'
    , 'http://sites.google.com/?hl=en&tab=w3'
    , 'http://groups.google.com/grphp?hl=en&tab=wg'
    , 'http://www.google.com/intl/en/options/'
    , 'http://google.com/url?sa=p&pref=ig&pval=3&q=http://www.google.com/ig%3Fhl%3Den%26source%3Diglk&usg=AFQjCNFA18XPfgb7dKnXfKz7x7g1GDH1tg'
    , 'http://google.com/preferences?hl=en'
    , 'https://www.google.com/accounts/Login?hl=en&continue=http://www.google.com/'
    , 'http://google.com/advanced_search?hl=en'
    , 'http://google.com/language_tools?hl=en'
    , 'http://google.com/intl/en/ads/'
    , 'http://google.com/services/'
    , 'http://google.com/intl/en/about.html'
    , 'http://google.com/intl/en/privacy.html'
    ]

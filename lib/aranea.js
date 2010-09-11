var sys = require('sys'),
    http = require('http'),
    url = require('url'),
    request = require('request'),
    events = require('events'),
    jsdom = require('jsdom');

module.exports = Aranea;

function Aranea() {
  events.EventEmitter.call(this);
  var self = this;
  
  self.pages = [];
  self.maxDepth = 3;
  self.currentDepth = 0;
  self.linkSelector = 'a';
}

// inherit events.EventEmitter
Aranea.super_ = events.EventEmitter;
Aranea.prototype = Object.create(events.EventEmitter.prototype, {
    constructor: {
        value: Aranea,
        enumerable: false
    }
});

Aranea.prototype.crawl = function(target_url) {
  var self = this;
  var uri = url.parse(target_url);
  
  request({uri: uri}, function(error, response, body) {
    if(!error){
      var page = new Page(uri, response, body);
      self.pages.push(page);
      
      page.findLinks(self.linkSelector, function() {
        self.emit("pageFinished", page);
      });
    } else {
      sys.puts(error);
    }
  });
};

function Page (uri, response, body) {
  var self = this;
  
  self.uri = uri;
  self.headers = response.headers;
  self.status = response.statusCode;
  self.body = body;
  self.links = [];
}

Page.prototype.findLinks = function(selector, callback) {
  var self = this;
  
  var window = jsdom.createWindow(self.body);
  jsdom.jQueryify(window, __dirname+'/jquery.min.js', function (window, jQuery) {
    jQuery(selector).each(function(){
      var resolved_uri = url.resolve(self.uri,this.href);
      self.links.push(resolved_uri);
    });
    callback();
  });
};

Page.prototype.inspect = function() {
  var self = this;
  return "URI: "+self.uri.href+"\nHeaders: "+JSON.stringify(self.headers)+"\nResponse Code: "+self.status+"\nLinks: "+JSON.stringify(self.links);
};
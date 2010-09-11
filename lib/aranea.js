var sys = require('sys'),
    http = require('http'),
    url = require('url'),
    request = require('request'),
    events = require('events'),
    jsdom = require('jsdom');

module.exports = Aranea;

function Aranea() {
  events.EventEmitter.call(this);
  
  this.pages = [];
  this.maxDepth = 3;
  this.currentDepth = 0;
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
  
  request({uri: uri.href}, function(error, response, body) {
    if(!error){
      var page = new Page(uri, response, body);
      page.findLinks(function() {});
      self.pages.push(page);
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

Page.prototype.findLinks = function(callback) {
  var self = this;
  
  var window = jsdom.createWindow(self.body);
  jsdom.jQueryify(window, __dirname+'/jquery.min.js', function (window, jQuery) {
    jQuery('a').each(function(){
      var resolved_uri = url.resolve(self.uri,this.href);
      self.links.push(resolved_uri);
    });
    callback(self.links);
  });
};

Page.prototype.inspect = function() {
  var self = this;
  return "URI: "+self.uri.href+"\nHeaders: "+JSON.stringify(self.headers)+"\nResponse Code: "+self.status+"\nLinks: "+JSON.stringify(self.links);
};
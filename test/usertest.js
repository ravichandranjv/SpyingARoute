﻿var assert=require('assert');
var request = require('supertest');
var sinon     = require('sinon');
var spy=sinon.spy();
describe('simple test of about route with params',function(){
	var server;
	beforeEach(function () {
  		server = require('../server').server;
	});
it('should respond with JSON data', function (done) {
  request(server)
    .get('/about/jv')
    .expect(200)
    .end(function (err, response) {
      assert.equal(response.header['content-type'], 'application/json; charset=utf-8');
      assert.deepEqual(response.body, {
        "data":{
		"username":"hellojv"}
      });
      done();
    });
});
it('should respond with no username', function (done) {
  request(server)
    .get('/about/jvr')
    .expect(200)
    .end(function (err, response) {
      assert.equal(response.header['content-type'], 'application/json; charset=utf-8');
      assert.deepEqual(response.body, {
        "data":{
		"username":null}
      });
      done();
    });
});
it ('checks how many times the about page is called',function(done){
	var getSpy=sinon.spy(server,'get');
 	request(server)
    	.get('/about/jv')
    	.expect(200)
    	.end(function (err, response) {
	sinon.assert.callCount(getSpy,4);
	done();
	});
});

});
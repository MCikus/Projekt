const soapRequest = require('easy-soap-request');
const fs = require('fs');
//const { get } = require('http');

// data
const url = 'http://192.168.81.200:8080/';
const sampHeaders = {
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'http://www.his/ws/StudentService/searchByRegistrationnumber?WSDL',
};
const xml = fs.readFileSync('test.xml', 'utf-8');

// res
(async () => {
  const { response } = await soapRequest({ url: url, headers: sampHeaders, xml: xml, timeout: 9000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
})(); 
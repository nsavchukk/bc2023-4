const http = require('http');
const fs = require('fs');
const xml = require('fast-xml-parser');

const server = http.createServer((req, res) => {

    const ownMap = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }

    const xmlData = fs.readFileSync('data.xml', 'utf8');
    const parser = new xml.XMLParser();
    const obj = parser.parse(xmlData);

    if (obj.exchange.currency) {
      if (Array.isArray(obj.exchange.currency)) {
        data = obj.exchange.currency;
      } else if (typeof obj.exchange.currency === 'object') {
        data = [obj.exchange.currency];
      }
    }

    if (data.length > 0) {
      const sortedData = ownMap(data, (item) => ({
        rate: item.rate,
        date: item.exchangedate
        //noname: item.txt
      }));

      const newObj = {
        data: {
          exchange: sortedData,
        },
      };

      const builder = new xml.XMLBuilder();
      const xmlStr = builder.build(newObj);

      res.writeHead(200, { 'Content-Type': 'application/xml' });
      res.end(xmlStr);
    }   
});

server.listen(8080, () => {
  console.log('Сервер запущено на localhost:8080');
});

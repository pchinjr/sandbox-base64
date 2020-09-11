let fs = require('fs')
exports.handler = async function http(req) {

  let body = req.body //base64 encoded string
  let data = body.replace(/^data:image\/\w+;base64,/, "");
  console.log(body)
  let buff = Buffer.from(data, 'base64')
   console.log('wrote file')
  let b64 = buff.toString('base64') // still the wrong one - needs to be decoded again


  //let secondBuff = Buffer.from(b64, 'base64')
  //let decoded = secondBuff.toString('utf8') //still not decoded

  return {
    statusCode: 200,
    headers: {
      'content-type': 'image/png'
    },
    body: JSON.stringify(b64),
  }
}
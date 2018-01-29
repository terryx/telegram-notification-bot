const request = require('request-promise')
const config = require('./config')

request({
  method: 'POST',
  baseUrl: 'https://api.telegram.org',
  uri: `/bot${config.bot_token}/sendMessage`,
  json: true,
  body: {
    chat_id: config.peer,
    text: '<b>Hello World</b>',
    parse_mode: 'HTML'
  }
})
.then(res => {
  console.log(res)
})
.catch(err => console.error(err.message))

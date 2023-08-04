const axios = require('axios');

const options = {
  method: 'GET',
  url: 'http://www.laughfactory.com/jokes/holiday-jokes',
  params: {
    'max-length': '200',
    'include-tags': 'one_liner',
    'min-rating': '7',
    'exclude-tags': 'nsfw',
    keywords: 'rocket'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
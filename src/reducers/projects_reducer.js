import yelpCamp from '../images/fulls/yelp-camp.png';
import wiki from '../images/fulls/wiki.png';
import movieDB from '../images/fulls/moviedb.png';
import financeGo from '../images/fulls/finance-go.png';
import quote from '../images/fulls/quote.png';
import colorGame from '../images/fulls/color-game.png';


export default function() {
	return [
		{name: 'MovieDB', image: movieDB, description: 'Not sure what to watch? Check out movie reviews and ratings here!', url: 'https://react-moviedb-app.herokuapp.com/'},
		{name: 'ReviewShare', image: yelpCamp, description:'Write, explore reviews, and share experiences with friends.', url: 'http://reviewshare.herokuapp.com/'},
		{name: 'Finance-Go', image: financeGo, description: "Keep track of your stock portfolio and share information and tips with friends.", url: "https://finance-go.herokuapp.com"},
		{name: 'Wikipedia Viewer', description: 'Get a list of Wikipedia articles from a simple search, or take a chance at a random article!', image: wiki, url: 'https://wikipedia-viewer-fcc.herokuapp.com/'},
		{name: 'Quote It Up!', image: quote, url: 'https://quote-it-up.herokuapp.com/', description: 'Get random motivational, inspirational, or just random quotes from famous movies & historical figures.'},
		{name: 'RGB Color Game', url: 'https://color-game-rgb.herokuapp.com/', image: colorGame, description: 'Can you determine the correct color? Choose the correct color from a randomly generated mix of red, green, and blue.'}
	]
}


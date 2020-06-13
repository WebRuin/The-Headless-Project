import posts from './_posts.js';

let count = 0;
const contents = JSON.stringify(posts.map(post => {
  count ++;
  console.log(count);
	return {
		title: post.title,
		slug: post.slug
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
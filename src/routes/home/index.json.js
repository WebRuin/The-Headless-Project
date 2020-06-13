import headlessCmss from './_headlessCmss.js';

let count = 0;
const contents = JSON.stringify(headlessCmss.map(cms => {
	return {
		title: cms.name,
		slug: cms.slug,
		heading: cms.heading,
		description: cms.description,
		url: cms.url,
		pricing: cms.pricing
	
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
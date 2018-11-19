export default function decodeQueryName(queryName) {
	const regex = /^(.*) \(page (\d+)\)$/i;
	const [fullMatch, query, page] = queryName.match(regex);
	return { query, page };
}

export default function generateQueryName(query, page) {
	return String(`${query} (Page ${page})`).toUpperCase();
}

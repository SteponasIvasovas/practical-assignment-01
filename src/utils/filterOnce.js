export default function filterOnce(sourceArray, filterArray) {
	let removedArray = [];
	return sourceArray.filter(element => {
		const exists = filterArray.includes(element);
		const alreadyRemoved = removedArray.includes(element);

		if (exists && !alreadyRemoved) {
			removedArray.push(element);
			return false;
		}

		return true;
	});
}

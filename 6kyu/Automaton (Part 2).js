function automaton(e) {
	if (typeof e === "string") {
		return e.split('').filter(x => 'aeiou'.includes(x.toLowerCase())).length;
	} else if (typeof e === "number") {
		if (!Number.isInteger(e)) return false;

		for (var i = 2; i <= e / 2; i++) if (e % i === 0) return false;

		return true;
	} else if (typeof e === "object") {
		var a = {};

		for (var k in e) a[e[k]] = k + "";

		return a;
	}
}
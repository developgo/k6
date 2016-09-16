import { group, test } from "speedboat";

export let options = {
	vus: 5,
};

export default function() {
	group("my group", function() {
		test(Math.random(), {
			"random value is < 0.5": (v) => v < 0.5
		});
	});
};

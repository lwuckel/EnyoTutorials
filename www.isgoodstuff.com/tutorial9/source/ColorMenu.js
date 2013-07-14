enyo.kind({
    name: "ColorMenu",
    kind: "onyx.RadioGroup",
    classes:"padding15px specialBar",
 	components: [
		{content: "Red", active: true},
		{content: "Blue"},
		{content: "Green"}
	]
});
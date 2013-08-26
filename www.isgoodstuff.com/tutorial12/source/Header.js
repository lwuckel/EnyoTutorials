enyo.kind({
    name: "Header",
    kind: "Control",
    components: [
        {
             kind: "onyx.Toolbar",
             layoutKind: "FittableColumnsLayout",
             components:[
             	{
             		tag:"h1",
             		fit:true,
             		content:"Tutorial 12 : Canvas Ho!",
             		classes:"headerTextTitle",
             		style:"text-align:center"
             	}
             ]
        }
    ]
});
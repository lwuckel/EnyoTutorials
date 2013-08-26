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
             		content:"Tutorial 11 : Combo!",
             		classes:"headerTextTitle",
             		style:"text-align:center"
             	}
             ]
        }
    ]
});      

      
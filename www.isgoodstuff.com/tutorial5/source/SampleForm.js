enyo.kind({
	name: "SampleForm",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable padding15px formBg",
	components: [
		{ style:"height:20px" },
		{   
			// input decorator is a special div that surround the actual input. This is useful
			// to further style the input with icons and etc. Input decorator also has a unique
			// onfocus selector making it looked like a real input instead.
			kind: "onyx.InputDecorator",
			classes:"inputStyler", 
			components: [
				{
					name:"txtName", 
					kind: "onyx.Input", 
					placeholder: "Enter a Name",
					type:"text",
					// you can insert all sort of event like onchange, oninput, onfocus etc.
					// you can use this attributes properties for additional attributes 
					// like data-role, maxlength, readonly and required
					attributes:{
						maxlength:80,
						required:"required"				
					}
				}
			] 	
		},
		{ style:"height:10px" },
		{   
			kind: "onyx.InputDecorator",
			classes:"inputStyler", 
			components: [
				{
					name:"txtPassword", 
					kind: "onyx.Input", 
					placeholder: "Enter Password",
					type:"password",
					attributes:{
						maxlength:10,
						required:"required"				
					}  
				}
			] 	
		},
		{ style:"height:10px" },
		{
			//Sometimes, is useful to position fittablecolumsnlayout to place multiple div in 
			//horizontal mode. Also take note, some control won't appear unless you specify some
			//height onto it.
			layoutKind: "FittableColumnsLayout",
			style:'height:32px',
			components:[
				{ 
					content:"Registered Member ? ",
					style:"width:200px;padding:8px;"
				},
				{
					name:"checkMember",
					kind:"onyx.Checkbox", 
					onchange:"checkboxChanged", 
					checked: true,
					style:"width:100px;"
				}
			]
		},
		{ style:"height:10px" },
		// Next we move on to what is know as a picker. Picker is basically, a control that 
		// creates and popup list of choices.
		// Alternatively you can use kind:enyo.Select, but according to enyoJS developer, 
		// best to use a enyoJS picker as some platform like webos or third party OS may not 
		// have select tag, build to them. Like onyx.input, picker also comes with it's own
		// decorator and a special button that trigger the picker to popup itself. All together
		// 3 components.
		{
			name:"pickerMemberType",
			kind: "onyx.PickerDecorator", 
			components: [
				{
					kind: "onyx.PickerButton", 
					content: "Select Member Type...", 
					style: "width: 100%"
				},
				{
					kind: "onyx.Picker", 
					components: [
						{content: "Platinum"},
						{content: "Gold"},
						{content: "Silver"}
					]
				}
			]
		},
		{ style:"height:10px" },
		// Lastly this is textarea. Which is also comes with it's decorator. Unlike normal
		// textarea, enyo has maxlength controls on it too :)
		{   
			kind: "onyx.InputDecorator",
			classes:"inputStyler", 
			components:[
				{
					kind:"onyx.TextArea",
					name:"txtAddress",
					style:'width:100%',
					placeholder:"Enter Address",
					attributes:{
						maxlength:300,
						required:"required"				
					} 
				}
			] 
		}  		
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		
	},
	getFormValues:function(){
		this.payLoad = {};
		//To do this method, make sure all controls are named.
		this.payLoad.txtName = this.$.txtName.getValue();
		this.payLoad.txtPassword = this.$.txtPassword.getValue();
		this.payLoad.isMember = this.$.checkMember.getValue();
		// This is how you access picker selected item. Should also check
		// if the values are selected for validation.
		if (this.$.pickerMemberType.selected != null){
			this.payLoad.memberType = this.$.pickerMemberType.selected.content;
		}
		// Accessing textarea is the same as input type.
		this.payLoad.txtAddress = this.$.txtAddress.getValue();
		console.log(this.payLoad);
		return this.payLoad;
	}
});
enyo.kind({
	name: "SampleForm",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable padding15px formBg",
	components: [
		{ style:"height:20px" },
		{   
			kind: "onyx.InputDecorator",
			classes:"inputStyler", 
			components: [
				{
					name:"txtName", 
					kind: "onyx.Input", 
					placeholder: "Enter a Name",
					type:"text",
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
					// Notice, I deleted the components attributes with all it's child data.
					// Given the control a name to assign components into it.
					name:"memberTypePicker",
					kind: "onyx.Picker"
				}
			]
		},
		{ style:"height:10px" },
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
		this.loadDataForMemberType();
	},
	loadTextFile:function(url,onSuccess,onError){
		// A simple ajax called that have two callbacks as parameter.
		// returns itself back to the caller. 
		var ajaxGet =  new enyo.Ajax({
			url:url,
			method:'GET',
			handleAs:'json'
		});	
		ajaxGet.go();
		ajaxGet.response(this, onSuccess);
		ajaxGet.error(this, onError);
	},

	loadDataForMemberType:function(){
		var self = this;
		console.log("Loading data from membertype.json...");
		this.loadTextFile("assets/membertype.json",onSuccess,onError);
		function onSuccess(inSender,inResponse){
			// Take note whenever you are dealing with subfunction, "this" context may differ 
			// based on it's own closure. Best to assigned "this" to another variable. See line 112.
			// According to API documentation enyo.Ajax function always returns inSender, inResponse.
			// calling this.<functioname> here will result in error, so use self instead.
			console.log(inResponse);
			self.populatePicker(inResponse.membertype);
		}
		function onError(result){
			alert("Error in loading file...");
		}
	},
	populatePicker:function(membertype){
		// destroyClientControls will always reset and make sure there's no other child component
		// attached to memberTypePicker. It is a good practice to destroy before adding. 
		this.$.memberTypePicker.destroyClientControls();
		
		// inResponse returns 3 items in an array, so, we need to create 3 items in a loop.
		// See code below. 
		
		for(var i = 0;i < membertype.length;i++){
			this.$.memberTypePicker.createComponent(membertype[i]);	
		}
		this.$.memberTypePicker.render();
		// Done rendering of all membertype array into the component of picker.
	},
	getFormValues:function(){
		this.payLoad = {};
		this.payLoad.txtName = this.$.txtName.getValue();
		this.payLoad.txtPassword = this.$.txtPassword.getValue();
		this.payLoad.isMember = this.$.checkMember.getValue();
		if (this.$.pickerMemberType.selected != null){
			this.payLoad.memberType = this.$.pickerMemberType.selected.content;
		}
		this.payLoad.txtAddress = this.$.txtAddress.getValue();
		console.log(this.payLoad);
		return this.payLoad;
	},
	setFormValues:function(param){
		//Simply just set back the value to the form.
		this.$.txtName.setValue(param.name);
		this.$.txtPassword.setValue(param.password);
		this.$.checkMember.setValue(param.isMember);
		this.$.txtAddress.setValue(param.address);
		// To set the picker to "Gold", may required a special method that iterates through
		// the picker control's in key : value search. For that, we write some function like
		// findMatchingItem which matches the picker's content to param.membertype.
		this.matchingPickerControl = this.findMatchingItem(this.$.memberTypePicker,"content",param.membertype);
		this.$.memberTypePicker.setSelected(this.matchingPickerControl);
	},	

	findMatchingItem : function( controlName, key, stringResults ){
   		var resultKey;
   		var len = controlName.controls.length;
   		var i;
   		for(i = 0; i < len; i++){
   			if (controlName.controls[i][key] == stringResults){
   				resultKey = controlName.controls[i];
   				break;
   			}
   		}
   		return resultKey;
   	},
});
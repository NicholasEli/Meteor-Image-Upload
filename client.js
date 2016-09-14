Template.newVessel.events({
	'submit #new-image'(event){
		event.preventDefault();

		const imageFile 	= document.getElementById('imageUpload').files[0],
			  reader 		= new FileReader();

		reader.onload = (event) =>{
			let base64Data = event.target.result.replace(/^data:image\/\w+;base64,/, "");
			Meteor.call('newImage', imageFile.name, base64Data);
		} 
		reader.readAsDataURL(imageFile);
	}
});
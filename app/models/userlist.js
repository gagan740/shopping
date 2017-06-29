// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called

var userData = new Schema({
  category: { type: String, required: true},
  value:{ type: String, requires: true} 
});

userData.index({ category: 1, subcategory: 1}, { unique: true });

var userlistModel = mongoose.model('userlist', userData);

module.exports = mongoose.model('userlist', userData);

/*module.exports = mongoose.model('Nerd', {
	name : {type : String, default: ''}
});*/



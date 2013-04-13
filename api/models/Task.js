/*---------------------
	:: Task
	-> model
---------------------*/
module.exports = {

	attributes	: {

		title: {
	    	type: 'STRING',
		    defaultsTo: 'Name your task!'
	    },

		status: {
	    	type: 'STRING',
		    defaultsTo: 'open'
	    },

	}

};
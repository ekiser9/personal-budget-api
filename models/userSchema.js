const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	budget: {
		required: false,
		item0: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item1: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item2: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item3: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item4: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item5: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item6: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item7: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item8: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		},
		item9: {
			title: {
				type: String,
				trim: true,
			},
			budget: {
				type: Number
			}
		}
	},
	spent: {
		item0: Number,
		item1: Number,
		item2: Number,
		item3: Number,
		item4: Number,
		item5: Number,
		item6: Number,
		item7: Number,
		item8: Number,
		item9: Number
	},
	year: {
		Jan: Number,
		Feb: Number,
		Mar: Number,
		Apr: Number,
		May: Number,
		Jun: Number,
		Jul: Number,
		Aug: Number,
		Sep: Number,
		Oct: Number,
		Nov: Number,
		Dec: Number
	}
}, { collection: 'user'});

module.exports = mongoose.model('user', userSchema);
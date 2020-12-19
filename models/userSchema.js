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
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item1: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item2: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item3: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item4: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item5: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item6: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item7: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item8: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item9: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		}
	},
	spent: {
		required: false,
		item0: {
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item1: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item2: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item3: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item4: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item5: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item6: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item7: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item8: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		},
		item9: {
			required: false,
			title: {
				type: String,
				trim: true,
				required: true
			},
			budget: {
				type: Number,
				required: true,
			}
		}
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
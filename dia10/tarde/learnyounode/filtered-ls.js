const fs = require('fs');

const filteredLs = (dirname, ext) => {
	fs.readdir(dirname, (err, data) => {
		if (err) return err;
		data.forEach((e) => {
			if (e.endsWith(`.${ext}`)) console.log(e);
		});
	});
};

const printer = (callback) => {};

filteredLs(process.argv[2], process.argv[3]);

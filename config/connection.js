var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {

	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	
	connection = mysql.createConnection({
		port: 3306,
		host: 'ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'ybqvmx7iyrgw5kn6',
		password: '	shf04wkzzdyrbpak!',
		database: '	vhcmksfq19q4g1sx'
	})
};


connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});

module.exports = connection;
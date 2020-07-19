module.exports = {
	apps: [{
		name: "app",
		script: "./index.js",
		error_file: './err.log',
		env: {
			NODE_ENV: "development",
		},
		env_production: {
			NODE_ENV: "production",
		}
	}]
}
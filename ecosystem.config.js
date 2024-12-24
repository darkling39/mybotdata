module.exports = {
  apps: [
    {
      name: 'mybotdata',
      script: 'npm',                  // Run npm command
      args: 'run serve:ssr:mybotdata', // Arguments for npm run command
      instances: 1,               // Run on all available CPU cores
      exec_mode: 'fork',           // Cluster mode for better performance
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000
      },
      watch: false,                   // Disable watch mode for production
      max_memory_restart: '500M',     // Restart if memory exceeds 500MB
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: './logs/ssr-err.log', // Error log path
      out_file: './logs/ssr-out.log',   // Standard output log path
      combine_logs: true,
      time: true                      // Append timestamps to logs
    }
  ]
};
import sql from 'mssql';

const config = {
    server: '(LocalDb)\\MSSQLLocalDB', // Use this for LocalDB
    database: 'nextjs-dashboard', // Replace with your database name
    options: {
      encrypt: false, // Encryption is not needed for LocalDB
      trustServerCertificate: true, // For self-signed certificates (if applicable)
      integratedSecurity: true, // Use Windows Authentication
    },
};

export async function connectToDatabase() {
    try {
      await sql.connect(config);
      console.log('Connected to MSSQL database');
      return sql;
    } catch (error) {
      console.error('Error connecting to MSSQL database:', error);
      throw error;
    }
};
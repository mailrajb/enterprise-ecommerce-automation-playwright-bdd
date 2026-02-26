import mysql from 'mysql2/promise';

export async function queryMySql<T = any>(sql: string, params: any[] = []): Promise<T[]> {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST ?? 'localhost',
    port: Number(process.env.MYSQL_PORT ?? 3306),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  try {
    const [rows] = await connection.execute(sql, params);
    return rows as T[];
  } finally {
    await connection.end();
  }
}

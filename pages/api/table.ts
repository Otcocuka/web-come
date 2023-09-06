import { NextApiRequest, NextApiResponse } from 'next';
import { sql, QueryResult } from '@vercel/postgres';

async function checkAndCreateTable() {
  // Проверяем, существует ли таблица "Pets"
  const existingTables: QueryResult = await sql`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    AND table_name = 'Pets';
  `;

  if (existingTables.rowCount === 0) {
    // Если таблицы "Pets" нет, то создаем ее
    await sql`
      CREATE TABLE Pets (
        Name varchar(255),
        Owner varchar(255)
      );
    `;
  }
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  try {
    // Вызываем функцию для проверки и создания таблицы
    await checkAndCreateTable();

    return response.status(200).json({ message: 'Table creation check completed.' });
  } catch (error) {
    return response.status(500).json({ error });
  }
}

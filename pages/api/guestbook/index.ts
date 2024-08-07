import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const entries = await prisma.guestbook.findMany({
    orderBy: {
      updated_at: 'desc'
    }
  });

  if (req.method === 'GET') {
    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
        avatar_url: entry.avatar_url
      }))
    );
  }

  const session = await getServerSession(req, res, authOptions);
  const { name } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
        avatar_url: session?.user?.image ?? 'N/A',
        email: session?.user?.email ?? 'N/A'
      }
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at
    });
  }

  return res.send('Method not allowed.');
}

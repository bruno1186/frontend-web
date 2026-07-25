'use client';

import { useQuery } from '@tanstack/react-query';

export interface User {
  id: number;
  name: string;
  email: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api';

async function fetchUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) {
    throw new Error('Falha ao buscar usuarios');
  }
  return res.json();
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

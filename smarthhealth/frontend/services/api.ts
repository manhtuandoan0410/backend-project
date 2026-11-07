import type { Condition } from '../src/types';

const API_BASE_URL = (import.meta as ImportMeta & 
    { env: { VITE_API_BASE_URL?: string } })
    .env.VITE_API_BASE_URL ?? 'http://localhost:8080';

export async function searchCondition(query: string): Promise <Condition> {
    const params = new URLSearchParams({ query });
    const response = await fetch(
        `${API_BASE_URL}/api/conditions?${params.toString()}`
    );

    if (!response.ok) {
        throw new Error(`Condition search failed (${response.status})`);
    }

    return response.json() as Promise<Condition>;
}
import type { Condition } from '../src/types';

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export async function searchCondition(query: string): Promise<Condition> {
    if (!API_BASE_URL) {
        throw new Error('EXPO_PUBLIC_API_BASE_URL must be configured.');
    }

    const params = new URLSearchParams({ query });
    const response = await fetch(
        `${API_BASE_URL}/api/conditions?${params.toString()}`
    );

    if (!response.ok) {
        throw new Error(`Condition search failed (${response.status})`);
    }

    return response.json() as Promise<Condition>;
}
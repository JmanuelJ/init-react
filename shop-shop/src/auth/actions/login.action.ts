import { shopApi } from '@/api/shopApi';
import type { AuthResponse } from '../interfaces/auth.response';

export const LoginAction = async (email: string, password: string): Promise<AuthResponse> => {
    try {
        const { data } = await shopApi.post<AuthResponse>('/auth/login', {
            email: email,
            password: password,
        });
        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
        throw error;

    }
};
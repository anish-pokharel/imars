import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<JsonResponse>(`http://localhost:4200/login-page`, {
            username: username,
            password: password,
        });
    }
    signup(user: User) {
        return this.http.post<JsonResponse>(`http://localhost:4200/register-page`, user);
    }
}
export interface JsonResponse {
    status?: string;
    message: string;
    body: unknown;
    user?: User;
}
export interface User {
    username: string;
    password: string;
    email: string;
    phone: number;
    address?: string;
    createdTime?: string;
    enabled?: boolean;
    isAdmin: boolean;
}
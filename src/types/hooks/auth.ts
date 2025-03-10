export interface AuthenticationState {
    attempts: number;
    loading: boolean;
    lockout: boolean;
}
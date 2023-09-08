import { createSlice } from '@reduxjs/toolkit';

export type StatusAuth = 'checking' | 'authenticated' | 'not-authenticated';

interface AuthState {
	status: StatusAuth;
	uid: string | null;
	email?: string | null;
	displayName: string | null;
	photoURL: string | null;
	errorMessage?: any;
	isUpdateProfile: boolean;
}


const initialState: AuthState = {
	status: 'not-authenticated', 
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
	isUpdateProfile: false,
};

export const persistLocalStorageState = ( authInfo : AuthState) => {
	localStorage.setItem('auth',JSON.stringify(authInfo))
}

export const authSlice = createSlice({
	name: 'auth',
	initialState : localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth') as string) as AuthState: initialState,
	reducers: {
		login: (state, { payload }: { payload: Partial<Omit<AuthState, 'status'>> }) => {
			state.status = 'authenticated';
			state.uid = payload.uid ?? '';
			state.email = payload.email;
			state.displayName = payload.displayName ?? '';
			state.photoURL = payload.photoURL ?? '';
			state.errorMessage = null;
			persistLocalStorageState(state)
		},
		logout: (state, { payload }) => {
			state.status = 'not-authenticated';
			state.uid = null;
			state.email = null;
			state.displayName = null;
			state.photoURL = null;
			state.errorMessage = payload?.errorMessage;
			localStorage.removeItem('auth')
		},
		actionUpdate: (state) => {
			state.isUpdateProfile = true;
		},

		updateUserInfo: (state, { payload }) => {
			state.isUpdateProfile = false;
		},
		checkingCredentials: state => {
			state.status = 'checking';
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	login,
	logout,
	checkingCredentials,
	updateUserInfo,
	actionUpdate,
} = authSlice.actions;

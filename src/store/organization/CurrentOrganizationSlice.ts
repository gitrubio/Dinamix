import { createSlice } from '@reduxjs/toolkit';
import { Organizationstate } from '../../interfaces/organizations.interface';


const initialState: Organizationstate = {
	id: null,
    name: '',
    avatar: '',
    rol: 'viewer'
};

export const persistLocalStorageState = ( orgInfo : Organizationstate) => {
	localStorage.setItem('currentOrg',JSON.stringify(orgInfo))
}

export const CurrentOrganizationSlice = createSlice({
	name: 'currentOrg',
	initialState : localStorage.getItem('currentOrg') ? JSON.parse(localStorage.getItem('currentOrg') as string) as Organizationstate: initialState,
	reducers: {
		changeCurrentOrg: (state, { payload } : {payload : Organizationstate}) => {
			state.id = payload.id;
			state.avatar = payload.avatar;
			state.name = payload.name;
			state.rol = payload.rol;
			persistLocalStorageState(state)
		},
		removeOrg: (state) => {
			state.id = null;
			state.avatar = '';
			state.name = '';
			state.rol = 'viewer';
			localStorage.removeItem('currentOrg')
		}
	},
});

// Action creators are generated for each case reducer function
export const {
    changeCurrentOrg,
	removeOrg,
} = CurrentOrganizationSlice.actions;

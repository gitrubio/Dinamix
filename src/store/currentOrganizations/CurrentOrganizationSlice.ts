import { createSlice } from '@reduxjs/toolkit';
import { CurrentOrganizationstate } from '../../interfaces/organizations.interface';


const initialState: CurrentOrganizationstate = {
	id: null,
    name: '',
    avatar: '',
    rol: 'viewer'
};

export const persistLocalStorageState = ( orgInfo : CurrentOrganizationstate) => {
	localStorage.setItem('currentOrg',JSON.stringify(orgInfo))
}
// localStorage.getItem('currentOrg') ? JSON.parse(localStorage.getItem('currentOrg') as string) as CurrentOrganizationstate: 
export const CurrentOrganizationSlice = createSlice({
	name: 'currentOrg',
	initialState :initialState,
	reducers: {
		changeCurrentOrg: (state, { payload } : {payload : CurrentOrganizationstate}) => {
			state.id = payload.id;
			state.avatar = payload.avatar;
			state.name = payload.name;
			state.rol = payload.rol;
			//persistLocalStorageState(state)
		},
		removeOrg: (state) => {
			state.id = null;
			state.avatar = '';
			state.name = '';
			state.rol = 'viewer';
			//localStorage.removeItem('currentOrg')
		}
	},
});

// Action creators are generated for each case reducer function
export const {
    changeCurrentOrg,
	removeOrg,
} = CurrentOrganizationSlice.actions;

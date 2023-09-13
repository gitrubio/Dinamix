import { createSlice } from '@reduxjs/toolkit';
import {  OrganizationState } from '../../interfaces/organizations.interface';
import { Collaborator } from '../../interfaces/collaborators.interface';


const initialState: OrganizationState  = {
	data: [],
	status: 'loading'
};



export const organizationSlice = createSlice({
	name: 'organizations',
	initialState : initialState,
	reducers: {
		changeOrganizations: (state, { payload } : {payload : Collaborator[] }) => {
			state.data = payload
			state.status = 'completed'
		},
		loadingOrganizations: state => {
			state.status = 'loading'
		},
	},
});

// Action creators are generated for each case reducer function
export const {
    changeOrganizations,
	loadingOrganizations
} = organizationSlice.actions;

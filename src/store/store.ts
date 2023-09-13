import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authSlice } from './auth';
import { CurrentOrganizationSlice } from './currentOrganizations';
import { organizationSlice } from './organizations';



export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        currentOrg: CurrentOrganizationSlice.reducer,
        organizations: organizationSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


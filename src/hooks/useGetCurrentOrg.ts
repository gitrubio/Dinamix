import React from 'react'
import { useAppSelector } from '../store/store'

export default function useGetCurrentOrg() {
    const organization = useAppSelector(store => store.currentOrg)
	return {
		...organization
	}
}

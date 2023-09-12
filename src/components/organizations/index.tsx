import React from 'react'
import { useStatus } from '../../hooks/useStatus'

export default function SelectOrganization() {
  const { organizations } = useStatus()
  return (
    <>
       {organizations.map((organization) => (
        <p>{organization.Organization.name}</p>
       ))}
    </>
  )
}

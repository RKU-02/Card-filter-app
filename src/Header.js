import React from 'react'

export default function Header({selectTeam,teamMemberCount}) {
  return (
    <div>
       <h2>Header</h2>
       <h1>Team Member Allocation</h1>
       <h2>{selectTeam} Has {teamMemberCount} Members</h2>
    </div>
  )
}

import React, {useContext} from 'react'
import { ChannelContext, userContext } from '../App'
import ComponenetF from './ComponenetF'

function ComponenetE() {
    const user = useContext(userContext);
    const channel = useContext(ChannelContext);
  return (
    <div>
      {user} - {channel} - {useContext(userContext)}
    </div>
  )
}

export default ComponenetE

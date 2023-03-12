import React from "react";
import { ChannelContext, userContext } from "../App";

function ComponenetF() {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                return(
                    <div>
                        user context value {user} , channel context value {channel}
                    </div>
                )
              }}
            </ChannelContext.Consumer>
          );
        }}
      </userContext.Consumer>
      {/* Component f */}
    </div>
  );
}

export default ComponenetF;

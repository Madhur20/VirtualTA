import React from "react";
import ScrollableFeed from "react-scrollable-feed";

const ScrollableChat = ({ message }) => {
  console.log(message);
  // const messages = e.target.value;
  return (
    <ScrollableFeed>
      {message &&
        message.map((msg, ind) => (
          <div key={msg.id + ind} style={{ display: "flex", width: "100vh" }}>
            <span
              style={{
                backgroundColor: `${
                  msg.id === "fromUser" ? "#BEE3F8" : "#B9F5D0"
                }`,
                borderRadius: "20px",
                padding: "5px 5px",
                maxWidth: "75%",
                marginLeft: `${msg.id === "fromUser" ? "auto" : "0px"}`,
                marginRight: `${msg.id === "fromUser" ? "0px" : "auto"}`,
                marginTop: "5px",
                overflowX: "initial",
              }}
            >
              {msg.msg}
            </span>
          </div>
        ))}
      {/* <div style={{color:"red"}}>hello</div> */}
    </ScrollableFeed>
  );
};

export default ScrollableChat;

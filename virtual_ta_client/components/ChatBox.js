import * as React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material";
import axios from "axios";
import ScrollableChat from "./ScrollableChat";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import "three-dots";

export default function ChatBox() {
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const [isExponentVisible, setIsExponentVisible] = React.useState(false);
  const [isSigmaVisible, setIsSigmaVisible] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [storeExponent, setStoreExponent] = React.useState("");
  const [storeFromSigmaValue, setStoreFromSigmaValue] = React.useState("");
  const [storeToSigmaValue, setStoreToSigmaValue] = React.useState("");
  const handleChange = (e) => {
    // console.log(e);
    const val = e.target.value;
    setQuestion(val);
  };

  function littleOmega() {
    const lilO = "ω";
    setQuestion(question + " " + lilO);
  }

  function ln() {
    const ln = "ln";
    setQuestion(question + " " + ln);
  }
  function theta() {
    const theta = "θ";
    setQuestion(question + " " + theta);
  }
  function log() {
    const log = "log";
    setQuestion(question + " " + log);
  }
  function squareRoot() {
    const root = "√";
    setQuestion(question + " " + root);
  }
  function omega() {
    const omega = "Ω ";
    setQuestion(question + " " + omega);
  }
  const sig = () => {
    setIsSigmaVisible(!isSigmaVisible);
  };
  const setSigma = (e) => {
    if (e.keyCode == "13") {
      const sig = "Σ";
      setQuestion(
        question +
          " (" +
          storeFromSigmaValue +
          " -> " +
          storeToSigmaValue +
          ")" +
          sig
      );
      setIsSigmaVisible(!isSigmaVisible);
    }
  };
  const handleInitValueChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setStoreFromSigmaValue(val);
  };
  const handleFinalValueChange = (e) => {
    const val = e.target.value;
    console.log(val);
    setStoreToSigmaValue(val);
  };
  function vis() {
    setIsExponentVisible(!isExponentVisible);
  }
  const handlePowerChange = (e) => {
    // console.log(e);
    const val = e.target.value;

    setStoreExponent(val);
  };
  const setPower = async (e) => {
    if (e.keyCode == 13) {
      let superK = "";
      for (let i = 0; i < storeExponent.length; i++) {
        if (storeExponent.charAt(i) == "0") {
          superK += "⁰";
        } else if (storeExponent.charAt(i) == "1") {
          superK += "¹";
        } else if (storeExponent.charAt(i) == "2") {
          superK += "²";
        } else if (storeExponent.charAt(i) == "3") {
          superK += "³";
        } else if (storeExponent.charAt(i) == "4") {
          superK += "⁴";
        } else if (storeExponent.charAt(i) == "5") {
          superK += "⁵";
        } else if (storeExponent.charAt(i) == "6") {
          superK += "⁶";
        } else if (storeExponent.charAt(i) == "7") {
          superK += "⁷";
        } else if (storeExponent.charAt(i) == "8") {
          superK += "⁸";
        } else if (storeExponent.charAt(i) == "9") {
          superK += "⁹";
        } else if (storeExponent.charAt(i).toLowerCase() == "a") {
          superK += "ᵃ";
        } else if (storeExponent.charAt(i).toLowerCase() == "b") {
          superK += "ᵇ";
        } else if (storeExponent.charAt(i).toLowerCase() == "c") {
          superK += "ᶜ";
        } else if (storeExponent.charAt(i).toLowerCase() == "d") {
          superK += "ᵈ";
        } else if (storeExponent.charAt(i).toLowerCase() == "e") {
          superK += "ᵉ";
        } else if (storeExponent.charAt(i).toLowerCase() == "f") {
          superK += "ᶠ";
        } else if (storeExponent.charAt(i).toLowerCase() == "g") {
          superK += "ᶢ";
        } else if (storeExponent.charAt(i).toLowerCase() == "h") {
          superK += "ʰ";
        } else if (storeExponent.charAt(i).toLowerCase() == "i") {
          superK += "ⁱ";
        } else if (storeExponent.charAt(i).toLowerCase() == "j") {
          superK += "ʲ";
        } else if (storeExponent.charAt(i).toLowerCase() == "k") {
          superK += "ᵏ";
        } else if (storeExponent.charAt(i).toLowerCase() == "l") {
          superK += "ˡ";
        } else if (storeExponent.charAt(i).toLowerCase() == "m") {
          superK += "ᵐ";
        } else if (storeExponent.charAt(i).toLowerCase() == "n") {
          superK += "ⁿ";
        } else if (storeExponent.charAt(i).toLowerCase() == "o") {
          superK += "ᵒ";
        } else if (storeExponent.charAt(i).toLowerCase() == "p") {
          superK += "ᵖ";
        } else if (storeExponent.charAt(i).toLowerCase() == "q") {
          superK += "";
        } else if (storeExponent.charAt(i).toLowerCase() == "r") {
          superK += "ᴿ";
        } else if (storeExponent.charAt(i).toLowerCase() == "s") {
          superK += "ˢ";
        } else if (storeExponent.charAt(i).toLowerCase() == "t") {
          superK += "ᵗ";
        } else if (storeExponent.charAt(i).toLowerCase() == "u") {
          superK += "ᵘ";
        } else if (storeExponent.charAt(i).toLowerCase() == "v") {
          superK += "ᵛ";
        } else if (storeExponent.charAt(i).toLowerCase() == "x") {
          superK += "ᵡ";
        } else if (storeExponent.charAt(i).toLowerCase() == "y") {
          superK += "ʸ";
        } else if (storeExponent.charAt(i).toLowerCase() == "z") {
          superK += "ᶻ";
        } else if (storeExponent.charAt(i).toLowerCase() == "w") {
          superK += "ᵂ";
        }
      }
      setQuestion(question + superK);
      setIsExponentVisible(!isExponentVisible);
      setStoreExponent("");
    }
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const sendChange = async (e) => {
    if (e.keyCode == 13) {
      setIsLoading(true);
      // console.log(question);
      const ques = {
        id: "fromUser",
        msg: question,
      };
      setMessages((messages) => messages.concat(ques));

      //await 1000 ms
      await sleep(1000);

      const ans = await fetch(
        "https://virtual-ta-render.onrender.com/" + question
      )
        .then((res) => res.json())
        .then((jsonRes) => {
          return jsonRes.answer;
          //console.log(jsonRes.answer);
        })
        .catch((e) => {
          console.log(e);
        });
      setIsLoading(false);
      setAnswer(ans);
      const data = {
        id: "fromBot",
        msg: ans,
      };

      setMessages((messages) => messages.concat(data));

      // setMessages([...messages, data]);
      setQuestion("");
    }
  };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <Box
        sx={{
          height: "90%",
          backgroundColor: "pink",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          marginTop: "3%",
          marginBottom: "10%",
          marginLeft: "20%",
          marginRight: "20%",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            width: "100%",

            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            padding: "5px",
            borderRadius: "15px",
          }}
        >
          <h1 style={{ fontFamily: "serif", color: "black" }}>
            Ask your doubts below!
          </h1>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "100%",
            maxHeight: "85%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            margin: "10px",
            padding: "10px",
            borderRadius: "15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "80%",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "15px",
              border: "1px solid pink",
            }}
          >
            <Box sx={{ width: "100%", height: "95%" }}>
              <ScrollableChat message={messages} />
            </Box>

            {/* //three dots */}
            {isLoading && (
              <Box sx={{ width: "100%" }}>
                <div style={{ padding: 10, paddingTop: 0, paddingLeft: "2%" }}>
                  <div class="dot-typing"></div>
                </div>
              </Box>
            )}
          </Box>

          <Box
            sx={{
              width: "100%",
              height: "20%",
              // border: "1px solid",
              padding: "0",
              borderRadius: "10px",
            }}
          >
            {/* //<EquationEditor> */}
            <Box sx={{ height: "40%" }}>
              <TextField
                id="text-bar"
                label="Ask Something..."
                variant="outlined"
                fullWidth
                // size="small"
                value={question}
                onChange={handleChange}
                onKeyDown={sendChange}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                height: "60%",
                padding: "1%",
                // border: "1px solid lightblue",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  border: `${isSigmaVisible ? "1px dotted grey" : "0px"}`,
                  padding: `${isSigmaVisible ? "5px" : "0px"}`,
                }}
              >
                <Button
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#F7EAEF",
                    margin: 10,
                    display: "flex",
                    justifyContent: "center",
                  }}
                  variant="outlined"
                  size="small"
                  onClick={sig}
                  // disabled={isSigmaVisible ? "true" : "false"}
                  startIcon={
                    <Avatar
                      sx={{ maxWidth: 10, maxHeight: 10 }}
                      src={"/1200px-Greek_uc_sigma.svg.png"}
                    />
                  }
                ></Button>

                {isSigmaVisible && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      marginRight: 2,
                    }}
                  >
                    <form
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "right",
                      }}
                    >
                      <table>
                        <tr
                          style={{ display: "flex", justifyContent: "right" }}
                        >
                          <tc>
                            <label>i from:</label>
                          </tc>
                          <tc>
                            <input
                              type="text"
                              name="name"
                              onChange={handleInitValueChange}
                              style={{
                                backgroundColor: "white",
                                border: "1px solid black",
                                color: "black",
                                maxWidth: "25px",
                              }}
                            />
                          </tc>
                        </tr>
                        <tr
                          style={{ display: "flex", justifyContent: "right" }}
                        >
                          <tc>
                            <label>i to:</label>
                          </tc>
                          <tc>
                            <input
                              type="text"
                              name="name"
                              onChange={handleFinalValueChange}
                              onKeyDown={setSigma}
                              style={{
                                backgroundColor: "white",
                                border: "1px solid black",
                                color: "black",
                                maxWidth: "25px",
                              }}
                            />
                          </tc>
                        </tr>
                      </table>
                    </form>
                    {/* <TextField
                      value={storeFromSigmaValue}
                      onChange={handleInitValueChange}
                      onKeyDown={setPower}
                      id="sigmaFrom"
                      label="i from"
                      style={{ width: 65, marginLeft: 10 }}
                      size="small"
                    ></TextField> */}
                    {/* <TextField
                      value={storeToSigmaValue}
                      onChange={handleFinalValueChange}
                      onKeyDown={setPower}
                      id="sigmaTo"
                      label="i to"
                      style={{ maxWidth: 65, marginLeft: 10 }}
                      size="small"
                    ></TextField> */}
                  </Box>
                )}
              </Box>

              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={theta}
                startIcon={<Avatar src={"/theta.png"} />}
              ></Button>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={log}
                startIcon={
                  <Avatar
                    style={{ justifyContent: "center", display: "flex" }}
                    src={"/log.png"}
                  />
                }
              ></Button>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={ln}
                startIcon={<Avatar src={"/ln.png"} />}
              ></Button>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={squareRoot}
                startIcon={<Avatar src={"/square-root.png"} />}
              ></Button>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={littleOmega}
                startIcon={<Avatar src={"/omega.png"} />}
              ></Button>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {!isExponentVisible && (
                  <Button
                    style={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#F7EAEF",
                      margin: 10,
                    }}
                    variant="outlined"
                    onClick={vis}
                    startIcon={
                      <Avatar
                        style={{
                          justifyContent: "center",
                          display: "flex",
                          alignItems: "center",
                          lineHeight: 0,
                          letterSpacing: 0,
                          flexDirection: "column",
                        }}
                        src={"/x^y.png"}
                      />
                    }
                  ></Button>
                )}
                {isExponentVisible && (
                  <TextField
                    value={storeExponent}
                    onChange={handlePowerChange}
                    onKeyDown={setPower}
                    id="power"
                    label="y="
                    style={{ width: 65, marginLeft: 10 }}
                  ></TextField>
                )}
              </Box>
              <Button
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#F7EAEF",
                  margin: 10,
                }}
                variant="outlined"
                onClick={omega}
                startIcon={<Avatar src={"bigOmega.png"} />}
              ></Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

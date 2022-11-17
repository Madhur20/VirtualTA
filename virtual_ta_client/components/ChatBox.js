import * as React from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material";
import axios from "axios";
import ScrollableChat from "./ScrollableChat";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import "three-dots";
// import { View, Text } from "react-native";
// import "katex/dist/katex.min.css";

var Latex = require("react-latex-next");

export default function ChatBox() {
  const messageType = [
    {
      id: String,
      msg: String,
    },
  ];

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
  function square() {
    const sigma = "²";
    // console.log(sigma);
    setQuestion(question + sigma);
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
    const sig = "Σ";
    setQuestion(question + " " + sig);
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
        "https://virtual-ta-server.herokuapp.com/" + question
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

  // const l = `$$\\frac_{1}{2}$$`;

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
                  border: `${isSigmaVisible ? "1px solid grey" : "0px"}`,
                  padding: `${isSigmaVisible ? "5px" : "0px"}`,
                }}
              >
                <Button
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#F7EAEF",
                    margin: 10,
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
                    <TextField
                      value={storeFromSigmaValue}
                      onChange={handleInitValueChange}
                      onKeyDown={setPower}
                      id="sigmaFrom"
                      label="i from"
                      style={{ width: 65, marginLeft: 10 }}
                      size="small"
                    ></TextField>
                    <TextField
                      value={storeToSigmaValue}
                      onChange={handleFinalValueChange}
                      onKeyDown={setPower}
                      id="sigmaTo"
                      label="i to"
                      style={{ maxWidth: 65, marginLeft: 10 }}
                      size="small"
                    ></TextField>
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
              {/* <Button variant="outlined: url(1200px-Greek_uc_sigma.svg.png)" ></Button>  */}
              {/* <Latex>{`Hello $x^2$ value $\\frac{1}{2}$ and $\\sum_{n=1}^{\infty} 2^{-n}$`}</Latex> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

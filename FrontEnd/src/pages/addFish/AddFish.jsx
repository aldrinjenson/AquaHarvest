import React, { useState, useRef, useEffect } from "react";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import { useContext } from "react";
import "../addtank/Addtank.css";
import { ThemeContext } from "../../App";
import { Autocomplete } from "@mui/material";
import { useNavigate } from "react-router";

export default function Addfarm() {
  const [dis, setDis] = useState(false);
  const { state, setState } = useContext(ThemeContext);
  // const ref0 = useRef();
  function handleSubmit(event) {
    console.log(state);
    event.preventDefault();
    navigate("/sensor");
    // axios.post('http://localhost:3000/getProgress',{})
  }
  const navigate = useNavigate();
  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    setState((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function Arraygenerate() {
    const num = state.ftype;
    var arr = [];
    for (let i = 0; i < num; i++) {
      arr[i] = i;
    }
    return arr;
  }
  var arr = Arraygenerate();
  arr = [0];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#4CE0D2",
          height: "30vh",
          width: "100vw",
          position: "absolute",
          top: "0px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setDis(true)} className="button2">
          <p>Add A New Fish</p>
          <AddIcon
            sx={{
              "& .MuiSvgIcon-root": {
                color: "black",
                marginLeft: "15px",
                border: "2px black solid",
                borderRadius: "5px",
              },
              "& .MuiSvgIcon-root:hover": {
                color: "#4CE0D2",
                borderColor: "#4CE0D2",
              },
            }}
          />
        </button>
      </div>
      <div
        style={{
          zIndex: dis ? "1000000" : "0",
          display: dis ? "flex" : "none",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
          minHeight: "90vh",
          width: "90vw",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2)",
          backgroundColor: "white",
          top: "0",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ margin: "30px 0" }}
          className="parent-form1"
        >
          {arr.map((value, index) => {
            console.log(value);
            return (
              <div key={index}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2>Enter Fish Name: </h2>
                  <TextField
                    InputProps={{ style: { color: "black" } }}
                    InputLabelProps={{
                      style: { color: "#22AAA1" },
                    }}
                    variant="outlined"
                    label="Fish Name"
                    name="fname"
                    required
                    autoComplete="off"
                    value={state.fname}
                    onChange={handleChange}
                    sx={{
                      width: "40vw",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#4CE0D2",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#4CE0D2",
                        },
                      },
                      "& .MuiOutlinedInput-root:hover": {
                        "& fieldset": {
                          borderColor: "#4CE0D2",
                        },
                      },
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  {/* <img href="https://thumbs.dreamstime.com/b/fresh-sardine-fish-18086703.jpg" alt='fish image' style={{height:'200px',weight:'300px'}}></img> */}
                  {/* #22AAA1   #4CE0D2 */}
                  <div
                    style={{
                      width: "40vw",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <label style={{ fontSize: "1.3rem", width: "50%" }}>
                      Enter number of fishes:
                    </label>
                    <TextField
                      InputProps={{ style: { color: "black" } }}
                      InputLabelProps={{
                        style: { color: "#22AAA1" },
                      }}
                      variant="outlined"
                      label="Fish Number"
                      name="fnum"
                      type="number"
                      required
                      autoComplete="off"
                      value={state.fnum}
                      onChange={handleChange}
                      sx={{
                        width: "40vw",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#4CE0D2",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CE0D2",
                          },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& fieldset": {
                            borderColor: "#4CE0D2",
                          },
                        },
                      }}
                    />
                  </div>
                  <div
                    style={{
                      width: "40vw",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "30px",
                    }}
                  >
                    <label style={{ fontSize: "1.3rem", width: "50%" }}>
                      Enter starting date of breeding:{" "}
                    </label>
                    <TextField
                      InputProps={{ style: { color: "black" } }}
                      InputLabelProps={{
                        style: { color: "#22AAA1", display: "none" },
                      }}
                      variant="outlined"
                      label=""
                      name="fdate"
                      type="date"
                      required
                      autoComplete="off"
                      value={state.fdate}
                      onChange={handleChange}
                      sx={{
                        width: "40vw",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#4CE0D2",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "#4CE0D2",
                          },
                        },
                        "& .MuiOutlinedInput-root:hover": {
                          "& fieldset": {
                            borderColor: "#4CE0D2",
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <button className="button2">
            <p
              style={{ fontFamily: "'Poppins',sans-serif", fontSize: "1.5rem" }}
            >
              Submit
            </p>
          </button>
        </form>
      </div>
    </div>
  );
}

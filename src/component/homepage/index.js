import React, { useState, useRef, useEffect } from "react";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";

import Header from "../../reusable/header";

const sampleUsers = [
  {
    id: "#225",
    name: "Almer Glasses",
  },
  {
    id: "#226",
    name: "Almer Glasses",
  },
  {
    id: "#227",
    name: "Almer Glasses",
  },
  {
    id: "#228",
    name: "Almer Glasses",
  },
  {
    id: "#229",
    name: "Almer Glasses",
  },
  {
    id: "#230",
    name: "Almer Glasses",
  },
  {
    id: "#231",
    name: "Almer Glasses",
  },
  {
    id: "#232",
    name: "Almer Glasses",
  },
];
export default function Home() {
  const videoContainerRef = useRef(null);
  const memberListContainerRef = useRef(null);

  //this will use to hide or show video
  const [cameraOpen, setCameraOpen] = useState(true);
  //this will use to mute or unmute mic in video
  const [micOpen, setMicOpen] = useState(true);
  //this will render calling state when call button press
  const [calling, setCalling] = useState(false);
  //this will save which user we will be calling
  const [callTo, setCallTo] = useState(null);
  //members in company you can call
  const [availableUsers, setAvailableUsers] = useState(sampleUsers);

  useEffect(() => {
    memberListContainerRef.current.style.maxHeight = `${videoContainerRef.current.clientHeight}px`;
  }, [videoContainerRef]);
  const memberList = (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h5">Almer Glasses in your company</Typography>
      </Grid>
      {/* list of user */}
      {availableUsers.map((item) => (
        <Grid item style={{ marginTop: "10px" }} key={item.id}>
          {/* user */}
          <Grid container component={Paper} style={{ padding: "20px 25px" }}>
            {/* name */}
            <Grid item>
              <Typography
                variant="h6"
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="16"
                  fill="none"
                  viewBox="0 0 26 16"
                >
                  <path
                    fill="#1D1D1B"
                    d="M6.693 5.987H3V11h3.693V5.987z"
                  ></path>
                  <path fill="#1D1D1B" d="M26 0H0v6.718h26V0z"></path>
                  <path
                    fill="#1D1D1B"
                    d="M17.558 16h-3.275l-1.354-2.017L11.574 16H8.537l3.266-4.864V4.681h2.488v6.455L17.558 16z"
                  ></path>
                </svg>
                {item.name} {item.id}
              </Typography>
            </Grid>
            {/* call button */}
            <Grid item>
              <Button variant="contained" size="small" startIcon={<CallIcon />}>
                Call
              </Button>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );

  const preCallVideo = (
    <Grid container justifyContent="center">
      <Grid item>
        <div
          ref={videoContainerRef}
          style={{ width: "391px", height: "517px" }}
        ></div>
      </Grid>
      <Grid
        item
        ref={memberListContainerRef}
        style={{
          overflow: "auto",
          height: videoContainerRef?.current?.clientHeight,
          maxHeight: videoContainerRef.current?.clientHeight,
        }}
      >
        {memberList}
      </Grid>
    </Grid>
  );

  const callingScreen = <div></div>;

  const inCall = <div></div>;
  return (
    <Grid
      container
      direction="column"
      style={{ minHeight: "90vh", padding: "10px" }}
    >
      <Grid item style={{ width: "100%" }}>
        <Header />
      </Grid>
      <Grid
        item
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {preCallVideo}
      </Grid>
    </Grid>
  );
}

import React, { useState } from "react";
import { useContext } from "react";
import JobListingCard from "../../components/JobListingCard";

import {
  Container,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Divider,
  Link,
  CircularProgress, // Import CircularProgress for the loading spinner
} from "@mui/material";
import GoogleIcon from "../../assets/google.svg";
import TwitterIcon from "../../assets/twitter.svg";
import LinkedInIcon from "../../assets/linkedin.svg";
import FilterSidebar from "../../components/JobsFilter";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useUser } from "../../components/UserContext";
const JobsPage = () => {
  const navigate = useNavigate();
  // const { user, loginUser } = useUser(); // Destructure user and loginUser from useUser

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading spinner

  const [filters, setFilters] = useState({
    company: "",
    location: "",
    skills: "",
    position: "",
  });

  // Handler for applying filters
  const handleFilterSubmit = () => {
    // Implement filter logic here to filter job listings based on filter values
    console.log("Applying filters:", filters);
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    // try {
    //   setLoading(true);

    //   const response = await fetch(
    //     // "https://innovate-x-hackathon.vercel.app/login",
    //     "http://localhost:3000/login",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         email,
    //         password,
    //       }),
    //     }
    //   );

    //   if (response.ok) {
    //     const userData = await response.json();
    //     console.log("Logged IN");
    //     // Update user context with email and other user data
    //     // loginUser(userData);
    //     // console.log(userData[0]);
    //     // console.log(JSON.stringify(userData));
    //     // localStorage.setItem("user", JSON.stringify(userData[0]));
    //     // localStorage.setItem(
    //     //   "userCollection",
    //     //   JSON.stringify(userData[1].collection)
    //     // );
    //     // localStorage.setItem("isLoggedIn", "true");

    //     // setLoading(false);
    //     // navigate("/profile-settings");
    //   } else {
    //     console.error("Login failed");
    //     setLoading(false);
    //   }
    // } catch (error) {
    //   console.error("Error during login:", error);
    //   setLoading(false);
    // }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "80vh" }}
    >
      <Grid item xs={3} alignSelf={"flex-start"} sx={{ marginX: "30px" }}>
        {" "}
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          handleFilterSubmit={handleFilterSubmit}
        />
      </Grid>
      <Divider
        orientation="vertical"
        sx={{ borderRightWidth: 2 }}
        variant="middle"
        flexItem
      />

      <Grid
        item
        xs={9}
        sx={{ justifyContent: "center" }}
        justifyContent="center"
      ></Grid>
    </Grid>
  );
};

export default JobsPage;

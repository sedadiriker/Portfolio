import { Box, Grid } from "@mui/material";

const Home = () => {
  return (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      
    }}
  >
    <Box
      width="50%"
      height="100%"
      sx={{
        backgroundColor: "#C0A68F80",
      }}
    />
    <Box
      width="50%"
      height="100%"
     sx={{backgroundColor:"#F3F3F3"}}
    />
    <Box width={"95%"} height={"90%"} sx={{ position:"absolute" }}>
        <Grid
          container
          sx={{
            height: "100%",
            boxShadow: "1px 1px 40px gray",
          }}
        >
          <Grid item xs={12} md={6} >
            
          </Grid>
          <Grid item xs={12} md={6} sx={{backgroundImage:"url(images/boho-art-7375748_1280.jpg)"}}>
          </Grid>
        </Grid>
      </Box>
  </Box>
  );
};

export default Home;

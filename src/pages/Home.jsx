import { Box, Button, Grid } from "@mui/material";
import "./Home.css"
import { useNavigate } from "react-router-dom";


const Home = () => {
const navigate = useNavigate()
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
        backgroundColor: {xs:"#F3F3F3", md:"#C0A68F80"},
      }}
    />
    <Box
      width="50%"
      height="100%"
     sx={{backgroundColor:"#F3F3F3"}}
    />

    //! Logo
    <Box width={"95%"} height={"90%"} sx={{ position:"absolute" }}>
        <Grid
          container
          sx={{
            height: "100%",
            boxShadow: "1px 1px 40px gray",
            
          }}
        >
          
          <Grid item xs={12} md={6} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"center"} sx={{ backgroundColor:"#DFD2C6", overflow:"hidden"}} pl={5} position={"relative"} >
          <Box className="parag-1" component={"p"} fontSize={"2.2rem"}>Hi, I am Seda,
          </Box>
          <Box className="parag-2" component={"p"} fontSize={"1.2rem"}>I am a constantly self-improving, <br /> passionate <span style={{fontSize:"2rem", color:"#426971"}}>Frontend Developer</span>.
          </Box>
          <Box mt={5} alignSelf={"center"} display={"flex"} gap={3}>
            <Button onClick={()=>navigate("/project")} className="btn" sx={{border:"1px solid #426971", color:"#426971"}}>View my projects</Button>
            <Button onClick={()=> navigate("/contact")} className="btn" sx={{border:"1px solid #426971", color:"#426971"}}>Contact Me</Button>
          </Box>

          <Box position={"absolute"} top={20} left={10} fontFamily={'"Pacifico", cursive;'} fontSize={"1.8rem"} letterSpacing={2} color={"#426971"} sx={{textShadow:"1px 1px 2px black"}}>Seda Diriker</Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{backgroundImage:"url(images/boho-art-7375748_1280.jpg)", backgroundPosition:{xs:"top", md:"top left"}, backgroundSize:{xs:"cover", md:"auto"}, backgroundRepeat:"no-repeat"}}>
          </Grid>
        </Grid>
      </Box>
  </Box>
  );
};

export default Home;

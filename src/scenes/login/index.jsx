import { Box, Button } from '@mui/material';

const Login = () => {
  return (
    
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="60vh"
    >
    <Box display="flex" justifyContent="center" alignItems="center">
        <img
            alt="logo"
            width="80px"
            height="80x"
            src={`../../assets/wg_logo.png`}
            style={{ cursor: "pointer"}}
            backgroundColor="#2AAA8A"
        />
            </Box>
      <Box mb={2}>
        <h1>WELCOME TO LUPIN</h1>
      </Box>
      
      <Button href="/home" variant="contained" color="secondary">
        Login Here
      </Button>
    </Box>
  );
};

export default Login;

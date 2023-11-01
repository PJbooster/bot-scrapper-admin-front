import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Checkbox from "./components/Checkbox";
import Select from "./components/Select";
import { Bet, bets, leagues } from "./const";
import MultiSelect from "./components/MultiSelect";
import LogoCard from "./LogoCard";

function App() {
  return (
    <>
      <Container maxWidth="md">
        <LogoCard />
        <Card variant="outlined" sx={{ marginTop: "50px", padding: "20px" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Liga jebana
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12}>
              <Box>
                <MultiSelect<string> label="Liga" options={leagues} />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box>
                <MultiSelect<Bet> label="Bety" options={bets} />
              </Box>
            </Grid>

            <Grid container>
              <Grid item xs={12} mt={5}>
                <Box display="flex" justifyContent="center">
                  <Button variant="contained" color="success">
                    GENERUJ KUPON
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={2} sm={4} md={4}>
              <Box></Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
}

export default App;

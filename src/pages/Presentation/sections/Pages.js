import { Link } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

import ExampleCard from "pages/Presentation/components/ExampleCard";

import data from "pages/Presentation/sections/data/pagesData";

function Pages() {
  const renderData = data.map(({ image, name, route }) => (
    <Grid item xs={12} md={6} sx={{ mb: { xs: 3, lg: 0 } }} key={name}>
      <Link to={route}>
        <ExampleCard image={image} name={name} display="grid" minHeight="auto" />
      </Link>
    </Grid>
  ));

  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            // badgeContent="boost creativity"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Qualquer pessoa pode aprender wakeboard
          </MKTypography>
          <MKTypography variant="body1" color="text">
            Se divertir aqui é o objetivo!
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={9} sx={{ mt: 3, px: { xs: 0, lg: 8 } }}>
            <Grid container spacing={3}>
              {renderData}
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Uma oportunidade de praticar esse esporte com mais facilidade e em meio a natureza.
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Ilhabela é a Capital da Vela, mas quando o vento não sopra o Wakeboard é a saída
                perfeita para não ficar sentado olhando o mar calmo.
              </MKTypography>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Pages;

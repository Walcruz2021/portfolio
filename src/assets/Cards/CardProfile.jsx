//npm install @mui/joy @emotion/react @emotion/styled
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import walterFotoRedSocial from "../../img/walterFotoRedSocial.png";
import "./CardProfile.css";
export default function CardProfile() {
  return (
    <div className="container-card-profile">
      <Box
        sx={{
          width: "100%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
            <img src={walterFotoRedSocial} alt="" />
          </AspectRatio>
          <CardContent>
            <Typography sx={{ fontSize: "2rem", fontWeight: "lg" }}>
              Walter Cruz
            </Typography>
            <Typography
              level="body-sm"
              textColor="text.tertiary"
              sx={{ fontWeight: "lg",fontSize: "1.5rem" }}
            >
              Full Stack Developer
            </Typography>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" sx={{ fontWeight: "lg",fontSize: "1.5rem" }}>
                  Edad
                </Typography>
                <Typography sx={{ fontWeight: "lg",fontSize: "1.5rem" }}>37</Typography>
              </div>
              <div>
                <Typography level="body-xs" sx={{ fontWeight: "lg",fontSize: "1.5rem" }}>
                  Provincia
                </Typography>
                <Typography sx={{ fontWeight: "lg",fontSize: "1.5rem" }}>Salta</Typography>
              </div>
              <div>
                <Typography level="body-xs" sx={{ fontWeight: "lg",fontSize: "1.5rem" }}>
                  Pais
                </Typography>
                <Typography sx={{ fontWeight: "lg" ,fontSize: "1.5rem"}}>Argentina</Typography>
              </div>
            </Sheet>
            <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 ,fontSize: "1.5rem"} }}>
              <Button variant="outlined" color="neutral" onClick={() => window.open('https://www.linkedin.com/in/walcruz1988/', '_blank')}>
                Linkedin
              </Button>
              <Button variant="solid" color="primary" onClick={() => window.open('https://github.com/Walcruz2021', '_blank')}>
                Github 
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

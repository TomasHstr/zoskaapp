// /app/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

export const metadata = { title: "domov | ZoškaSnap" };

export default async function home() {
        const session = await getServerSession(authOptions);
    
        if (!session) {
          return <Typography >
            Registruj sa
          </Typography>;
        }

    
        return (
            <Container>
              <Typography> Domovská stránka - prihlásený user</Typography>
              <Typography variant="h4" sx={{ mb: 3 }}>
                Vitajte, {session?.user?.name || "užívateľ"}!
              </Typography>
            </Container>
          );
}
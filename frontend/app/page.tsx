import { Button, Container } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Container>
        <Button variant="contained" href="/create-room">部屋を作成</Button>
        <Button variant="contained" href="/join-room">部屋に参加</Button>
      </Container>
    </div>
  );
}

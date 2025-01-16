"use client";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Button variant="contained" href="/create-room" style={{ marginBottom: '20px', fontSize:"1.8em", width:"300px"}}>部屋を作成</Button>
      <Button variant="contained" href="/join-room" color="inherit" style={{fontSize:"1.5em", width:"300px"}}>部屋に参加</Button>
    </div>
  );
}

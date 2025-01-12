"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateRoom() {
    const [userName, setUserName] = useState("");
    const [roomName, setRoomName] = useState("");
    const router = useRouter();

    const handleCreateRoom = async () => {
        // ここで部屋を作成する処理を書く
        // ダミーデータ
        const data = {
            roomId: "dummy-room-id",
        }

        router.push(`/room/${data.roomId}`);
    }
    return (
        <div>
            <h1>部屋を作成</h1>
            <div>
                <label htmlFor="user-name">ユーザー名</label>
                <input type="text" id="user-name" onBlur={(e)=>setUserName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="room-name">部屋名</label>
                <input type="text" id="room-name" onBlur={(e)=>setRoomName(e.target.value)} />
            </div>
            <button onClick={handleCreateRoom}>作成</button>
        </div>
    );
}
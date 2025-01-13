import { useRouter } from "next/router";
import { useState } from "react";

export default function JoinRoom() {
    useState("");

    const router = useRouter();

    const handleJoinRoom = async () => {
        // ここで部屋に参加する処理を書く
        // ダミーデータ
        const data = {
            roomId: "dummy-room-id",
        }

        router.push(`/room/${data.roomId}`);
    }

    return (
        <div>
            <h1>部屋に参加</h1>
            <div>
                <label htmlFor="user-name">ユーザー名</label>
                <input type="text" id="user-name" />
            </div>
            <div>
                <label htmlFor="room-id">部屋ID</label>
                <input type="text" id="room-id" />
            </div>
            <button onClick={handleJoinRoom}>参加</button>
        </div>
    );
}
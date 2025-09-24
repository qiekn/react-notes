import Image from "next/image";

import Board from "./components/square.js";

export default function Home() {
  return (
    <div>
      <h1>井字棋</h1>
      <Board />
    </div>
  )
}

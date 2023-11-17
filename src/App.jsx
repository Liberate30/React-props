import Name from "./components/Name"
import ImageCard from "./components/imageCard"
import bitvaultex from './assets/images/bitvaultex-symbol.png'
import dums from './assets/images/dumsdev-DP.jpg'
import smtp from './assets/images/smtp-harmon.png'
import todo from './assets/images/todo-chain.png'

  
function Kim() {
  return (
    <>
      <ImageCard ebuka={bitvaultex} />
      <ImageCard ebuka={dums} />
      <ImageCard ebuka={smtp} />
      <ImageCard ebuka={todo} />
      <Name />
    </>
  )
}

export default Kim
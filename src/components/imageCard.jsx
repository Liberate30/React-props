import todo from '../assets/images/todo-chain.png'

function ImageCard({ebuka}) {
    return (
        <>
          <img style={{height:200, width: 250}} src={ebuka || todo} alt="" />
        </>
    )
}

export default ImageCard;
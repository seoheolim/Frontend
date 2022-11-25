import { TailSpin } from "react-loader-spinner"


function Loading() {
    return (
        <TailSpin
            type="oval"
            color="white"
            height={30}
            width={30}
            timeout={3000}
        >
        </TailSpin>
    )
}

export default Loading
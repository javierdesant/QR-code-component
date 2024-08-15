import { FunctionComponent } from "react";

interface QRcodeProps {
    
}
 
const QRcode: FunctionComponent<QRcodeProps> = () => {
    return ( 
        <div className="flex">
            <div className=" w-72 mt-10 border-solid border-black border-2 h-auto bg-white mx-auto">

                <img 
                    src="/image-qr-code.png" 
                    alt="Frontend Mentor QRcode"
                    className=" w-64 h-64 mx-auto mt-4 mb-4" 
                />

                <p className=" m-4 text-center font-outfit font-bold">
                    Improve your front-end skills by building projects
                </p>

                <p className=" m-4 text-center font-outfit">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>

            </div>
        </div>

     );
}
 
export default QRcode;
import { FunctionComponent } from "react";

interface QRcodeProps {
    
}
 
const QRcode: FunctionComponent<QRcodeProps> = () => {
    return ( 
        <div className=" ">

            <img 
                src="public/image-qr-code.png" 
                alt="Frontend Mentor QRcode" 
            />

            <p>
                Improve your front-end skills by building projects
            </p>

            <p>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>

        </div>
     );
}
 
export default QRcode;
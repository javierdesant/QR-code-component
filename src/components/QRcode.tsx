import { FunctionComponent } from "react";

interface QRcodeProps {
    
}
 
const QRcode: FunctionComponent<QRcodeProps> = () => {
    return ( 
        <div className=" flex">
            <div className=" w-auto rounded-2xl border-2 h-auto bg-white mx-auto">

                <img 
                    src="/image-qr-code.png" 
                    alt="Frontend Mentor QRcode"
                    className=" w-56 h-56 m-3 rounded-lg" 
                />

                <div className="w-60 mx-auto">
                    <p className=" mx-4 text-center font-outfit font-bold text-slate-900 text-lg leading-tight">
                        Improve your front-end skills by building projects
                    </p>

                    <p className=" mb-6 mt-3 mx-4 text-center font-outfit text-slate-500 text-xs leading-tight">
                        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                    </p>
                </div>



            </div>
        </div>

     );
}
 
export default QRcode;
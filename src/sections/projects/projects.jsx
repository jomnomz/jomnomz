import scanpassLogin from '../../assets/scanpassLogin.png'
import scanpassLogo from '../../assets/scanpassLogo.png'
import Button from '../../components/ui/button.jsx'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Projects() {
    return (
        <div className="md:mx-45">
            <div class="flex flex-rpw justify-between">
                <div class="text-3xl ml-6">Projects</div>
                <div class="mr-5">
                    <div><Button border="borderLess">All Projects <ArrowForwardIcon></ArrowForwardIcon></Button></div>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center m-7">
                <div className="flex flex-col gap-5 md:flex-row">

                    {/* Project Card 1 */}
                    <div className="group">
                        <div className="bg-gray-800 flex justify-center items-center p-2 rounded-tl-lg rounded-tr-lg md:py-9">
                            <div className="w-xs md:w-sm">
                                <img
                                    className="rounded-sm transition-transform duration-300 group-hover:scale-110"
                                    src={scanpassLogin}
                                    alt="ScanPass login screenshot"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-bl-lg rounded-br-lg p-2 md:p-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row gap-3">
                                    <div>
                                        <div className="w-12">
                                            <img src={scanpassLogo} alt="ScanPass logo" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center items-start -mt-1">
                                        <div className="text-lg">ScanPass</div>
                                        <div>QR Code-Based Attendance Tracking System</div>
                                    </div>
                                </div>
                                <div className="md:max-w-lg">
                                    <div>ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Card 2 */}
                    <div className="group">
                        <div className="bg-gray-800 flex justify-center items-center p-2 rounded-tl-lg rounded-tr-lg md:py-9">
                            <div className="w-xs md:w-sm">
                                <img
                                    className="rounded-sm transition-transform duration-300 group-hover:scale-110"
                                    src={scanpassLogin}
                                    alt="ScanPass login screenshot"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col border rounded-bl-lg rounded-br-lg p-2 md:p-5">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-row gap-3">
                                    <div>
                                        <div className="w-12">
                                            <img src={scanpassLogo} alt="ScanPass logo" />
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <div className="text-lg">ScanPass | QR Code-Based Attendance Tracking System</div>
                                    </div>
                                </div>
                                <div className="md:max-w-lg">
                                    <div>ScanPass is a QR code-based attendance system that replaces manual tracking in schools, letting teachers see student time-in/time-out...</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
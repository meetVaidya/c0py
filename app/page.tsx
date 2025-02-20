import SendInputArea from "@/components/SendInputArea";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                <h1 className="text-9xl font-black mt-28 mb-20 font-geistmono">
                    Send
                </h1>
            </div>

            <SendInputArea />
        </div>
    );
}

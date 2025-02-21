"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function SendInputArea() {
    const [sent, setSent] = useState(false);

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault(); // Prevent default form submission behavior
        setSent(true);
    };

    return (
        <div className="flex px-10 w-full gap-3 justify-center">
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <Textarea className="h-96" />
                <div className="flex mt-4">
                    <Button type="submit" className="w-full lg">
                        Send
                    </Button>
                </div>
            </form>

            {sent && (
                <div className="mb-12 p-4 bg-gray-100 border rounded-lg">
                    <p>Message sent successfully!</p>
                </div>
            )}
        </div>
    );
}

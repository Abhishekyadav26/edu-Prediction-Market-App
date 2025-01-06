import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain } from "thirdweb/chains";
import Link from "next/link";

export function Navbar() {
    
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold"><Link href="./">Prediction Market</Link></h1>
            <div className="items-center flex gap-2">
                <ConnectButton 
                    client={client} 
                    theme={lightTheme()}
                    chain={defineChain(656476)}
                    connectButton={{
                        style: {
                            fontSize: '0.75rem !important',
                            height: '2.5rem !important',
                        },
                        label: 'Sign In',
                    }}
                />
            </div>
        </div>
    );
}
import { client } from "@/app/client";
import { defineChain, getContract } from "thirdweb";

export const contractAddress = "0xC627379e0E36857Bb57cD69397d0BBB80F90D99d";
export const tokenAddress = "0x351E5893aceF399a6F3A3b93A9cb9D81546B4849";

export const contract = getContract({
    client: client,
    chain: defineChain(656476),
    address: contractAddress
});

export const tokenContract = getContract({
    client: client,
    chain: defineChain(656476),
    address: tokenAddress
});
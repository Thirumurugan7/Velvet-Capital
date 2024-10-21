import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { motion } from "framer-motion";
import {
  ConnectButton,
//   getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { useAccount } from "wagmi";


// const { address, isConnected } = useAccount();


const CustomButton = () => {
  return (
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              authenticationStatus,
              mounted,
            }) => {
              const ready = mounted && authenticationStatus !== "loading";
              const connected =
                ready &&
                account &&
                chain &&
                (!authenticationStatus ||
                  authenticationStatus === "authenticated");

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <motion.button
                          className="text-white w-[455px] h-[48px] bg-gradient-to-t from-[#492C81]/60 to-[#7343D2]/60 border border-[#7343D2] hover:from-[#492C81]/30 hover:to-[#7343D2]/30 font-bold rounded-t-[32px] flex justify-center items-center shadow-lg"
                          onClick={openConnectModal}
                          type="button"
                          whileTap={{ scale: 0.9 }}
                        >
                          Connect Wallet
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 pl-2"
                          >
                            <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                          </svg>
                        </motion.button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <motion.button
                          className=" text-white w-[455px] h-[48px] bg-gradient-to-t from-[#492C81]/60 to-[#7343D2]/60 border border-[#7343D2] hover:from-[#492C81]/30 hover:to-[#7343D2]/30 font-bold rounded-t-[32px]"
                          onClick={openChainModal}
                          type="button"
                          whileTap={{ scale: 0.9 }}
                        >
                          Wrong network
                        </motion.button>
                      );
                    }

                    return (
                      <div className="w-[455px] h-[48px]">
                        <motion.button
                          className=" text-white p-2 w-full h-[48px] bg-gradient-to-t from-[#492C81]/60 to-[#7343D2]/60 border border-[#7343D2] hover:from-[#492C81]/30 hover:to-[#7343D2]/30 font-bold rounded-t-[32px]"
                          onClick={openAccountModal}
                          whileTap={{ scale: 0.9 }}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </motion.button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
  );
};

export default CustomButton;
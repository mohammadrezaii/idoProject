import React, { useState, useEffect } from "react";
import NavBar from "../../components/layout/navBar";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  SummaryDetail,
  AddressInput,
  DetailWrapper,
  ImageSection,
  JoinButtonContainer,
  ListSection,
} from "./style/DetailContainer.style";
import MobileProgressBar from "../AllPools/progress-bar/mobile-progressBar";
import { PhoneIdoHeader } from "../AllPools/poolsItem.style";
import Social from "./components/Social";

const PoolsDetail = ({ darkMode, navigation }) => {
  const BSCAddress = "0x972C960384F60F4a3bfc33982bEC8Ce1F7E5f7Ee";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-darkMode-600 min-h-screen">
      <div className="container mx-auto">
        <NavBar darkMode={darkMode} navigation={navigation} />
      </div>
      <div className={"container mx-auto px-4 lg:px-14"}>
        <DetailWrapper>
          <ImageSection className={"bg-darkMode-800"}>
            <div className="p-6 flex flex-col items-center w-full">
              <MobileProgressBar
                image={"/image/coins/dotmoovs.jpg"}
                percentage={"30"}
                display={"inline-block"}
              />
              <h2 className="font-semibold mt-4 text-2xl">Royale Finance</h2>
              <PhoneIdoHeader className="self-center text-white mt-1.5 font-bold text-lg">
                {46}% <span className="font-medium text-sm">sold</span>
              </PhoneIdoHeader>
              <Social />
              <JoinButtonContainer className="space-x-4">
                <button className="bg-green-400 rounded-full px-5 py-2 font-medium focus:outline-none flex items-center space-x-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="inline-block">Join pool</span>
                </button>
                <button className="bg-yellow-400 text-gray-900 rounded-full px-5 py-2 font-medium focus:outline-none">
                  View bscscan
                </button>
              </JoinButtonContainer>
            </div>
            <div className="p-6 flex flex-col items-center w-full border-t border-gray-700 text-sm">
              <SummaryDetail>
                <span className="inline-block">Address</span>
                <div className="flex items-center space-x-1">
                  <AddressInput value={BSCAddress} />
                  <CopyToClipboard text={BSCAddress}>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-copy w-6"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#ffffff"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="8" y="8" width="12" height="12" rx="2" />
                        <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
                      </svg>
                    </button>
                  </CopyToClipboard>
                </div>
              </SummaryDetail>
              <SummaryDetail>
                <span className="inline-block">Ratio per 1 BUSD</span>
                <div className="flex items-center">
                  <span>25.00000 MCA</span>
                </div>
              </SummaryDetail>
              <SummaryDetail>
                <span className="inline-block">Closed in</span>
                <div className="flex items-center">
                  <span>23:59:13</span>
                </div>
              </SummaryDetail>
            </div>
          </ImageSection>

          <ListSection>
            <div className="bg-darkMode-800 px-6 py-5 mb-3 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 pl-3 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="inline-block">Token Info</span>
              </h4>
              <ul>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Name</span>
                  <span>Moon Token</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Address</span>
                  <span className="text-sm">0x972C960384F60F4</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Token for sale</span>
                  <span>95,000</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Participants</span>
                  <span>135</span>
                </li>
              </ul>
            </div>
            <div className="bg-darkMode-800 px-6 py-5 mb-3 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 pl-3 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ffffff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="inline-block">Pool Info</span>
              </h4>
              <ul>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Name</span>
                  <span>Moon Token</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Address</span>
                  <span className="text-sm">0x972C960384F60F4</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Token for sale</span>
                  <span>95,000</span>
                </li>
                <li className="grid grid-cols-2 mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-none">
                  <span>Participants</span>
                  <span>135</span>
                </li>
              </ul>
            </div>
            <div className="bg-darkMode-800 px-6 py-5 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 pl-3 flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-bulb w-6"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="#ffffff"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                  <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                  <line x1="9.7" y1="17" x2="14.3" y2="17" />
                </svg>
                <span className="inline-block">About Project</span>
              </h4>
              <p className="mt-1.5 bg-darkMode-600 px-3 py-3 rounded-md leading-normal text-white text-opacity-80">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              </p>
            </div>
          </ListSection>
        </DetailWrapper>
      </div>
    </div>
  );
};

export default PoolsDetail;
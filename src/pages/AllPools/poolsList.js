import React, { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import ProgressBar from "../../components/layout/progressBar";
import { Link as Links } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PoolsList() {

  useEffect(() => {
    Aos.init({
      duration: 500
    });
  }, []);

  let [categories] = useState({
    Ongoing: [
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Future: [
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Ended: [
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Royale Finance",
        img: "image/coins/realfevr.jpg",
        progress: "65",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
      {
        id: 1,
        title: "Dotmoovs BNB",
        img: "image/coins/dotmoovs.jpg",
        progress: "75",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    ],
  });

  return (
    <div className="relative bottom-16 w-full max-w-xxxl mx-auto px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-6 bg-blue-900/20 rounded-xl">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full md:w-auto focus:outline-none text-xl leading-5 font-bold py-3",
                  selected
                    ? "border-b-2 border-orange-500 text-white"
                    : "text-gray-500"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <div className="hidden md:grid md:grid-cols-10 md:gap-x-2 px-7 justify-start mt-5 text-gray-500 font-semibold text-sm">
          <span className="relative right-7 col-span-3">Pool name</span>
          <span className="text-center md:hidden lg:inline-block">Status</span>
          <span className="text-center">Access</span>
          <span className="text-center">Ratio, 1BUSD</span>
          <span className="text-center">Total raise</span>
          <span className="text-left col-span-2">Progress</span>
        </div>
        <Tab.Panels className="mt-5 md:mt-2 focus:outline-none focus:border-0">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx} className="focus:outline-none focus:border-0">
              <ul className="focus:outline-none focus:border-0">
                {posts.map((post) => (
                  <li
                    data-aos="fade-up"
                    data-aos-once="true"
                    key={post.id}
                    className="focus:outline-none md:grid md:grid-cols-10 md:gap-x-2 cursor-pointer bg-gradient-to-b from-darkMode-800 to-darkMode-600 border border-gray-600 px-7 py-4 rounded-lg mt-3"
                  >
                    <div className="col-span-3 flex items-center space-x-4">
                      <img
                        className="rounded-full h-12"
                        src={post.img}
                        alt=""
                      />
                      <h3 className="text-base font-bold leading-5 text-white">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex md:hidden lg:flex justify-between mt-4 md:mt-0 md:self-center md:mx-auto">
                      <span className="md:hidden font-semibold text-white text-opacity-90">
                        Status
                      </span>
                      <span className="bg-gradient-to-t from-orange-500 to-orange-300 rounded-full px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-xs leading-none">
                        Ongoing
                      </span>
                    </div>
                    <div className="flex justify-between mt-4 md:mt-0 md:self-center md:mx-auto">
                      <span className="md:hidden font-semibold text-white text-opacity-90">
                        Access
                      </span>
                      <span className="rounded-full px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-base leading-none">
                        Private
                      </span>
                    </div>
                    <div className="flex justify-between mt-4 md:mt-0 md:self-center md:mx-auto">
                      <span className="md:hidden font-semibold text-white text-opacity-90">
                        Ratio, 1BUSD
                      </span>
                      <span className="rounded-full px-2.5 py-1.5 text-white text-center inline-block w-min font-semibold text-base leading-none">
                        8303.00
                      </span>
                    </div>
                    <div className="flex justify-between mt-4 md:mt-0 md:self-center md:mx-auto">
                      <span className="md:hidden font-semibold text-white text-opacity-90">
                        Total raise
                      </span>
                      <span className="rounded-full px-2.5 py-1.5 text-orange-500 text-center inline-block w-min font-semibold text-base leading-none">
                        200K
                      </span>
                    </div>

                    <div className="mt-6 mb-4 md:mt-0 md:mb-0 col-span-2 self-center">
                      <ProgressBar progress={post.progress} display={"block"} />
                    </div>

                    <div className="hidden md:col-start-10 md:flex justify-end items-center">
                      <Links
                        className="text-orange-500 border border-orange-500 rounded-xl leading-none px-4 py-2.5"
                        to={"/"}
                      >
                        Apply
                      </Links>
                    </div>
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

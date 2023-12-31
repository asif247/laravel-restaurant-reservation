import { Inertia } from '@inertiajs/inertia';
import React from "react";

const Index = ({adminName}) => {
    console.log(adminName)
    const handleLogout = () => {
        Inertia.post('/logout').then(() => {
          Inertia.visit('/login');
        });
      };
    return (
        <>
            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-50 border-r border-gray-200">
                    <div className="py-4 px-6">
                        <h1 className="text-4xl font-extrabold text-lime-900">{adminName}</h1>
                        <button className='px-6 py-2 mt-3 hover:border-emerald-900 border rounded-md' onClick={handleLogout}>Logout</button>
                    </div>

                    <div className="mb-10">
                        <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                            Main
                        </h3>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Home
                        </a>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                            Most recommended
                        </a>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                ></path>
                            </svg>
                            Most commented
                        </a>
                    </div>

                    <div className="mb-10">
                        <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                            Library
                        </h3>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                ></path>
                            </svg>
                            Favorites
                        </a>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                            Watch later
                        </a>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                ></path>
                            </svg>
                            History
                        </a>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <svg
                                className="h-5 w-5 text-gray-400 mr-2 group-hover:text-orange-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                ></path>
                            </svg>
                            Scheduled
                        </a>
                    </div>
                    <div className="mb-10">
                        <h3 className="mx-6 mb-2 text-xs text-gray-400 uppercase tracking-widest">
                            Following
                        </h3>

                        <a
                            href="/"
                            className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                        >
                            <img
                                src="https://picsum.photos/200"
                                alt=""
                                className="w-7 h-7 rounded-full mr-2"
                            />
                            MD Riaz
                        </a>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="flex justify-between py-3 px-6 bg-gray-50 border-b space-x-6">
                        <form action="" className="w-full max-w-md">
                            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                <svg
                                    className="w-5 h-5 absolute ml-3 pointer-events-none"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    type="text"
                                    name="search"
                                    placeholder="Search talk"
                                    autocomplete="off"
                                    aria-label="Search talk"
                                    className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2"
                                />
                            </div>
                        </form>

                        <div className="relative flex-shrink-0">
                            <div className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                                <img
                                    className="inline w-10 h-10 rounded-full"
                                    src="https://picsum.photos/150"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <main>
                        <div
                            className="inline-flex rounded-md shadow-sm"
                            role="group"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <svg
                                    className="mr-2 w-4 h-4 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Profile
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <svg
                                    className="mr-2 w-4 h-4 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
                                </svg>
                                Settings
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
                            >
                                <svg
                                    className="mr-2 w-4 h-4 fill-current"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                                Downloads
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Index;

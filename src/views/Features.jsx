import React from "react";

function Features() {
  return (
    <div className="w-full rounded-3xl border border-[#181a21] mb-14">
      <div className="w-full h-14 rounded-t-3xl border-b border-[#181a21]"></div>
      <div className="w-full text-center py-10 flex-col gap-10 flex justify-center items-center">
        <div className="w-11/12 md:w-10/12 flex flex-col gap-4 justify-center items-center">
          <small className="text-sm text-white text-opacity-80 flex gap-1 items-center w-max">
            <span class="material-symbols-rounded">rocket_launch</span>
            Features
          </small>
          <p className="head w-full text-2xl md:text-5xl font-[500] tracking-tight text-white md:w-8/12">
            Documentation leveled up
          </p>
          <span className="text-white text-opacity-70">
            Built for the modern business to engage users
          </span>
        </div>
        <div className="grid gap-3 place-items-center w-full md:w-9/12">
          <img src={require("../assets/images/chat-dark.webp")} alt="pic" />
          <p className="text-white text-xl md:text-[2rem]">AI Chat</p>
          <span className="text-gray-500 md:text-base text-sm w-4/5 md:w-2/5 mt-3">
            GPT-4 powered chat box for users to get direct answers to their
            questions
          </span>
          <button className="mt-4 bg-white text-black text-sm px-6 py-2 rounded-full hover:bg-slate-300 flex justify-center items-center">
            Get Started
            <span class="material-symbols-rounded text-sm">chevron_right</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full mb-14">
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 10H32C33.1046 10 34 10.8954 34 12V28C34 29.1046 33.1046 30 32 30H20V10Z"
                fill="url(#paint0_linear_407_7973)"
                fill-opacity="0.24"
              />
              <rect
                x="23.5"
                y="14"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="23.5"
                y="25"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="23.5"
                y="17"
                width="7"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="23.5"
                y="20"
                width="6"
                height="3"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <path
                d="M9 10V10C9 8.89543 9.89543 8 11 8H17M31 10V10C31 8.89543 30.1046 8 29 8H20"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 30V30C31 31.1046 30.1046 32 29 32L20 32M9 30V30C9 31.1046 9.89543 32 11 32L17 32"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 15V12C34 10.8954 33.1046 10 32 10H20M34 24V28C34 29.1046 33.1046 30 32 30H20M6 15V12C6 10.8954 6.89543 10 8 10H17M6 24V28C6 29.1046 6.89543 30 8 30H17M20 6V10M20 34V30M20 10V30"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L6 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 18L34 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 17L14.6464 19.6464C14.8417 19.8417 14.8417 20.1583 14.6464 20.3536L12 23"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7973"
                  x1="20"
                  y1="10"
                  x2="20"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" stop-opacity="0" />
                  <stop offset="1" stop-color="#CCD7F6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">Editing</p>
              <span className="text-sm text-gray-500">
                Editing workflow built into where you work
              </span>
            </div>
          </div>
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 30H8C6.89543 30 6 29.1046 6 28V12C6 10.8954 6.89543 10 8 10H32C33.1046 10 34 10.8954 34 12V28C34 29.1046 33.1046 30 32 30ZM22.75 20.433C23.0833 20.2406 23.0833 19.7594 22.75 19.567L18.25 16.9689C17.9167 16.7765 17.5 17.017 17.5 17.4019V22.5981C17.5 22.983 17.9167 23.2235 18.25 23.0311L22.75 20.433Z"
                fill="url(#paint0_linear_407_7957)"
                fill-opacity="0.24"
              />
              <path
                d="M9 10V10C9 8.89543 9.89543 8 11 8H29C30.1046 8 31 8.89543 31 10V10"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 30V30C31 31.1046 30.1046 32 29 32L11 32C9.89543 32 9 31.1046 9 30V30"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 15V12C34 10.8954 33.1046 10 32 10H8C6.89543 10 6 10.8954 6 12V15M34 24V28C34 29.1046 33.1046 30 32 30H20H8C6.89543 30 6 29.1046 6 28V24"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.5 14L26 14C27.1046 14 28 14.8954 28 16V17.1459C28 18.2822 28.642 19.321 29.6584 19.8292L30 20L29.6584 20.1708C28.642 20.679 28 21.7178 28 22.8541V24C28 25.1046 27.1046 26 26 26H25.5"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.5 14L14 14C12.8954 14 12 14.8954 12 16V17.1459C12 18.2822 11.358 19.321 10.3416 19.8292L10 20L10.3416 20.1708C11.358 20.679 12 21.7178 12 22.8541V24C12 25.1046 12.8954 26 14 26H14.5"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L6 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 18L34 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.75 19.567C23.0833 19.7594 23.0833 20.2406 22.75 20.433L18.25 23.0311C17.9167 23.2235 17.5 22.983 17.5 22.5981L17.5 17.4019C17.5 17.017 17.9167 16.7765 18.25 16.9689L22.75 19.567Z"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 14H22"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 26H22"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7957"
                  x1="20"
                  y1="10"
                  x2="20"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" stop-opacity="0" />
                  <stop offset="1" stop-color="#CCD7F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">API Playground</p>
              <span className="text-sm text-gray-500">
                Interactive experience built around your APIs
              </span>
            </div>
          </div>
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 15V12C34 11.2904 33.6305 10.6671 33.0733 10.3121L26 18.7999L24 16.3999L19.0001 22.3999L18.0001 21.1999L16.0001 23.5999L14.0001 21.1999L6.92676 29.6879C7.23686 29.8855 7.60509 30 8.00005 30H32C33.1046 30 34 29.1046 34 28V15Z"
                fill="url(#paint0_linear_407_7873)"
                fill-opacity="0.24"
              />
              <path
                d="M9 10V10C9 8.89543 9.89543 8 11 8H29C30.1046 8 31 8.89543 31 10V10"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31 30V30C31 31.1046 30.1046 32 29 32L11 32C9.89543 32 9 31.1046 9 30V30"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 15V12C34 10.8954 33.1046 10 32 10H8C6.89543 10 6 10.8954 6 12V15M34 24V28C34 29.1046 33.1046 30 32 30H20H8C6.89543 30 6 29.1046 6 28V24"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="9"
                y="13"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="12"
                y="13"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="15"
                y="13"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <path
                d="M10 26L14 21.2L16 23.6L18 21.2L19 22.4L24 16.4L26 18.8L30 14"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18L6 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M34 18L34 21"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7873"
                  x1="16"
                  y1="20.5001"
                  x2="20.4634"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" />
                  <stop offset="1" stop-color="#CCD7F6" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">Documentation Analytics</p>
              <span className="text-sm text-gray-500">
                Understand what users are viewing and where they are converting
              </span>
            </div>
          </div>
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 28V28C5.89543 28 5 27.1046 5 26L5 14C5 12.8954 5.89543 12 7 12V12"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 30V10C7 8.89543 7.89543 8 9 8H22.1716C22.702 8 23.2107 8.21071 23.5858 8.58579L25.0003 10.0003C22.958 10.017 20.9209 10.8045 19.3627 12.3627C16.2124 15.513 16.2124 20.6206 19.3627 23.7709C21.9735 26.3817 25.9288 26.8288 29 25.1121V30C29 31.1046 28.1046 32 27 32H18H9C7.89543 32 7 31.1046 7 30Z"
                fill="url(#paint0_linear_407_7889)"
                fill-opacity="0.24"
              />
              <rect
                x="10"
                y="11"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="13"
                y="11"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="16"
                y="11"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="10"
                y="24"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="12"
                y="24"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="10"
                y="16"
                width="7.5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="10"
                y="27"
                width="8"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <path
                d="M7 17L7 20"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 14V10C7 8.89543 7.89543 8 9 8H22.1716C22.4602 8 22.7423 8.06237 23 8.17964M7 23V30C7 31.1046 7.89543 32 9 32H27C28.1046 32 29 31.1046 29 30V27.5M30.7709 23.7709C33.9211 20.6206 33.9211 15.513 30.7709 12.3627C29.1788 10.7707 27.0869 9.98317 25.0003 10.0003C22.958 10.017 20.9209 10.8045 19.3627 12.3627C16.2124 15.513 16.2124 20.6206 19.3627 23.7709C22.513 26.9211 27.6206 26.9211 30.7709 23.7709ZM30.7709 23.7709L32.0384 25.0384M32.0384 25.0384C32.7385 24.3384 33.8735 24.3384 34.5736 25.0384L36.475 26.9398C37.175 27.6399 37.175 28.7749 36.475 29.475C35.7749 30.175 34.6399 30.175 33.9398 29.475L32.0384 27.5736C31.3384 26.8735 31.3384 25.7385 32.0384 25.0384Z"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.0233 13C23.741 13.0105 22.462 13.505 21.4836 14.4833C21.3066 14.6603 21.1454 14.8472 21.0001 15.0421M20.0005 17.9998C20.0042 17.7055 20.0335 17.4113 20.0883 17.1211"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.0538 19H10.5C10.2239 19 10 19.2239 10 19.5V21.5C10 21.7761 10.2239 22 10.5 22H18.0215C17.4968 21.0614 17.1743 20.0402 17.0538 19Z"
                fill="#C0C7D8"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7889"
                  x1="18"
                  y1="8"
                  x2="18"
                  y2="34"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" stop-opacity="0" />
                  <stop offset="1" stop-color="#CCD7F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">Search</p>
              <span className="text-sm text-gray-500">
                Content is indexed on every update for lightning fast full-text
                search
              </span>
            </div>
          </div>
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M31 20C31 26.0751 26.0751 31 20 31V25H24.3916C24.7646 25 25.0603 24.6914 24.9895 24.3393C24.503 21.9216 22.6085 20.1111 20 20.1111V18.8889C21.4043 18.8889 22.5428 17.7945 22.5428 16.4444C22.5428 15.0944 21.4043 14 20 14V9C26.0751 9 31 13.9249 31 20Z"
                fill="url(#paint0_linear_407_7912)"
                fill-opacity="0.24"
              />
              <circle
                cx="6"
                cy="33"
                r="2"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 2"
              />
              <circle
                cx="7"
                cy="6"
                r="3"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 2"
              />
              <circle
                cx="33.5"
                cy="8.5"
                r="1.5"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="33.5"
                cy="32.5"
                r="2.5"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 31C13.9249 31 9 26.0751 9 20C9 13.9249 13.9249 9 20 9"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 2"
              />
              <path
                d="M20 4L20 36M20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4572 16.4444C17.4572 17.7945 18.5957 18.8889 20 18.8889V14C18.5957 14 17.4572 15.0944 17.4572 16.4444Z"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1.75"
              />
              <path
                d="M20 20.1111C17.3915 20.1111 15.497 21.9216 15.0105 24.3393C14.9397 24.6914 15.2354 25 15.6084 25H20V20.1111Z"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-dasharray="1 1.75"
              />
              <path
                d="M20 18.8889C21.4043 18.8889 22.5428 17.7945 22.5428 16.4444C22.5428 15.0944 21.4043 14 20 14V18.8889Z"
                stroke="#C0C7D8"
                stroke-linejoin="round"
              />
              <path
                d="M24.9895 24.3393C24.503 21.9216 22.6085 20.1111 20 20.1111V25H24.3916C24.7646 25 25.0603 24.6914 24.9895 24.3393Z"
                stroke="#C0C7D8"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7912"
                  x1="25.5"
                  y1="4"
                  x2="25.5"
                  y2="36"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" stop-opacity="0" />
                  <stop offset="1" stop-color="#CCD7F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">Leads Generator</p>
              <span className="text-sm text-gray-500">
                Identify sales prospects viewing your documentation
              </span>
            </div>
          </div>
          <div className="border border-[#181a21] p-6">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 28C9 29.1046 9.89543 30 11 30L29 30C30.1046 30 31 29.1046 31 28M13 30C13 31.1046 13.8954 32 15 32L25 32C26.1046 32 27 31.1046 27 30"
                stroke="#CCD7F6"
                stroke-opacity="0.12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 28H20H8C6.89543 28 6 27.1046 6 26V22V10C6 8.89543 6.89543 8 8 8H32C33.1046 8 34 8.89543 34 10V22V26C34 27.1046 33.1046 28 32 28ZM11.8478 17.6364C15.8817 9.78793 24.1183 9.78784 28.1522 17.6363C28.2684 17.8624 28.2684 18.1375 28.1522 18.3636C24.1183 26.212 15.8817 26.2121 11.8478 18.3636C11.7316 18.1376 11.7316 17.8625 11.8478 17.6364Z"
                fill="url(#paint0_linear_407_7928)"
                fill-opacity="0.24"
              />
              <path
                d="M28 8H32C33.1046 8 34 8.89543 34 10V22V26C34 27.1046 33.1046 28 32 28H20H8C6.89543 28 6 27.1046 6 26V22V10C6 8.89543 6.89543 8 8 8H12M15 8H25"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="9"
                y="11"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="26"
                y="11"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="9"
                y="24"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="26"
                y="24"
                width="5"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="9"
                y="14"
                width="2"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="29"
                y="14"
                width="2"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="9"
                y="21"
                width="2"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="29"
                y="21"
                width="2"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="9"
                y="17"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <rect
                x="30"
                y="17"
                width="1"
                height="1"
                rx="0.5"
                fill="#CCD7F6"
                fill-opacity="0.12"
              />
              <path
                d="M28.1523 17.6363C24.1183 9.78784 15.8818 9.78793 11.8479 17.6364C11.7317 17.8625 11.7317 18.1376 11.8479 18.3636C15.8818 26.2121 24.1183 26.212 28.1523 18.3636C28.2684 18.1375 28.2684 17.8624 28.1523 17.6363Z"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 16L22.6464 17.6464C22.8417 17.8417 22.8417 18.1583 22.6464 18.3536L21 20"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 16L17.3536 17.6464C17.1583 17.8417 17.1583 18.1583 17.3536 18.3536L19 20"
                stroke="#C0C7D8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_407_7928"
                  x1="20"
                  y1="8"
                  x2="20"
                  y2="28"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#CCD7F6" stop-opacity="0" />
                  <stop offset="1" stop-color="#CCD7F6" />
                </linearGradient>
              </defs>
            </svg>

            <div className="text-left mt-4 flex flex-col gap-2">
              <p className="text-white">Preview Deployments</p>
              <span className="text-sm text-gray-500">
                Review and share your changes before they go live
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

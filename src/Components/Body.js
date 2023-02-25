import React from "react";

import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./body.css";
import { FcPrivacy } from "react-icons/fc";
import { IoBookSharp } from "react-icons/io5";
import { GiDigitalTrace } from "react-icons/gi";
import img from "../image/bank.jpg";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Student_upload from "./Student_upload";
import Teacher_mngmnt from "./Teacher_mngmnt";
export default function Body() {
  

  return (
    <>
    {/* <Teacher_mngmnt />
    <Student_upload /> */}
    
      {/* starting section of website */}
      <div className="section max-w-full       ">
        {/* top part start from here  */}
        <div className="content max-w-7xl pt-4 px-8  m-auto flex pb-8  ">
          {/* Left-side content of website ---------------------------------------------------------------------- */}
          <div className="left-content  text-left  w-3/5 pt-10 items-start text-sky-500 flex-row">
            {/* top link */}
            <a
              href=""
              className="link font-semibold mb-2 text-2xl max-w-xl leading-loose mt-10"
            >
              {" "}
              Jump Start you Study{" "}
            </a>
            {/* left heading */}
            <h1 className="headingOne flex pb-10 flex-row  text-5xl text-black font-bold max-w-xl">
             We will review your test
            </h1>
           
            <div className="Email flex items-center flex-row max-w-xl mt-8">
              {/* input email   */}
            </div>
            {/* form completed */}
          </div>
          {/* Right side content of website ---------------------------------------------------------------------- */}
          <div className="right-content flex  pt-8 pl-5   w-3/5 pt-10">
            {/* mobile image  */}
            <img
              src="https://media.istockphoto.com/id/1339040567/photo/shot-of-an-unrecognizable-group-of-children-sitting-in-their-school-classroom-and-raising.jpg?b=1&s=170667a&w=0&k=20&c=Fxmgc5lHv4rsaWOQN-JEBkdBN2KmISP8z8o8mRZMztk="
              className="image rounded-3xl "
            ></img>
          </div>
        </div>
        {/* top part end here  */}

        <section className="spaceSectioin flex w-full pt-16 m-auto shrink-0 ">
          <div className="spaceDiv flex grow flex-row"></div>
        </section>

        {/* middle table part start here */}
        {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg ml-4 max-w-8xl">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Sliver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 py-4">
                                    Black
                                </td>
                                <td className="px-6 py-4">
                                    Accessories
                                </td>
                                <td className="px-6 py-4">
                                    $99
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
        {/* section created for space  */}
        <section className="spaceSectioin flex w-full pt-20 m-auto shrink-0 ">
          <div className="spaceDiv flex grow flex-row"></div>
        </section>

        {/* center part of site {portfolio} */}
        {/* <section className='middlePortion flex   max-w-full m-auto p-4 w-full '>
                    <div className='middleHeader    w-full  font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600'>Create Your Portfolio Today </div>
                    <div className='middlePartCurency flex m-auto flex-row justify-center  w-full  '>

                        <p className='middlePara   w-full text-3xl mt-6 '>school has best place in the market </p>
                        <img src={img} className="mobileImg h-96"></img>
                    </div>

                </section> */}
        {/* for space  */}
        <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
          <div className="spaceDiv flex grow flex-row"></div>
        </section>
        {/* lower div reasons platform */}
        <section className="reasonsPlatform flex justify-center  m-auto p-2 max-w-8xl">
          <section className="insideContent flex p-5 max-w-full ">
            <div className="reasonHeading   items-center   text-center  max-w-full">
              <h2 className="Barheading mt-3  leading-10 text-black text-5xl font-medium w-full ">
                The Most trusted learning platform{" "}
              </h2>
              <p className="paraBar mt-3 text-2xl w-full leading-10">
                Here are few reasons why shilud you choose <span>school</span>{" "}
              </p>
              <div className="reasonsitems  flex  flex-row justify-center w-full mt-8 ">
                <div className="r-item m-4 items-center w-full">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    style={{ margin: "auto" }}
                    fill="#fb8c00"
                    className="bi bi-shield-lock-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"
                    />
                  </svg>
                  <h2 className="secure mt-5 text-3xl leading-8 font-semibold">
                    Secure Storage
                  </h2>
                  <p className="securePara mt-3 leading-8 text-xl ">
                    We have complete privacy of your data
                  </p>
                  {/* for space  */}
                  <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
                    <div className="spaceDiv flex grow flex-row"></div>
                  </section>
                  <button className="LearnMore mt-6 text-3xl leading-8 font-medium text-blue-700   font-serif rounded-full  ">
                    Learn More{" "}
                  </button>
                </div>

                <div className="r-item   w-full   ">
                  <div className="insideItemsSecurity m-4">
                    <div className="bsImg m-auto w-82 h-22">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="50"
                        height="50"
                        style={{ margin: "auto" }}
                        fill="#e91e63"
                        className="bi bi-stars"
                        viewBox="0 0 16 16"
                      >
                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                      </svg>
                    </div>

                    <h2 className="bestPractice mt-5 text-3xl leading-8 font-semibold ">
                      Industry best practice
                    </h2>
                    <p className="bestPracticePara mt-3 leading-8 text-xl">
                      school support various sort's of online business{" "}
                    </p>
                    {/* for space  */}
                    <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
                      <div className="spaceDiv flex grow flex-row"></div>
                    </section>
                    <button className="LearnMore mt-6 text-3xl leading-8 font-medium text-blue-700   font-serif rounded-full  ">
                      Learn More{" "}
                    </button>
                    {/* for space  */}
                    <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
                      <div className="spaceDiv flex grow flex-row"></div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* Banner part lolwer  */}
        <div className="banner mt-6  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <section className="bannerclass flex  max-w-6xl w-full m-auto  ">
            <div className="bannerItemsInside w-full flex flex-row    m-auto ">
              <div className="insideBitems w-1/3   ">
                <div className="bannerPrice mt-8 leading-8 text-4xl text-zinc-100    ">
                  $10,00,000
                </div>
                <div className="bannerDesc mt-8 leading-8 text-2xl text-zinc-100">
                  Amout Generated
                </div>
              </div>
              <div className="insideBitems  w-1/3 ">
                <div className="bannerPrice mt-8 leading-8 text-4xl text-zinc-100    ">
                  100+
                </div>
                <div className="bannerDesc mt-8 leading-8 text-2xl text-zinc-100">
                  Countries Supported
                </div>
              </div>
              <div className="insideBitems  w-1/3 ">
                <div className="bannerPrice mt-8 leading-8 text-4xl text-zinc-100    ">
                  4.5+ Cr
                </div>
                <div className="bannerDesc mt-8 leading-8 text-2xl text-zinc-100">
                  Verified User's
                </div>
              </div>
            </div>
          </section>
          <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
            <div className="spaceDiv flex grow flex-row"></div>
          </section>
        </div>
        {/* for space  */}
        <section className="spaceSectioin flex w-full pt-10 m-auto shrink-0 ">
          <div className="spaceDiv flex grow flex-row"></div>
        </section>

        {/* last second lower part starts from here  */}
        <section className="addditonal flex w-full m-auto p-2">
          <div className="additionalInsiide flex flex-col items-center w-full">
            {/* headings  */}
            <h2 className="additionalHeading mt-4 text-5xl  font-semibold leading-8 w-full">
              Get started in few minutes
            </h2>
            <h2 className="additonalHeadingLower mt-8 text-2xl    leading-8 w-full">
              school have various scope of earning
            </h2>
            <div className="additonallItemsInside w-full flex flex-row  mt-16  m-auto ">
              <div className="additionalDivItems w-1/3">
                {/* images */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="#ff5d5d"
                  style={{ margin: "auto" }}
                  className="bi bi-person-hearts"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
                  />
                </svg>
                <p className="additionalDivPara  mt-8 leading-8 text-3xl text-black font-semibold">
                  Create an account{" "}
                </p>
              </div>
              <div className="additionalDivItems w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  style={{ margin: "auto" }}
                  fill="#ff6363"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                </svg>
                <p className="additionalDivPara  mt-8 leading-8 text-3xl text-black font-semibold">
                  Link your bank account{" "}
                </p>
              </div>
              <div className="additionalDivItems w-1/3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  style={{ margin: "auto" }}
                  fill="#ffb72b"
                  className="bi bi-bag-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5ZM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1Zm0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                </svg>
                <p className="additionalDivPara  mt-8 leading-8 text-3xl text-black font-semibold">
                  Purchase school{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* for space  */}
        <section className="spaceSectioin flex w-full mt-40 m-auto shrink-0 ">
          <div className="spaceDiv flex grow flex-row"></div>
        </section>
        {/* footer start's from here  */}
        {/* <footer className='footer flex w-full m-auto p-3 bg-white'>
                    <div className='footerwrapper flex w-full  '>
                        <section className='sectionfooter p-10 mt-1'>
                            <div className='footerclass max-w-200' >
                                <h2 className='cokuheading'> Coku</h2>
                                <div className='social'>
                                    <div className=' '>Copywright &copy;2022 </div>

                                </div>
                                <div className='socialIcons'>
                                    <BsFacebook />&nbsp;&nbsp; <FiTwitter /> &nbsp;&nbsp;<BsInstagram />
                                </div>
                            </div>
                        </section>
                        <div className='rightFooter flex w-full '>
                            <div className='mainFooter flex m-auto' >
                                <section className='footerText'>
                                    <h2 className='mb-4 text-2xl font-semibold  '>Company</h2>
                                    <ul className='liItemsFooter flex flex-col list-none m-auto '>
                                        <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>About</a></li>
                                        <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Company</a></li>
                                        <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Investors</a></li>
                                        <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Location</a></li>

                                    </ul>
                                </section>

                            </div>
                            <div className='mainFooter flex m-auto' ><section className='footerText'> <h2 className='mb-4 text-2xl font-semibold  '>Business </h2>
                                <ul className='liItemsFooter flex flex-col list-none m-auto '>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>About</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Company</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Investors</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Location</a></li>

                                </ul></section>

                            </div>
                            <div className='mainFooter flex m-auto'><section className='footerText'> <h2 className='mb-4 text-2xl font-semibold  '>Support</h2>
                                <ul className='liItemsFooter flex flex-col list-none m-auto '>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>About</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Company</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Investors</a></li>
                                    <li><a href="#" className='linkLi text-xl leading-8 max-w-xs'>Location</a></li>

                                </ul></section>

                            </div>
                        </div>
                    </div>
                </footer> */}
      </div>
    </>
  );
}

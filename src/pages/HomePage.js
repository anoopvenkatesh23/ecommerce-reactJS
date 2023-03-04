import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import "../css/home.css";

export default function HomePage() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item className="header">
          <img
            className="d-block w-100 cover-picture"
            src="images/cover1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className="header">
          <img
            className="d-block w-100  cover-picture"
            src="images/cover2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item className="header">
          <img
            className="d-block w-100 cover-picture"
            src="images/cover3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container>
        <div class="about-us-section" id="about-us">
          <h2 className="text-center main-color font-bold">Big Basket</h2>
          <h3 className="text-center main-color font-bold">
            One stop shop for all Groceries!
          </h3>

          <p className="text-center">
            Big Basket was founded by Anoop and Aksha. His family has a rich
            history in the food industry that started in farming and eventually
            expanded into the marketplace. The family started selling their
            crops in a small scale market booth in St. Jacob's over thirty years
            ago. The family originally grew their own crops, but to sustain
            their market demand they eventually had to import additional
            produce.Their market booth ultimately expanded into several other
            cities such as London, Stratford, and Aylmer, etc.. Around twenty
            years ago, Mike's father retired and the Renkema business ended, as
            Mike was financially unable to buy it outright at the time. So what
            did he do? He chose to start from the ground up, in Renkema
            tradition, starting in the market place with only a trunk full of
            product.
          </p>
        </div>

        <div>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                OUR TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind Big Basket.
              </h1>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10">
            <div className="container mx-auto">
              <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                          alt="#teammember"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Andres Berlin
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Chief Executive Officer
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The CEO's role in raising a company's corporate IQ is to
                        establish an atmosphere that promotes knowledge sharing
                        and collaboration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                          alt="#teammember2"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Silene Tokyo
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Inventory Manager
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        The emphasis on innovation and technology in our
                        companies has resulted in a few of them establishing
                        global benchmarks in product design and development.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                          alt="#teammember3"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Johnson Stone
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Manager of stocks
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Our services encompass the assessment and repair of
                        property damage caused by water, fire, smoke, or mold.
                        We can also be a part of the restoration.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                          alt="#teammember4"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Dean Jones
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Delivery Manager
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        An avid open-source developer who loves to be creative
                        and inventive. I have 20 years of experience in the
                        field.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                          alt="#teammember5"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Rachel Adams
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Storefront Manager
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        Product designer with interests in immersive computing
                        and XR, political ventures, and emerging technologies.
                        Able to take ideas and give them a life.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                  <div className="rounded overflow-hidden shadow-md bg-white">
                    <div className="absolute -mt-20 w-full flex justify-center">
                      <div className="h-32 w-32">
                        <img
                          src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif"
                          alt="#teammember6"
                          className="rounded-full object-cover h-full w-full shadow-md"
                        />
                      </div>
                    </div>
                    <div className="px-6 mt-16">
                      <div className="font-bold text-3xl text-center pb-1">
                        Charles Keith
                      </div>
                      <p className="text-gray-800 text-sm text-center">
                        Support Staff
                      </p>
                      <p className="text-center text-gray-600 text-base pt-3 font-normal">
                        A UX designer is the voice of the customer. Our job is
                        to look beyond the business goals. We don't just
                        experience user interface but also questions it.
                      </p>
                      <div className="w-full flex justify-center pt-5 pb-5">
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-github"
                            >
                              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-twitter"
                            >
                              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                            </svg>
                          </div>
                        </a>
                        <a href="#" className="mx-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#718096"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-instagram"
                            >
                              <rect
                                x={2}
                                y={2}
                                width={20}
                                height={20}
                                rx={5}
                                ry={5}
                              />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-10 gap-12 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            {/* Free Shipping Grid Card */}
            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.3155 2.98718C37.3012 2.91809 37.2675 2.85449 37.2184 2.80384C37.1693 2.7532 37.1068 2.71761 37.0381 2.70124C32.4624 1.58249 21.8897 5.56921 16.1616 11.295C15.1399 12.3084 14.2085 13.4089 13.378 14.5841C11.6116 14.4278 9.84517 14.5583 8.3397 15.2145C4.09204 17.0841 2.85532 21.9622 2.51079 24.0606C2.49125 24.1755 2.49862 24.2933 2.53233 24.4048C2.56603 24.5163 2.62515 24.6185 2.70504 24.7033C2.78492 24.7881 2.88339 24.8533 2.99271 24.8936C3.10202 24.9339 3.21919 24.9483 3.33501 24.9356L10.1561 24.1833C10.161 24.6975 10.192 25.2112 10.2491 25.7223C10.2834 26.0773 10.441 26.409 10.6944 26.6598L13.3358 29.295C13.5869 29.5481 13.9185 29.7056 14.2733 29.7403C14.7815 29.7972 15.2924 29.8282 15.8038 29.8333L15.0553 36.6458C15.0428 36.7616 15.0573 36.8787 15.0977 36.9879C15.1381 37.0971 15.2032 37.1955 15.288 37.2754C15.3727 37.3552 15.4748 37.4144 15.5863 37.4481C15.6977 37.4819 15.8155 37.4894 15.9303 37.47C18.0249 37.1341 22.9116 35.8973 24.7702 31.6497C25.4264 30.1442 25.5608 28.3864 25.4092 26.6286C26.5872 25.798 27.6906 24.8663 28.7069 23.8442C34.453 18.127 38.417 7.79031 37.3155 2.98718ZM22.9741 17.0239C22.4494 16.4996 22.092 15.8314 21.9471 15.1039C21.8022 14.3764 21.8763 13.6223 22.1601 12.9369C22.4438 12.2515 22.9245 11.6657 23.5412 11.2535C24.1579 10.8414 24.8831 10.6214 25.6249 10.6214C26.3666 10.6214 27.0918 10.8414 27.7085 11.2535C28.3252 11.6657 28.8059 12.2515 29.0896 12.9369C29.3734 13.6223 29.4475 14.3764 29.3026 15.1039C29.1577 15.8314 28.8003 16.4996 28.2756 17.0239C27.9277 17.3723 27.5145 17.6487 27.0597 17.8373C26.6048 18.0259 26.1173 18.123 25.6249 18.123C25.1325 18.123 24.6449 18.0259 24.1901 17.8373C23.7352 17.6487 23.322 17.3723 22.9741 17.0239Z"
                  fill="#4B5563"
                />
                <path
                  d="M13.1562 31.2055C12.7281 31.6344 12.0414 31.8016 11.2148 31.9445C9.35781 32.2609 7.71797 30.6562 8.05156 28.7789C8.17891 28.0672 8.55547 27.0695 8.78984 26.8352C8.84107 26.7849 8.87517 26.7198 8.8873 26.6491C8.89942 26.5784 8.88895 26.5056 8.85739 26.4412C8.82582 26.3768 8.77475 26.3239 8.71144 26.2902C8.64812 26.2564 8.57578 26.2434 8.50469 26.2531C7.46622 26.3802 6.50011 26.851 5.76016 27.5906C3.92344 29.4289 3.75 36.25 3.75 36.25C3.75 36.25 10.575 36.0765 12.4117 34.2383C13.1536 33.4989 13.6251 32.5313 13.75 31.4914C13.7789 31.1648 13.3812 30.9703 13.1562 31.2055Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Free Shipping
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Free shipping on orders above $100
                </p>
              </div>
            </div>

            {/* Support Grid Card */}

            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.547 37.5003C29.022 37.5003 26.8798 36.9487 23.672 35.1565C19.7712 32.969 16.754 30.9495 12.8744 27.0799C9.13373 23.3417 7.31342 20.9213 4.76577 16.2854C1.88764 11.051 2.37827 8.30728 2.9267 7.13463C3.57983 5.73306 4.54389 4.89478 5.78998 4.06275C6.49776 3.59903 7.24676 3.20152 8.02748 2.87525C8.10561 2.84166 8.17827 2.80963 8.24311 2.78072C8.62983 2.6065 9.21577 2.34322 9.95795 2.62447C10.4533 2.81041 10.8955 3.19088 11.5876 3.87447C13.0072 5.27447 14.947 8.39244 15.6626 9.92369C16.1431 10.9557 16.4611 11.637 16.4619 12.401C16.4619 13.2956 16.0119 13.9854 15.4658 14.7299C15.3634 14.8698 15.2619 15.0034 15.1634 15.1331C14.5689 15.9143 14.4384 16.1401 14.5244 16.5432C14.6986 17.3534 15.9978 19.7651 18.133 21.8956C20.2681 24.026 22.6103 25.2432 23.4236 25.4167C23.8439 25.5065 24.0744 25.3706 24.8806 24.7549C24.9962 24.6667 25.115 24.5753 25.2392 24.4838C26.072 23.8643 26.7298 23.426 27.6033 23.426H27.608C28.3681 23.426 29.0189 23.7557 30.097 24.2995C31.5033 25.0088 34.715 26.9237 36.1236 28.3448C36.8087 29.0354 37.1908 29.476 37.3775 29.9706C37.6587 30.7151 37.3939 31.2987 37.2212 31.6893C37.1923 31.7542 37.1603 31.8253 37.1267 31.9042C36.7979 32.6835 36.398 33.4309 35.9322 34.137C35.1017 35.3792 34.2603 36.3409 32.8556 36.9948C32.1343 37.336 31.3449 37.5088 30.547 37.5003Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Support 24/7
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  Contact us 24 hours a day at care@bigbasket.com
                </p>
              </div>
            </div>

            {/* MonyBack Guarantee card */}

            <div className="flex space-x-4">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.75 37.5V34.6547C12.5414 34.2969 8.76953 31.0984 8.75 26.25H14.375C14.5133 28.3078 16.2391 29.8789 18.75 30.1562V22.5L16.6586 21.9531C11.893 20.8453 9.34297 18.0945 9.34297 13.9781C9.34297 9.12578 12.8188 5.94375 18.75 5.46875V2.5H21.25V5.46875C27.2961 5.96094 30.5469 9.19844 30.625 13.75H25C24.9406 11.8703 23.7633 10.3602 21.25 10.1562V17.3438L23.6578 17.9125C28.7195 19.0203 31.25 21.6406 31.25 25.9375C31.25 30.9641 27.8328 34.2094 21.25 34.6344V37.5H18.75ZM18.75 16.875V10.1562C16.5945 10.275 15.057 11.5992 15.057 13.4789C15.057 15.2211 16.3375 16.3602 18.75 16.875ZM21.25 22.9688V30.1562C24.2305 30.0359 25.6547 28.6781 25.6547 26.5805C25.6547 24.6602 24.2305 23.3672 21.25 22.9688Z"
                  fill="#4B5563"
                />
              </svg>
              <div>
                <p className=" text-xl leading-5 font-semibold text-gray-800 ">
                  Money Back Guarantee
                </p>
                <p className=" text-base leading-6 font-normal text-gray-600 mt-3">
                  You can return the product within 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

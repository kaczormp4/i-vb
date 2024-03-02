// components/About.js

import React from "react";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import InfoIcon from "@mui/icons-material/Info";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PublicIcon from "@mui/icons-material/Public";
import Diversity3Icon from "@mui/icons-material/Diversity3";
const banner =
  "https://architaste.com.pl/wp-content/uploads/elementor/thumbs/projektowanie_wnetrz-2-pe24ews88cq2q3945omq0xq96n7281nqmuiwh2kgeg.jpg";
const avatar =
  "https://somniastudio.com/wp-content/uploads/2023/01/somnia-studio.jpg";

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url(${banner})`,
          maxHeight: "250px",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="bg-gray-100 w-full relative">
        {/* Main Content Container */}
        <div className="sticky -top-5 bg-gray-100 p-4">
          {/* Avatar, Company Name, and Action Buttons in One Line */}
          <div className="z-50 flex items-center  ">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full h-16 w-16 mr-4"
            />
            <div className="flex-grow">
              <h1 className="text-2xl font-bold">
                Your Interior Design Company
              </h1>
              <p className="text-gray-500">Interior Design Experts</p>
            </div>
            <div className="flex ">
              <button className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 21.35l-1.45-1.36C5.4 14.25 2 11.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 2.78-3.4 5.75-8.55 11.15L12 21.35z"
                  ></path>
                </svg>
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 ml-2">
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="flex mb-20">
          {/* Left Panel */}
          <div className="w-64 p-4 bg-white shadow-sm rounded-sm">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mb-4 ">
              Contact us
            </button>
            <nav className="mb-8">
              <ul>
                <li className="mb-2">
                  <a href="#projects" className="flex items-center">
                    <CollectionsBookmarkIcon className="mr-2" />
                    Projekty
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#aboutUs" className="flex items-center">
                    <InfoIcon className="mr-2" />O nas
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#contact" className="flex items-center">
                    <AlternateEmailIcon className="mr-2" />
                    Kontakt
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#socialMedia" className="flex items-center">
                    <PublicIcon className="mr-2" />
                    Social Media
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#team" className="flex items-center">
                    <Diversity3Icon className="mr-2" />
                    Zespół
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Panel */}
          <div className="w-full p-4">
            <div id="projects">
              <h2 className="text-xl font-bold mb-4">Projekty</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://img.shmbk.pl/rimgsph/995094_cc8c2f42-8c75-4619-b29a-1b06fb117e6b_crop_518_461_kuchnia-loftowy-trend-kuchnia-styl-industrialny.jpg" // Replace with your project photo URL
                    alt="Project 1"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 1
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://www.cersanit.com.pl/gfx/opoczno/_thumbs/pl/cersanitinspiracjeiporady/54/296/4/devonwood_beige_bathroom_mp_small,qnuMpq2lq3GXrsaOZ6Q.jpg" // Replace with your project photo URL
                    alt="Project 2"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 2
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://www.brw.pl/blog/wp-content/uploads/2022/02/kuchnia-w-kamienicy.jpg" // Replace with your project photo URL
                    alt="Project 3"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 3
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://media.domni.pl/thumbnail/1370w/uploads/9/9a/opoczno-passion-oak-i-quenos-1_102928819179.jpg" // Replace with your project photo URL
                    alt="Project 4"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 4
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your project photo URL
                    alt="Project 5"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 5
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://meblem4.pl/img/products/44/09/1/43.jpg" // Replace with your project photo URL
                    alt="Project 6"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 6
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://homekoncept.shop/pub/media/lookbookslider/1247X960/HomeKONCEPT_68_wnetrze_9.jpg" // Replace with your project photo URL
                    alt="Project 7"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 7
                  </p>
                </div>
                <div className="flex flex-col items-center h-42">
                  <img
                    src="https://mebline.pl/images/stories/virtuemart/product/sypialnia-beta-biala4.jpg" // Replace with your project photo URL
                    alt="Project 8"
                    className="rounded-lg mb-2 w-full h-full"
                  />
                  <p className="bg-gray-800 text-white text-center p-2 w-full">
                    Project 8
                  </p>
                </div>
              </div>
            </div>
            <div id="about-us" className="mt-8">
              <h2 className="text-xl font-bold mb-4">O nas</h2>
              <div className="flex items-center">
                <div className="w-2/3 pr-4">
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur hendrerit, augue ac tincidunt eleifend, libero
                    libero euismod mauris, vel tristique enim justo ut turpis.
                    Curabitur fermentum massa ac ante fermentum, id gravida arcu
                    laoreet. Nullam eu metus at magna convallis suscipit. Sed
                    efficitur justo a elit faucibus, a egestas eros commodo.
                    Vestibulum eu risus in quam efficitur varius. Fusce dapibus
                    turpis vitae est tincidunt euismod.
                  </p>
                </div>
                <div className="w-1/3">
                  <img
                    src="https://placekitten.com/300/200" // Replace with your photo URL
                    alt="About Us Photo"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div id="contact" className="mt-8">
              <h2 className="text-xl font-bold mb-4">Kontakt</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149060.png" // Pin icon URL
                    alt="Location"
                    className="w-8 h-8 mr-2"
                  />
                  <div>
                    <p className="font-bold">Adres:</p>
                    <p>123 Street, City</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/906/906361.png" // Phone icon URL
                    alt="Phone"
                    className="w-8 h-8 mr-2"
                  />
                  <div>
                    <p className="font-bold">Telefon:</p>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/747/747636.png" // Website icon URL
                    alt="Website"
                    className="w-8 h-8 mr-2"
                  />
                  <div>
                    <p className="font-bold">Strona internetowa:</p>
                    <p>www.example.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/747/747376.png" // Email icon URL
                    alt="Email"
                    className="w-8 h-8 mr-2"
                  />
                  <div>
                    <p className="font-bold">Email:</p>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="social-media" className="mt-8">
              <h2 className="text-xl font-bold mb-4">Social Media</h2>
              <div className="flex items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174883.png" // YouTube icon URL
                  alt="YouTube"
                  className="w-8 h-8 mr-2"
                />
                <p>YouTube</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174848.png" // Facebook icon URL
                  alt="Facebook"
                  className="w-8 h-8 mr-2"
                />
                <p>Facebook</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" // Instagram icon URL
                  alt="Instagram"
                  className="w-8 h-8 mr-2"
                />
                <p>Instagram</p>
              </div>
              <div className="flex items-center mt-2">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733579.png" // Twitter icon URL
                  alt="Twitter"
                  className="w-8 h-8 mr-2"
                />
                <p>Twitter</p>
              </div>
            </div>

            <div id="team" className="mt-8">
              <h2 className="text-xl font-bold mb-4">Zespół</h2>
              <div className="flex justify-around">
                <div className="flex items-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg" // Random person image URL
                    alt="Team Member 1"
                    className="w-32 h-32 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p>Designer</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg" // Random person image URL
                    alt="Team Member 2"
                    className="w-32 h-32 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p>Developer</p>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg" // Random person image URL
                    alt="Team Member 3"
                    className="w-32 h-32 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">Robert Johnson</p>
                    <p>Marketing</p>
                  </div>
                </div>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

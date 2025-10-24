import React from "react";
import { LinkedinIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-slate-100 py-4 text-sm text-zinc-900/85">
      <div className="container mx-auto px-4 lg:px-48 ">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div className="flex w-60 items-center">
            <div>
              <p>8346 McGill ct, Laurel</p>
              <p>20723</p>
              <p>p: 443-254-3508 </p>
              <p>e: info@theTabTech.com</p>
            </div>
          </div>
          {/* Client asked to remove this section 

          <div className="items-center0 mt-4 flex md:mt-0">
            <div>
              <p>DUNS: 080045252</p>
              <p>CAGE: 7K3M4</p>
              <p>GSA: 47QTCA22D0051</p>
            </div>
          </div> */}
          <div className="">
            <div className="">
              <p className="text-lg font-semibold">Connect with us:</p>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src="/vercel.svg" alt="LinkedIn" className="h-6" /> */}
                <div className="text-orange-600">
                  {/* <LinkedInSVG /> */}
                  <LinkedinIcon size={28} />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="pt-2 text-zinc-900/50"></p>
          <p>&copy; 2024 TheTabTech, LLC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

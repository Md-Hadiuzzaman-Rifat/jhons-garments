import Image from "next/image";
import React from "react";
import RootLayout from "@/app/layout";
import Footer from "@/components/Footer/Footer";

const NotFound = () => {
  return (
    <div>
      <RootLayout>
        <div className="w-full h-screen flex justify-center items-center">
          <Image
            className="object-cover h-screen w-full"
            src="/images/pageNotFound.jpg"
            alt="Not Found Image"
            width={1200}
            height={400}
          ></Image>
        </div>
      </RootLayout>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;

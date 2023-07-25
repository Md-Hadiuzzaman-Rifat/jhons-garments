import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import RecentBlog from "../RecentBlog/RecentBlog";
import BoxContainer from "../BoxContainer/BoxContainer";
import { servicesDetails, categories } from "./boxArray";
import PostBanner from "../PostBanner/PostBanner";
import "./SinglePost.css";
import { AiOutlineSearch } from "react-icons/ai";
import SocialLinks from "../SocialLinks/SocialLinks";

const SinglePost = () => {
  return (
    <div className="w-full">
      <div className="width  customFlexLgSeq gap-8">
        {/* // left side  */}
        <div style={{ flex: 7 }} className="SinglePostLeft flex flex-col gap-8">
          <h1>Textile Designing: Types, Importance and Impacts</h1>
          <div></div>
          <p>
            Integer consectetur est ac tincidunt pulvinar. Aliquam in sapien
            venenatis, tincidunt lacus eu, fermentum libero sed. Fusce gravida,
            mauris et suscipit imperdiet, leo dolor sollicitudin nisl, id cursus
            justo est sit amet ipsum. Quisque en eget finibus tortor. Integer id
            ipsum eu massa pretium pulvinar non vitae massa. Donec ut dignissim.
          </p>
          <Image
            className="rounded-lg"
            height={700}
            width={900}
            src="/images/machine.jpg"
            alt="machine image"
          ></Image>
          <p>
            Integer consectetur est ac tincidunt pulvinar. Aliquam in sapien
            venenatis, tincidunt lacus eu, fermentum libero sed. Fusce gravida,
            mauris et suscipit imperdiet, leo dolor sollicitudin nisl, id cursus
            justo est sit amet ipsum. Quisque ut eget finibus tortor. Integer id
            ipsum eu massa pretium pulvinar non vitae massa. Donec ut dignissim
            metus mauris. Aenean vulputate ex sed sem aliquet dapibus. Mauris
            imperdiet magna nec augue mollis viverra. Donec molestiem sit amet
            felis ac tincidunt. Sed pretium suscipit mi, sit amet gravida magna
            imperdiet non. Integer consectetur est ac tincidunt pulvinar.
            Aliquam in sapien venenatis, tincidunt lacus eu, fermentum libero
            sed. Fusce gravida, mauris et suscipit imperdiet, leo dolor
            sollicitudin nisl, id cursus justo est sit amet ipsum. Quisque en
            eget finibus tortor. Integer id ipsum eu massa pretium pulvinar non
            vitae massa. Donec ut dignissim.
          </p>
          <h3 className="font-semibold text-2xl">Impact on The Environment</h3>
          <p>
            Aliquam in sapien venenatis, tincidunt lacus eu, fermentum libero
            sed. Fusce gravida, mauris et suscipit imperdiet, leo dolor
            sollicitudin nisl, id cursus justo est sit amet ipsum. Quisque en
            eget finibus tortor.
          </p>
          {/* point section container  */}
          <div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>
                Nam tempus libero feugiat auctor fermentum. Nam id nunc dui.
              </p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>
                Suspendisse vestibulum pretium nunc, bibendum sollicitudin
                tortor pulvinar ut.
              </p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>Nunc luctus risus in eros imperdiet viverra fermentum.</p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>Praesent pharetra, massa eget euismod vulputate.</p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>
                Aliquam commodo vulputate enim, in condimentum lorem sodales
                id..
              </p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>
                Nulla in nibh at leo faucibus molestie eget nec velit fermentum.
              </p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>Proin tempus lorem nibh, eget iaculis turpis luctus vehicu.</p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>Integer consectetur est ac tincidunt pulvinar.</p>
            </div>
            <div className="customFlex">
              <AiOutlineArrowRight className="customText me-2 my-3 text-[20px]"></AiOutlineArrowRight>
              <p>Donec vel imperdiet neque, sit amet facilisis.</p>
            </div>
          </div>
          <div className="w-full border-2 my-4 border-[#a6587c]"></div>
          <SocialLinks></SocialLinks>
        </div>
        <div style={{ flex: 3 }} className="SinglePostRight">
          <div className="postInput mb-8">
            <input type="text" placeholder="Search..." />{" "}
            <AiOutlineSearch className="searchIcon"></AiOutlineSearch>
          </div>
          <RecentBlog></RecentBlog>
          <div className="mt-16">
            {
              <BoxContainer
                className="rounded-lg "
                itemsArray={servicesDetails}
                text="text-white"
                theme="customBlue"
                title="Our Services"
              ></BoxContainer>
            }
          </div>
          <PostBanner></PostBanner>
          <div className="mt-16">
            {
              <BoxContainer
                className="rounded-lg"
                properties="border-2 border-[#a6587c] mb-16"
                itemsArray={categories}
                text="text-black"
                theme="bg-white"
                title="Categories"
              ></BoxContainer>
            }
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

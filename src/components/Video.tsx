import { FC, useState } from "react";
import ReactPlayer from "react-player";

const YouTubePlayer: FC<{ url: string }> = ({ url }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className="relative flex flex-col items-center m-12 group cursor-pointer"
      onClick={handleClick}
    >
      {!isClicked && (
        <button
          onClick={handleClick}
          className="absolute gap-6 flex items-center bottom-[15%] left-[10%] z-50 bg-[#b6b5b57e] transition-transform duration-700 group-hover:scale-110 text-white tracking-widest py-5 text-xl px-8 rounded-full"
        >
          <div className="h-9 w-9">
            <svg
              viewBox="-0.5 0 8 8"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>play [#1001]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-427.000000, -3765.000000)"
                    fill="#FF9E1B"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <polygon
                        id="play-[#1001]"
                        points="371 3605 371 3613 378 3609"
                      >
                        {" "}
                      </polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
          <div>WATCH NOW</div>
        </button>
      )}
      <div className="relative">
        {!isClicked && (
          <div className="absolute w-full h-full bg-slate-300 opacity-50"></div>
        )}
        <ReactPlayer
          controls={isClicked ? true : false}
          width={"100%"}
          height={"100%"}
          muted={!isClicked}
          url={url}
          style={{ display: "flex" }}
          playing={true}
        />
      </div>
      <div className="h-4 w-[92%] -mt-2 -z-10 bg-my_yellow"></div>
    </div>
  );
};

export default YouTubePlayer;

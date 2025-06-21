import Me from "../../assets/images/me.jpeg";
import { HoverTextLink } from "../../components/design system/HoverLink";
import { Links } from "../../Links";

export const Connect = () => {
  const linkedinIcon = (
    <svg
      fill="currentColor"
      height="800px"
      width="800px"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 310 310"
      className="h-[1rem] w-[1rem] light:text-[#333333] dark:text-white"
    >
      <g id="XMLID_801_">
        <path
          id="XMLID_802_"
          d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
        />
        <path
          id="XMLID_803_"
          d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
        />
        <path
          id="XMLID_804_"
          d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
        />
      </g>
    </svg>
  );

  const githubIcon = (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[1rem] w-[1rem] light:text-[#333333] dark:text-white"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="currentColor"
      />
    </svg>
  );

  const emailIcon = (
    <svg
      fill="currentColor"
      width="128"
      height="128"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[1rem] w-[1rem] light:text-[#333333] dark:text-white"
    >
      <path d="M 28.0468 30.7070 C 29.0312 30.7070 29.9218 30.2617 30.9296 29.2305 L 51.3200 9.0508 C 50.4532 8.2070 48.8360 7.8086 46.5157 7.8086 L 8.7812 7.8086 C 6.8124 7.8086 5.4296 8.1836 4.6562 8.9570 L 25.1640 29.2305 C 26.1718 30.2383 27.0858 30.7070 28.0468 30.7070 Z M 2.7109 44.4180 L 19.2812 28.0352 L 2.6640 11.6523 C 2.3124 12.3086 2.1249 13.4336 2.1249 15.0508 L 2.1249 40.9258 C 2.1249 42.5898 2.3358 43.7617 2.7109 44.4180 Z M 53.3360 44.3945 C 53.6874 43.7148 53.8751 42.5664 53.8751 40.9258 L 53.8751 15.0508 C 53.8751 13.4805 53.7109 12.3555 53.3591 11.7227 L 36.8124 28.0352 Z M 9.4843 48.1914 L 47.2184 48.1914 C 49.1874 48.1914 50.5468 47.8164 51.3200 47.0664 L 34.4452 30.3320 L 32.8749 31.9023 C 31.2812 33.4492 29.7577 34.1523 28.0468 34.1523 C 26.3358 34.1523 24.8124 33.4492 23.2187 31.9023 L 21.6484 30.3320 L 4.7968 47.0430 C 5.6874 47.8164 7.2577 48.1914 9.4843 48.1914 Z" />
    </svg>
  );

  const spotifyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      className="h-[1rem] w-[1rem] light:text-[#333333] dark:text-white"
    >
      <path
        d="M32 0C14.3 0 0 14.337 0 32c0 17.7 14.337 32 32 32 17.7 0 32-14.337 32-32S49.663 0 32 0zm14.68 46.184c-.573.956-1.797 1.223-2.753.65-7.532-4.588-16.975-5.62-28.14-3.097-1.07.23-2.14-.42-2.37-1.49s.42-2.14 1.49-2.37c12.196-2.79 22.67-1.606 31.082 3.556a2 2 0 0 1 .688 2.753zm3.9-8.717c-.726 1.185-2.256 1.53-3.44.84-8.602-5.276-21.716-6.805-31.885-3.747-1.338.382-2.714-.344-3.097-1.644-.382-1.338.344-2.714 1.682-3.097 11.622-3.517 26.074-1.835 35.976 4.244 1.147.688 1.49 2.217.765 3.403zm.344-9.1c-10.323-6.117-27.336-6.69-37.2-3.708-1.568.497-3.25-.42-3.747-1.988s.42-3.25 1.988-3.747c11.317-3.44 30.127-2.753 41.98 4.282 1.415.84 1.873 2.676 1.032 4.09-.765 1.453-2.638 1.912-4.053 1.07z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <div className="flex flex-col gap-10 text-left">
      <span className="text-2xl">Let's be internet friends</span>
      <div className="flex gap-10 items-center">
        <div className="w-48 h-48">
          <img
            src={Me}
            alt="Me"
            className="rounded-full h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col text-xl">
          <HoverTextLink to={Links.get("LinkedIn") ?? ""}>
            <div className="flex items-center gap-2">
              {linkedinIcon}connect with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("GitHub") ?? ""}>
            <div className="flex items-center gap-2">
              {githubIcon}code with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("Email") ?? ""}>
            <div className="flex items-center gap-2">
              {emailIcon}chat with me
            </div>
          </HoverTextLink>
          <HoverTextLink to={Links.get("Spotify") ?? ""}>
            <div className="flex items-center gap-2">
              {spotifyIcon}jam with me
            </div>
          </HoverTextLink>
        </div>
      </div>
    </div>
  );
};

import InstagramBtn from "./UiBtn/InstagramBtn";
import YoutubeBtn from "./UiBtn/YoutubeBtn";
import DiscordBtn from "./UiBtn/DiscordBtn";
import FacebookBtn from "./UiBtn/FacebookBtn";
import XBtn from "./UiBtn/XBtn";
import EmailBtn from "./UiBtn/EmailBtn";
import GithubBtn from "./UiBtn/GithubBtn";

function ContactCard() {
  return (
      <div className="container flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 m-4">
        <div className="flex h-130">
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 items-center justify-center">
            <h2 className="text-3xl">Social Media</h2>
            <InstagramBtn />
            <FacebookBtn />
            <YoutubeBtn />
            <XBtn />
          </div>
        </div>

        <div className="flex flex-col gap-3  items-center justify-center">
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 items-center justify-center">
            <h2 className="text-3xl">Dev</h2>
            <GithubBtn />
            <DiscordBtn />
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col gap-3 items-center justify-center">
            <h2 className="text-3xl">Formal Contact</h2>
            <EmailBtn />
          </div>
        </div>
      </div>
  )
}

export default ContactCard

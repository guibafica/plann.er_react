import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <p className="text-zinc-300 text-lg">
            Invite your friends e plan you next trip!
          </p>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="When?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>

            <div className="w-[2px] h-6 bg-zinc-600" />

            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400">
              Continue
              <ArrowRight className="size-5" />
            </button>
          </div>

          <p className="text-sm text-zinc-500">
            When planning your trip through plann.er you automatically <br />{" "}
            agree to our{" "}
            <a className="text-zinc-300 underline" href="#">
              terms of use
            </a>{" "}
            and{" "}
            <a className="text-zinc-300 underline" href="#">
              privacy policies
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}

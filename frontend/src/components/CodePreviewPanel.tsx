import Icon from "./custom-ui/Icon";

const CodePreviewPanel = () => {
  return (
    <section className="hidden lg:flex w-1/2 bg-slate-950 flex-col justify-between p-12 relative h-full">
      <div className="z-10">
        <div className="flex items-center gap-2 mb-8">
          <Icon name="terminal" size={30} className="text-codehub-primary" />
          <span className="font-mono text-xl font-bold tracking-tight text-slate-100">
            Terminal v2.4.0
          </span>
        </div>
        <div className="font-mono text-sm sm:text-base leading-relaxed">
          <p className="text-emerald-400 mb-2">{`class CodeHubEngine {`}</p>
          <p className="text-slate-400 ml-4"> {`constructor() {`}</p>
          <p className="text-codehub-primary ml-8">
            {" "}
            this.status = "initializing";
          </p>
          <p className="text-codehub-primary ml-8">
            {" "}
            this.auth = new AuthProvider();
          </p>
          <p className="text-slate-400 ml-4"> {`}`}</p>
          <p className="text-slate-400 ml-4 mt-2">
            {" "}
            {` async authenticate(user) {`}
          </p>
          <p className="text-amber-300 ml-8">
            {" "}
            const session = await this.auth.verify(user);
          </p>
          <p className="text-amber-300 ml-8"> {`if (session.valid) {`}</p>
          <p className="text-emerald-400 ml-12"> return "Access Granted";</p>
          <p className="text-amber-300 ml-8"> {`}`}</p>
          <p className="text-slate-400 ml-4"> {`}`}</p>
          <p className="text-emerald-400 mt-2">{`}`}</p>
          <div className="mt-4 flex items-center gap-1">
            <span className="text-slate-100">$</span>
            <span className="text-slate-100">node codehub.js</span>
            <span className="w-2 h-5 bg-codehub-primary animate-pulse ml-1"></span>
          </div>
        </div>
      </div>
      <div className="z-10 mt-auto">
        <span className="font-mono text-2xl font-bold tracking-tighter text-white">
          CodeHub
        </span>
      </div>
      {/*  Background Decoration */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-codehub-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-linear-to-t from-codehub-primary/20 to-transparent"></div>
      </div>
    </section>
  );
};
export default CodePreviewPanel;

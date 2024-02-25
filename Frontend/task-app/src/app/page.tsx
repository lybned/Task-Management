

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex w-70  items-center justify-around p-24">
        <div className={"w-1/2"}>
          <p className={"text-5xl mb-10"}>Having Trouble Managing Your Tasks?</p>
          <p className={"text-3xl mb-10"}>Let TaskMaster Take Care of It!</p>
          <button className={"px-3 py-2 rounded-full font-bold me-5 text-xl bg-lime-200"}>Get Started!</button>     
        </div>   
        <div className={"w-1/3"}>
          <img src="task.jpg"/>
          <p>Designed by <a className={"text-teal-700"} href="https://www.freepik.com/">Freepick</a></p>
        </div>     
      </div>
    </main>
  );
}

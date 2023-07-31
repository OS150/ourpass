import Link from "next/link"

export default function Dashboard() {
  return (
    <main>
      <div data-theme="light">
        <div className='flex flex-col items-center justify-center h-screen'>
          <div className="flex flex-col items-center card w-96 bg-base-100 shadow-xl">

            <figure className="px-10 pt-10">
              <img src="https://images.pexels.com/photos/2085998/pexels-photo-2085998.jpeg" alt="Space" className="rounded-xl" />
            </figure>
            <h1 className='font-bold text-4xl p-2'>Sign Up</h1>
            <p className='flex flex-col items-center'>OurPass lets you share your accounts with your friends!</p>
            <div className="card-body items-center text-center">
              <form className='flex flex-col items-center justify-center'>
                <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" />
                <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
        {/* <div data-theme="light">
          <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='font-bold text-4xl p-5'>Sign Up</h1>
            <form className='flex flex-col items-center justify-center'>
              <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
              <input type="password" placeholder="Password" className="input input-bordered input-info w-full max-w-xs" />
              <button type="submit" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign Up</button>
            </form>
          </div> */}
        {/* <Link href="/dashboard"> Go to Dashboard</Link> */}
        {/* <div className='flex-col'> */}
        {/* </div> */}
        {/* <span data-theme="retro">This span will always use retro theme!</span> */}
      </div>
    </main >
  )
}
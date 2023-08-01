import React from "react";

export default function Create(): JSX.Element {
  return (
    <div data-theme='light'>
      <div className='m-5 flex flex-col items-center'>
        <h1 className='flex flex-col items-center text-4xl my-10'>Add A New Subscription</h1>
        <form className="w-full max-w-xl">
          <div className="flex flex-col -mx-3 mb-6">
            {/* Start of Subscription Name */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Subscription Name:
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Name of Subscription" />
            </div>
            {/* Start of Textbox with user's login information */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Subscription Information:
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Username/Email/Password Info" />
            </div>

            {/* Start of QR Code or Media Upload */}
            <div className="form-control w-full max-w-xs">
              <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
              <label className="label">
                <span className="label-text-alt italic">
                  Optional: Upload Media for Subscription
                </span>
              </label>
            </div>
            {/* Number of Users */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Maximum Number of Users:
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="# of Max Users" />
            </div>
            {/* Create Rules */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                Rules of Usage:
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Describe any rules here..." />
            </div>
            {/* Invite Emails */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                User to Invite:
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Recipient Email Address..." />
            </div>
            {/* Create Button */}
            <button className="btn btn-active btn-primary">Create Subscription</button>
          </div>
        </form>
      </div >
    </div >
  );
}
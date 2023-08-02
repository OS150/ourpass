'use client'

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';




export default function Create(): JSX.Element {
  const session = useSession();
  const [email, setEmail] = useState(session.data?.user?.email);
  const [info, setInfo] = useState<any>({ email });

  const setName = (e: any) => {
    setInfo({ ...info, name: e.target.value });
  }

  const setText = (e: any) => {
    setInfo({ ...info, text: e.target.value });
  }

  const setMedia = (e: any) => {
    setInfo({ ...info, upload: '' })
    console.log(e); //call this upload
  }

  const setAddInfo = (e: any) => {
    setInfo({ ...info, add_info: e.target.value });
  }

  const setInvite = (e: any) => {
    setInfo({ ...info, invite: e.target.value });
  }

  const createSubscription = async (e: any) => {
    e.preventDefault();
    // const onClick = async (e: any) => {
    const response = await fetch('/api/newsubscription', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    // console.log(response, 'this is the response')
    if (response.status != 200) {
      throw Error("Failed to post new subscription");
    }
 
  }

  return (
    <div data-theme="light">
      <div className="m-5 flex flex-col items-center">
        <Link href='/feed'><button>
          <h2>Back to Feed</h2>
        </button></Link>
        <h1 className="flex flex-col items-center text-4xl my-10">
          Add A New Subscription
        </h1>
        <form className="w-full max-w-xl">
          <div className="flex flex-col -mx-3 mb-6">
            {/* Start of Subscription Name */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Subscription Name:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Name of Subscription"
                onChange={setName}
              />
            </div>
            {/* Start of Textbox with user's login information */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Subscription Details:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Any passwords, usernames, or other secret text to share..."
                onChange={setText}
              />
            </div>

            {/* Start of QR Code or Media Upload */}
            <div className="form-control w-full max-w-xs">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={setMedia}
              />
              <label className="label">
                <span className="label-text-alt italic">
                  Optional: Upload Media for Subscription
                </span>
              </label>
            </div>
            {/* Add additional info */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Additional Information:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Describe any rules here..."
                onChange={setAddInfo}
              />
            </div>
            {/* Invite Emails */}
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 block"
                htmlFor="grid-first-name"
              >
                User to Invite:
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Enter recipient email address..."
                onChange={setInvite}
              />
            </div>
            {/* Create Button */}
           
            <button onClick={createSubscription} className="btn btn-active btn-primary">
                Create Subscription
            
              </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

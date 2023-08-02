'use client'

import { useSession } from 'next-auth/react';
import FeedItem, { FeedItemProps } from './FeedItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export default function Feed() {
  const session = useSession();
  const [email, setEmail] = useState(session.data?.user?.email);
  const [items, setItems] = useState([]);
  useEffect(() => {
    // inner func
    (async () => {
      // fetch the data from the backend
      const response = await fetch('/api/feed/', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // collect the array (sent as result)
      const { result } = await response.json();
      // map the data into the FeedItemProps format
      setItems(result.map((prop: FeedItemProps, index: number) => {
        // add a modal_id
        prop['modal_id'] = 'sub_' + index;
        // return the JSX component
        return <FeedItem {...prop} key={index} />;
      }));
    })();
  }, []);

  return (
    <div data-theme="light">
      <div className="flex flex-row justify-between margin m-5">
        <h1 className="font-bold text-4xl p-2">My Subscriptions</h1>
        <Link href="/api/auth/signout">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Sign out
          </button>
        </Link>
      </div>
      <Link href="/create">
        <button className="btn btn-primary m-5">Add A Subscription</button>
      </Link>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Subscription Name</th>
              <th>Information</th>
              <th>Date created</th>
              <th>Created by</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
        <footer>Signed in with the email: {email}</footer>
      </div>
    </div>
  );
}

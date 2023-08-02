import FeedItem, { FeedItemProps } from './FeedItem';
import Link from 'next/link';

export default function Feed() {
  const props: Array<FeedItemProps> = [
    {
      avatar: '/flogo.svg',
      created_by: 'Joey Cheng!!~~!~!!',
      info: 'HI JOEY!',
      description: 'goldman sachs subscription',
      date_created: new Date().toLocaleDateString(),
      modal_id: 'joey-modal',
    },
    {
      avatar: '/github-mark.svg',
      created_by: 'Ian Mac!!~~!~!!',
      info: 'HI Ian!',
      description: 'amazon subscription',
      date_created: new Date().toLocaleDateString(),
      modal_id: 'joey-modal2',
    },

    {
      avatar: '/glogo.svg',
      created_by: 'Joey Cheng!!~~!~!!',
      info: 'HI Elinor!',
      description: 'pret subscription',
      date_created: new Date().toLocaleDateString(),
      modal_id: 'joey-modal3',
    },
  ];

  const items: Array<JSX.Element> = props.map((prop) => <FeedItem {...prop} />);

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
      </div>
    </div>
  );
}

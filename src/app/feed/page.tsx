import FeedItem, { FeedItemProps } from './FeedItem';
import FeedItemProps from './FeedItem';

export default function Feed() {
  const props: Array<FeedItemProps> = [
    {
      avatar: '/flogo.svg',
      created_by: 'Joey Cheng!!~~!~!!',
      info: 'HI JOEY!',
      description: 'goldman sachs subscription',
    },
    {
      avatar: '/github-mark.svg',
      created_by: 'Ian Mac!!~~!~!!',
      info: 'HI Ian!',
      description: 'amazon subscription',
    },

    {
      avatar: '/glogo.svg',
      created_by: 'Joey Cheng!!~~!~!!',
      info: 'HI Elinor!',
      description: 'pret subscription',
    },
  ];

  const items: Array<JSX.Element> = props.map((prop) => <FeedItem {...prop} />);

  return (
    <div data-theme="light">
      <div className="flex flex-row justify-between margin m-5">
        <h1 className="font-bold text-4xl p-2">My Subscriptions</h1>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          Add Subscription
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
                    <input type="checkbox" className="checkbox" />
                  </label> */}
              </th>
              <th>Subscription Name</th>
              <th>Information</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
    </div>
  );
}

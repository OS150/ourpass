import React from 'react';

export type FeedItemProps = {
  avatar: string;
  description: string;
  created_by: string;
  info: string;
};

export default function FeedItem({
  avatar,
  description,
  created_by,
  info,
}: FeedItemProps) {
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={avatar} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{description}</div>
            <div className="text-sm opacity-50">{created_by}</div>
          </div>
        </div>
      </td>
      <td>
        {info}
        <br />
        <span className="badge badge-ghost badge-sm">In Use</span>
      </td>
    </tr>
  );
}

import React from 'react';
import Link from 'next/link';

export type FeedItemProps = {
  avatar: string;
  description: string;
  created_by: string;
  info: string;
  date_created: string;
  link: string;
};

export default function FeedItem({
  avatar,
  description,
  created_by,
  date_created,
  info,
  link,
}: FeedItemProps) {
  return (
    <tr>
      {/* Icon with name of subscription here: */}
      <td>
        <Link href={link}>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={avatar} alt="Avatar" />
              </div>
            </div>
            <div>
              <div className="font-bold">{description}</div>
              <span className="badge badge-ghost badge-sm">View Details</span>
            </div>
          </div>
        </Link>
      </td>

      {/* Info, including rules, here:  */}
      <td>
        {info}
        <br />
        <span className="badge badge-ghost badge-sm">In Use</span>
      </td>
      {/* Date created here: */}
      <td>{date_created}</td>

      {/* Person who created it here:  */}
      <td>
        <div className="text-sm opacity-50">{created_by}</div>
      </td>
    </tr>
  );
}

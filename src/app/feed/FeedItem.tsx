import React from 'react';
import Link from 'next/link';
import SubCard from './SubCard';

export type FeedItemProps = {
  avatar: string;
  description: string;
  created_by: string;
  info: string;
  date_created: string;
  modal_id: string;
};

export default function FeedItem({
  avatar,
  description,
  created_by,
  date_created,
  info,
  modal_id,
}: FeedItemProps) {
  return (
    <tr>
      {/* Icon with name of subscription here: */}
      <td>
        <label htmlFor={modal_id} className="btn">
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
        </label>

        {/* This is where the modal starts */}
        <input type="checkbox" id={modal_id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <SubCard description={description}></SubCard>
          </div>
          <label className="modal-backdrop" htmlFor={modal_id}>
            Close
          </label>
          {/* This is where the modal ends */}
        </div>
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

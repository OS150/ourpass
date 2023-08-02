'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { flightRouterStateSchema } from 'next/dist/server/app-render/types';

export interface SecretPropsBase {
  secretAddr: string;
}

export interface SecretProps extends SecretPropsBase {
  toRender: (secret: string) => JSX.Element;
}

function Secret({ secretAddr, toRender }: SecretProps) {
  const [secret, setSecret] = useState('');
  return (
    <div className="blur-2xl hover:blur-none">{toRender('Hey There')}</div>
  );
}

function TextSecret(props: SecretPropsBase): JSX.Element {
  return (
    <Secret
      {...props}
      toRender={(secret: string) => {
        return (
          <div>
            <span className="text-lg">{secret}</span>
          </div>
        );
      }}
    />
  );
}

function MediaSecret(props: SecretPropsBase): JSX.Element {
  return (
    <Secret
      {...props}
      toRender={(secret: string) => {
        return (
          <figure className="max-w-lg">
            <img
              src="https://defenders.org/sites/default/files/styles/meta_image/public/2019-04/bighorn_sheep_montana_megan_joyce_header_0.jpg?itok=MDHAieMR"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
        );
      }}
    />
  );
}

export interface SubCardProps {
  description: string;
}

export default function SubCard({ description }: SubCardProps): JSX.Element {
  // 1.0 query subscription information
  const [textSecret, setTextSecret] = useState<JSX.Element>();
  const [mediaSecret, setMediaSecret] = useState<JSX.Element>();

  // // we can do a fetch up here for the cool info...
  // const searchParams = useSearchParams();
  // const search = searchParams.get('search');
  // // console.log(search);

  useEffect(() => {
    setTextSecret(<TextSecret secretAddr="/api/whatever/whatever" />);
    setMediaSecret(<MediaSecret secretAddr="/api/whatever/whatever" />);
  }, []);

  return (
    <div data-theme="light" className="flex flex-col items-center">
      <div className="card bg-base-100 shadow-xl">
        <div className="flex flex-col items-left m-5">
          <h1 className="font-bold text-4xl">{description || 'Description'}</h1>
          <div className="flex flex-wrap">
            <span className="font-bold mr-4 text-lg">Text: </span>
            {textSecret}
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-lg">Media: </div>
            {mediaSecret}
          </div>
          <div className="flex flex-col">
            <div className="form-control w-23">
              <label className="cursor-pointer label">
                <span className="label-text">Mark In Use</span>
                <input
                  type="checkbox"
                  className="toggle toggle-lg toggle-success"
                  onClick={() => {
                    console.log('Ian is the best. Wowwee! So amazing!');
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

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
            <span>{secret}</span>
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
          <div>
            <div>{secret}</div>
          </div>
        );
      }}
    />
  );
}

export default function SecretsPage(): JSX.Element {
  // 1.0 query subscription information
  const [description, setDescription] = useState('');
  const [textSecret, setTextSecret] = useState<JSX.Element>();
  const [mediaSecret, setMediaSecret] = useState<JSX.Element>();

  // // we can do a fetch up here for the cool info...
  // const searchParams = useSearchParams();
  // const search = searchParams.get('search');
  // // console.log(search);

  useEffect(() => {
    setDescription('My subscription');
    setTextSecret(<TextSecret secretAddr="/api/whatever/whatever" />);
    setMediaSecret(<MediaSecret secretAddr="/api/whatever/whatever" />);
  }, []);

  return (
    <div className="to-blue-600">
      <h1>{description || 'Description'}</h1>
      <div>
        <span className="font-bold">Text: </span>
        {textSecret}
      </div>
      <div>
        <div className="font-bold">Media: </div>
        {mediaSecret}
      </div>
    </div>
  );
}

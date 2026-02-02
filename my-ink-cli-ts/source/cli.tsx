#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './app.js';

const cli = meow(
	`
	Usage
	  $ my-ink-cli-ts

	Options
		--name  Your name

	Examples
	  $ my-ink-cli-ts --name=Jane
	  Hello, Jane
`,
	{
		importMeta: import.meta,
		flags: {
			name: {
				type: 'string',
				alias: 'n',
			},
		},
	},
);

render(<App name={cli.flags.name} />);

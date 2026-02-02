#!/usr/bin/env zx
import 'zx/globals'


await $`echo "Hello from zx!"`

const branch = await $`git branch --show-current`
console.log(`Current branch: ${branch.stdout.trim()}`)

await spinner('Working...', () => $`sleep 2`)

console.log(chalk.green('Done!'))

import { sleep } from '@mrspartak/promises';
import { copyFile } from 'node:fs/promises'
import task from 'tasuku'

// awaited task


await task('Copying file from path A to B', async ({ setTitle }) => {
    await copyFile('./demo_files/file-a.txt', './demo_files/file-b.txt');

    await sleep(2000)

    setTitle('Successfully copied file from path A to B!')
})

// parallel task


task('Task 1', async () => {
    await basicTask()
})

task('Task 2', async () => {
    await basicTask()
})

task('Task 3', async () => {
    await basicTask()
})




function basicTask() {

    return sleep(2000)
}

//Nesting tasks

await task('Do task', async ({ task }) => {
    await basicTask()

    await task('Do another task', async ({ task }) => {
        await basicTask()

        await task('And another', async () => {
            await basicTask()
        })
    })
})
process.stdout.write('hello from spinner1.js... \rheyyy\n');
/*
How this works:

Each character is a delayed write, using setTimeout

With each delayed write, we start with returning the cursor to the beginning

We then write the next character in the animation

Spaces are added after the character so that the cursor moves far enough away from our animation

Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see
*/

setTimeout(() => { //start of the spinning line animation
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
} , 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ');
} , 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
},  1700);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1900);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 2100);

setTimeout(() => {
  process.stdout.write('\r\\   ');
} , 2300);

setTimeout(() => {
  process.stdout.write('\r|   ');
} , 2500);
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.resolve(__dirname, 'public/videos');
const input = path.resolve(__dirname, 'src/assets/images/fakhr-portrait.jpg');
const ffmpegBin = process.env.FFMPEG_PATH || 'ffmpeg';

if (!fs.existsSync(input)) {
  throw new Error(`Missing portrait input: ${input}`);
}
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const clips = ['wedding', 'corporate', 'birthday'];

for (const name of clips) {
  const output = path.join(outputDir, `${name}.mp4`);
  const args = [
    '-y',
    '-loop', '1',
    '-i', input,
    '-t', '4',
    '-vf', 'scale=720:-2,format=yuv420p,fade=t=in:st=0:d=0.7,fade=t=out:st=3:d=0.8',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '28',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-an',
    output,
  ];
  execFileSync(ffmpegBin, args, { stdio: 'inherit' });
}

console.log('Generated video assets in public/videos');

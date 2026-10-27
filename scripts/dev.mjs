// Accept ordinary Next flags and the managed preview supervisor's Vite-style flags.
import {spawn} from 'node:child_process';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),args=process.argv.slice(2).filter(x=>x!=='--strictPort').map(x=>x==='--host'?'--hostname':x);
const production=args.includes('--production');
const filtered=args.filter(x=>x!=='--production');
const child=spawn(process.execPath,[require.resolve('next/dist/bin/next'),production?'start':'dev',...(production?[]:['--webpack']),...filtered],{stdio:'inherit'});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??0));

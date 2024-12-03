import zopfli from '@gfx/zopfli';

process.on('uncaughtException', () => console.log('not stepped into here'));

throw new Error();

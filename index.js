import zopfli from '@gfx/zopfli';

process.on('uncaughtException', () => console.log('not stepped into here'));

// spitted whole code of library at the same throwing
throw new Error();

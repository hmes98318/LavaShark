import {runSourceMetadataTests} from './test-sources-utils';
import type {MetadataTestCase} from './test-sources-utils';

const APPLE_MUSIC_TEST_CASES: MetadataTestCase[] = [
    {
        url: 'https://music.apple.com/us/album/for-you/714893524?i=714893712',
        expectedLoadType: 'track',
    },
    {
        url: 'https://music.apple.com/us/album/red/1440935340',
        expectedLoadType: 'playlist',
    },
    {
        url: 'https://music.apple.com/us/playlist/hits-2026-todays-hits/pl.f8f5a99597794dcfac4bc206bf309c93',
        expectedLoadType: 'playlist',
    },
    {
        url: 'https://music.apple.com/us/artist/taylor-swift/159260351',
        expectedLoadType: 'playlist',
    },
    {
        url: 'https://music.apple.com/us/artist/keith-urban/549836',
        expectedLoadType: 'playlist',
    },
    {
        url: 'https://music.apple.com/us/album/highway-dont-care-feat-taylor-swift-keith-urban/1440934150?i=1440935305',
        expectedLoadType: 'track',
    },
    {
        url: 'https://music.apple.com/us/album/one-too-many/1525794720?i=1525795239',
        expectedLoadType: 'track',
    },
    {
        url: 'https://music.apple.com/us/music-video/enchanted-taylors-version-lyric-video/1696244219',
        expectedLoadType: 'track',
    },
];

runSourceMetadataTests({
    sourceName: 'Apple Music',
    expectedSource: 'apple-music',
    disabledSources: ['DEEZER', 'SPOTIFY'],
    testCases: APPLE_MUSIC_TEST_CASES,
}).catch(error => {
    console.error(error);
    process.exitCode = 1;
});

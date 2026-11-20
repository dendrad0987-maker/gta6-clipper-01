# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/dendrad0987-maker/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/dendrad0987-maker/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Rockstar's official GTA 6 Launch Trailer: one
night-drive moment through Vice City — the neon aerial, the crew in the
green convertible, the red sports car, Lucia and Jason cruising — then the
pitch: make clips like this with AI and earn money on make.fun. The clip
is public on YouTube (see VIDEO.json); the video itself is the entry and
places go by its views.

The clip was cut in-session with ffmpeg from the official Launch Trailer
downloaded from rockstargames.com/VI/media/videos: the night-drive moment
is t≈17–28s of the trailer, the pitch runs over the "OUT NOW" dusk skyline
(t≈79–89s), cropped to 1080x1920 with the make.fun pitch as on-screen
text. `main.ts` copies VIDEO.json to the output directory, which is all
the program has to do.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dges9qk9&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>

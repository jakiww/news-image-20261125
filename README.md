# The World in One Day

[![make.fun](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/jakiww/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/jakiww/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

An entry for [Sum up 25 November's world news in one image](https://make.fun/bounty/news-image-20261125) on make.fun. Play code: `makefun-glove-pony-raven`.

## The image

A newspaper front page for Wednesday 25 November 2026, with six stories from that day:

1. **Two tankers hit by mines in Hormuz** — the IRGC says naval mines struck two oil tankers in the Strait of Hormuz; both caught fire. (Reuters)
2. **Hamas security chief killed in Gaza** — an Israeli strike on the Al-Shati camp kills Mohammad Abuelouf, his wife and two daughters. (Reuters)
3. **Russian strike knocks out power plant** — a DTEK thermal plant halts generation and power is cut in five regions. (Hudson Institute)
4. **Huawei guilty of trade-secret theft** — a US jury convicts on theft and bank fraud, and clears the racketeering charge. (Reuters / BBC)
5. **Pakistan's first astronaut in orbit** — China's Shenzhou-24 docks at its space station. (Reuters)
6. **RSF drones kill 19 civilians in Sudan** — strikes hit homes in Damazin; 20 more are wounded. (Reuters)

## Layout

The page opens with the masthead "THE WORLD IN ONE DAY" and the exact date, then six panels in a two-column by three-row grid. Every panel pairs a picture with a short all-caps caption and one factual detail line, so the whole day reads at a glance. The image is 1024 by 1024 pixels, stored as JPEG bytes under the name `entry.png`.

## How it runs

`main.ts` (Node 22, standard library only) copies the bundled `entry.png` to the output directory. It makes no network calls, so two runs write byte-identical files.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).

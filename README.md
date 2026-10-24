<img height="150" alt="logo" src="public/imgs/big-logo.svg">  

A lightweight Lavalink client built with Node.js.  

### Features
* Stable  

* Object-oriented  

* Speedy and efficient  

* Minimal CPU/memory footprint


> **LavaShark v2** only supports **Lavalink v4** nodes.  


## Installation
Node.js **v22.19.0** or higher is required.  
* You need at least one [Lavalink Server](https://github.com/lavalink-devs/Lavalink) node to run. Please refer to the [Server Configuration](https://lavashark.js.org/docs/server-config) section for setting up the configuration.

```bash
$ npm install lavashark
# or
$ yarn add lavashark
```


## Documentation

You can find the documentation [**here**](https://lavashark.js.org/docs).


## LavaDSPX Plugin filters

LavaShark provides explicit helpers for the filters from [LavaDSPX-Plugin](https://github.com/Devoxin/LavaDSPX-Plugin). Install the plugin on your Lavalink node first:

```yaml
lavalink:
  plugins:
    - dependency: com.github.Devoxin:LavaDSPX-Plugin:{VERSION}
      repository: https://jitpack.io
```

The plugin filter names are different from Lavalink's built-in filters. In particular, LavaDSPX uses `low-pass` and `high-pass`, while Lavalink's built-in low-pass filter is `lowPass`.

```ts
player.filters
    .setLavaDSPXNormalization({ maxAmplitude: 0.5, adaptive: true }, false)
    .setLavaDSPXEcho({ echoLength: 0.3, decay: 0.5 }, false)
    .setLavaDSPXHighPass({ cutoffFrequency: 80, boostFactor: 1.0 }, false)
    .setLavaDSPXLowPass({ cutoffFrequency: 16000, boostFactor: 1.0 });
```

The resulting Lavalink player update contains:

```json
{
  "filters": {
    "pluginFilters": {
      "normalization": { "maxAmplitude": 0.5, "adaptive": true },
      "echo": { "echoLength": 0.3, "decay": 0.5 },
      "high-pass": { "cutoffFrequency": 80, "boostFactor": 1.0 },
      "low-pass": { "cutoffFrequency": 16000, "boostFactor": 1.0 }
    }
  }
}
```


## Help

If you encounter any issues or would like to contribute to the community, please join our [Discord server](https://discord.gg/7rQEx7SPGr).


## Development

See the project development documentation before contributing:

- [Development Guidelines](docs/development-guidelines.md)
- [TypeScript Coding Style](docs/coding-style.md)

---
sidebar_position: 2
---

# 伺服器配置

您需要下載 Lavalink 節點 ([lavalink-devs/Lavalink](https://github.com/lavalink-devs/Lavalink)) 並運行它，或者使用其他公共節點。  

如果你需要公共節點，可以參考以下存儲庫。  
* [DarrenOfficial/lavalink-list](https://github.com/DarrenOfficial/lavalink-list)
* [brblacky/lavalink-list](https://github.com/brblacky/lavalink-list)


## 使用二進制部署

從[下載伺服器](https://repo.arbjerg.dev/artifacts/lavalink/)、[GitHub releases](https://github.com/lavalink-devs/Lavalink/releases) 或 [GitHub actions](https://github.com/lavalink-devs/Lavalink/actions) 下載二進制文件。

在您的工作目錄中放置一個 `application.yml` 文件。（[範例在這裡](https://github.com/lavalink-devs/Lavalink/blob/master/LavalinkServer/application.yml.example)） 

從相同目錄中運行 `java -jar Lavalink.jar`  



## 使用Docker部署

Docker 鏡像可以在[Github packages](https://github.com/lavalink-devs/Lavalink/pkgs/container/lavalink) 或 [Docker Hub](https://hub.docker.com/r/fredboat/lavalink/) 中找到。  

安裝 [Docker](https://docs.docker.com/engine/install/) & [Docker Compose](https://docs.docker.com/compose/install/)  

建立一個名為 `docker-compose.yml` 的檔案，並包含以下內容：

```yml
services:
    lavalink:
        image: fredboat/lavalink:4.0.8 # pin the image version to Lavalink v4
        container_name: lavalink_v4
        restart: unless-stopped
        environment:
            - _JAVA_OPTIONS=-Xmx6G # set Java options here
            - SERVER_PORT=2333 # set lavalink server port
            - LAVALINK_SERVER_PASSWORD=youshallnotpass # set password for lavalink
        volumes:
            - ./application.yml:/opt/Lavalink/application.yml # mount application.yml from the same directory or use environment variables
            - ./plugins/:/opt/Lavalink/plugins/ # persist plugins between restarts, make sure to set the correct permissions (user: 322, group: 322)
        networks:
            - lavalink
        expose:
            - 2333 # lavalink exposes port 2333 to connect to for other containers (this is for documentation purposes only)
        ports:
            - 2333:2333 # you only need this if you want to make your lavalink accessible from outside of containers
networks:
    lavalink: # create a lavalink network you can add other containers to, to give them access to Lavalink
        name: lavalink
```

隨著 YouTube 密碼的更新越來越頻繁和複雜，跟上它的腳步變得​​越來越困難。  
為了解決這個問題，`yt-cipher` 是一個用來處理簽章解密的遠端密碼伺服器。  
你需要部署 `yt-cipher` 並把 Lavalink 的 youtube plugin 連接到 cipher server。  

詳細說明: [using-a-remote-cipher-server](https://github.com/lavalink-devs/youtube-source/?tab=readme-ov-file#using-a-remote-cipher-server)  
Github: [kikkia/yt-cipher](https://github.com/kikkia/yt-cipher)  

---

## 配置檔

將 `application.yml` 與 `docker-compose.yml` 放在同一目錄中。

```yml
server: # REST and WS server
  port: 2333
  address: 0.0.0.0

plugins:
  youtube:
    enabled: true                 # Whether this source can be used.
    allowSearch: true             # Whether "ytsearch:" and "ytmsearch:" can be used.
    allowDirectVideoIds: true     # Whether just video IDs can match. If false, only complete URLs will be loaded.
    allowDirectPlaylistIds: true  # Whether just playlist IDs can match. If false, only complete URLs will be loaded.
    # The clients to use for track loading. See below for a list of valid clients.
    # Clients are queried in the order they are given (so the first client is queried first and so on...)
    clients:
      - MUSIC
      - TVHTML5EMBEDDED
      - ANDROID_MUSIC
      - WEB
    oauth:
      # setting "enabled: true" is the bare minimum to get OAuth working.
      enabled: true

      # if you have a refresh token, you may set it below (make sure to uncomment the line to apply it).
      # setting a valid refresh token will skip the OAuth flow entirely. See above note on how to retrieve
      # your refreshToken.
      # refreshToken: "paste your refresh token here if applicable"

      # Set this if you don't want the OAuth flow to be triggered, if you intend to supply a refresh token later.
      # Initialization is skipped automatically if a valid refresh token is supplied. Leave this commented if you're
      # completing the OAuth flow for the first time/do not have a refresh token.
      # skipInitialization: true
    remoteCipher:
      url: "http://yt-cipher:8001"  # The base URL of your remote cipher server.
      password: "yt-cipher-token"   # The password to authenticate with your remote cipher server.

#  name: # Name of the plugin
#    some_key: some_value # Some key-value pair for the plugin
#    another_key: another_value

lavalink:
  plugins:
    # https://github.com/lavalink-devs/youtube-source
    - dependency: "dev.lavalink.youtube:youtube-plugin:1.14.0"
      repository: "https://maven.lavalink.dev/releases"
  server:
    password: "youshallnotpass"
    sources:
      youtube: false
      bandcamp: true
      soundcloud: true
      twitch: true
      vimeo: true
      http: true
      local: false
    filters: # All filters are enabled by default
      volume: true
      equalizer: true
      karaoke: true
      timescale: true
      tremolo: true
      vibrato: true
      distortion: true
      rotation: true
      channelMix: true
      lowPass: true
    bufferDurationMs: 400 # The duration of the NAS buffer. Higher values fare better against longer GC pauses. Duration <= 0 to disable JDA-NAS. Minimum of 40ms, lower values may introduce pauses.
    frameBufferDurationMs: 5000 # How many milliseconds of audio to keep buffered
    opusEncodingQuality: 10 # Opus encoder quality. Valid values range from 0 to 10, where 10 is best quality but is the most expensive on the CPU.
    resamplingQuality: LOW # Quality of resampling operations. Valid values are LOW, MEDIUM and HIGH, where HIGH uses the most CPU.
    trackStuckThresholdMs: 10000 # The threshold for how long a track can be stuck. A track is stuck if does not return any audio data.
    useSeekGhosting: true # Seek ghosting is the effect where whilst a seek is in progress, the audio buffer is read from until empty, or until seek is ready.
    youtubePlaylistLoadLimit: 6 # Number of pages at 100 each
    playerUpdateInterval: 5 # How frequently to send player updates to clients, in seconds
    youtubeSearchEnabled: true
    soundcloudSearchEnabled: true
    gc-warnings: true
    #ratelimit:
      #ipBlocks: ["1.0.0.0/8", "..."] # list of ip blocks
      #excludedIps: ["...", "..."] # ips which should be explicit excluded from usage by lavalink
      #strategy: "RotateOnBan" # RotateOnBan | LoadBalance | NanoSwitch | RotatingNanoSwitch
      #searchTriggersFail: true # Whether a search 429 should trigger marking the ip as failing
      #retryLimit: -1 # -1 = use default lavaplayer value | 0 = infinity | >0 = retry will happen this numbers times
    #youtubeConfig: # Required for avoiding all age restrictions by YouTube, some restricted videos still can be played without.
      #email: "" # Email of Google account
      #password: "" # Password of Google account
    #httpConfig: # Useful for blocking bad-actors from ip-grabbing your music node and attacking it, this way only the http proxy will be attacked
      #proxyHost: "localhost" # Hostname of the proxy, (ip or domain)
      #proxyPort: 3128 # Proxy port, 3128 is the default for squidProxy
      #proxyUser: "" # Optional user for basic authentication fields, leave blank if you don't use basic auth
      #proxyPassword: "" # Password for basic authentication

metrics:
  prometheus:
    enabled: false
    endpoint: /metrics

sentry:
  dsn: ""
  environment: ""
#  tags:
#    some_key: some_value
#    another_key: another_value

logging:
  file:
    path: ./logs/

  level:
    root: INFO
    lavalink: INFO

  request:
    enabled: true
    includeClientInfo: true
    includeHeaders: false
    includeQueryString: true
    includePayload: true
    maxPayloadLength: 10000

  logback:
    rollingpolicy:
      max-file-size: 1GB
      max-history: 30
```
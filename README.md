# International-Mobility-Platform

## Getting Started

### Prerequisites
- [Docker](https://www.docker.com/) and Docker Compose
- Node.js 20+ (only needed if you want to run the app outside Docker)
- [Expo Go](https://expo.dev/go) on your phone (only needed for the mobile app)

### Run everything with Docker (recommended)

To start the whole application, here's the command :
```
docker compose up -d --build
```

To stop everything (stop Docker, remove volumes and network), here's the command :
```
docker compose down -v
```

### Run the mobile app

The mobile app does not run in Docker. Your phone and your computer must be on the same Wi-Fi.

Copy `mobile/.env.example` to `mobile/.env` and set `EXPO_PUBLIC_API_URL` with your computer's local IP (not `localhost`), for example `http://192.168.1.42:3000`.

To start the mobile app, here's the command :
```
cd mobile
npm install
npx expo start
```

Then scan the QR code with Expo Go.

### Build the Android APK

The APK is built in the cloud with [EAS Build](https://docs.expo.dev/build/introduction/), an [Expo account](https://expo.dev/signup) is needed.

The API URL is set at build time : set `EXPO_PUBLIC_API_URL` in the `preview` profile of `mobile/eas.json` before building (`mobile/.env` is not sent to the build).

To build the APK, here's the command :
```
cd mobile
npx eas-cli@latest login
npx eas-cli@latest build -p android --profile preview
```

Once the build is done, download the APK from the link given in the terminal and install it on your phone.

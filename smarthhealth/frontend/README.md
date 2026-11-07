# Smart Health Assistant mobile app

The frontend is an Expo and React Native app. Install dependencies and start Expo from this directory:

```powershell
npm install
npm start
```

Scan the QR code with Expo Go, or press `a` to open an Android emulator. Run `npm run typecheck` to check TypeScript.

The disease search currently shows placeholder sample information. The Spring backend integration will be connected later through `services/api.ts`.

For a physical phone to reach a backend running on your computer, set `EXPO_PUBLIC_API_BASE_URL` in `.env.local` to your computer's LAN IP and backend port (for example, `http://192.168.1.25:8080`). The phone and computer must be on the same network, and the backend must accept connections from that network. `localhost` refers to the phone itself on a physical device. Expo public environment variables are included in the app bundle, so never put private API credentials in them.

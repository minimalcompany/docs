# [App] has stopped - Upon startup

Earlier versions of the Minimal OS didn't properly migrate all preferences and data between upgrades, and occasionally some of the Minimal apps can give you a message upon bootup that is something like:

```
Minimal Launcher has stopped
```

### Affected Apps

This can affect the following apps:
- Minimal Launcher
- Minimal Keyboard
- Quick Settings

### Solution

To solve this problem, we may be able to just reset the app data, this will remove any configuration or preferences, but will stop the crashing issue.

1. Open `Settings` (From the app drawer or swipe down from the top to access quick settings, and open it with the gear icon)

![Showing Settings in the Launcher](./launcher_settings.png)

2. Once you're in settings, navigate to `Apps`

![Selecting apps in Settings](./1.png)

3. Select `All apps`

![Selecting "All apps" in Settings](./2.png)

4. Scroll and find your affected app, tap on it

![Selecting "Minimal Launcher" in the app list](./3.png)

5. In `App info` on your affected app, select `Storage & cache`

![Selecting "Storage & Cache" in the App info page](./4.png)

6. Select `Clear storage`

:::danger Warning

This is your final warning, this will clear all app data, preferences and configuration, ensure you want to do this before continuing.

:::

![Selecting "Clear storage" in the Storage page](./5.png)

7. Select `Delete` to Delete the apps data

![Confirming to clear app data](./6.png)
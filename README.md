# Juniper Studio (Deployora demo fixture)

A fictional ceramics studio site built with React and Vite. It contains **one deliberate
configuration error**: `vercel.json` sets `"outputDirectory": "build"`, but Vite writes its
production build to `dist/`. The first deployment fails; Deployora diagnoses the log line
and proposes changing `outputDirectory` to `dist`.

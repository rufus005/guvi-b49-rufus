import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react({
//     jsxRuntime: 'classic' // Add this line
//   }), viteTsconfigPaths(), svgrPlugin()],
// });

import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src', // Your alias configuration
    },
  },
});


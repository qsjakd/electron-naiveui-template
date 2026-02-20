// main.js
import { app, BrowserWindow } from 'electron';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// 在 ESM 中手动获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let nextProcess;

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // 如果你使用 preload.cjs，记得后缀名改一下或适配
      preload: path.join(__dirname, 'preload.js'), 
      nodeIntegration: true,
      contextIsolation: true
    }
  });

  // 开发环境加载 Vite
  win.loadURL('http://localhost:5173'); 
}

app.whenReady().then(() => {
  // 启动 Next.js 服务 (建议开发环境使用 pnpm dev)
//   nextProcess = exec('pnpm dev', { cwd: path.join(__dirname, 'server') });

  // 打印 Next.js 日志方便调试
  nextProcess.stdout.on('data', (data) => console.log(`[Next.js]: ${data}`));

  createWindow();
});

app.on('window-all-closed', () => {
  if (nextProcess) nextProcess.kill();
  if (process.platform !== 'darwin') app.quit();
});
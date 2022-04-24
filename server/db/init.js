import 'dotenv/config';
import { DatabaseUtil } from "../src/utils/index.js";


(async () => {
  await DatabaseUtil.initialize();
  process.exit(1);
})()
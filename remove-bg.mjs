import { removeBackground } from '@imgly/background-removal-node';
import fs from 'fs';

async function run() {
    try {
        console.log("Starting background removal...");
        const blob = await removeBackground('src/assets/Logo_corporativo.png');
        const buffer = Buffer.from(await blob.arrayBuffer());
        fs.writeFileSync('src/assets/Logo_corporativo_clean.png', buffer);
        console.log("Success");
    } catch (e) {
        console.error(e);
    }
}
run();
